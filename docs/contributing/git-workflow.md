---
title: Git workflow
---

This repository uses two long-lived branches and [Release Please](https://github.com/googleapis/release-please) for npm releases.

| Branch | Role |
|--------|------|
| `develop` | Default branch. All feature work lands here. |
| `main` | Release branch. Receives promoted work and Release Please version bumps. |

Keeping these branches aligned is critical. If they diverge, sync pull requests will conflict even when the code is nearly identical.

## Day-to-day development

1. Branch off `develop`.
2. Open a pull request into `develop`.
3. **Squash merge** the PR.
4. Use [conventional commit titles](coding-standards) on the squash merge (for example `feat:`, `fix:`, `chore:`).

Do not open feature pull requests directly into `main`.

## Promoting work to main (without releasing yet)

When a batch of work on `develop` is ready to be considered for release:

1. Open a pull request: **`develop` → `main`**.
2. **Merge with a merge commit** (not squash).
3. Use a conventional commit title that reflects the change (for example `feat: upgrade toolchain for Node 24`).

This push triggers Release Please on `main`. Release Please will open or update a **Release Please pull request** (`release-please--branches/...`). That PR accumulates the version bump and `CHANGELOG.md` update.

You do **not** need to sync `main` back to `develop` at this stage. `develop` already contains the promoted code.

## Releasing to npm

When reviewing a Release Please pull request, **do not replace the entire PR description**. Release Please parses that body to finalize the release. Add maintainer notes *above* the auto-generated changelog, or use Release Please’s [override section](https://github.com/googleapis/release-please#how-do-i-change-the-version-number) if you need to amend release notes.

1. Review and merge the **Release Please pull request** on `main` (merge commit is fine).
2. The [Release please workflow](https://github.com/LBHackney-IT/lbh-frontend/actions/workflows/release-please.yml) publishes to npm `latest`.
3. The same workflow opens a **`main` → `develop`** sync pull request (see below).
4. A **maintainer approves and merges** that sync PR with a **merge commit**. Branch protection requires this — the automation cannot merge on its own.

### Testing before release (maintainers)

Release Please PRs build `dist/` automatically but do **not** publish to npm. To test a candidate on npm:

1. **Actions → Publish npm prerelease → Run workflow**
2. Set **git_ref** to the Release Please branch name
3. Approve the run on the **`npm-prerelease`** environment
4. Install with `npm install lbh-frontend@next`

Each approved run publishes a unique version such as `3.7.0-next.1`.

The sync step brings `package.json`, `CHANGELOG.md`, and `.release-please-manifest.json` back to `develop` so the branches stay aligned for the next cycle.

## Syncing main to develop

| When | Action |
|------|--------|
| After merging a **Release Please** PR on `main` | A maintainer approves and merges the automated sync PR (`main` → `develop`) with a **merge commit** |
| After a **direct change to `main`** (hotfix, manual edit) | Open a manual `main` → `develop` PR and merge with a **merge commit** |
| After promoting `develop` → `main` (before release) | No sync needed |

Never squash-merge `main` into `develop`. Squash merges between long-lived branches break shared git history and cause repeated conflicts.

## Merge method cheat sheet

| Pull request | Merge method |
|--------------|--------------|
| Feature branch → `develop` | **Squash** |
| `develop` → `main` (promotion) | **Merge commit** |
| Release Please PR → `main` | **Merge commit** |
| `main` → `develop` (sync) | **Merge commit** |

## What not to do

- Do not squash-merge the same work onto both `main` and `develop` as separate commits.
- Do not land work on `main` before it exists on `develop`.
- Do not manually open large “sync” PRs without resolving branch alignment first.
- Do not use `feat:` on sync PRs — use `chore: sync main after release`.
