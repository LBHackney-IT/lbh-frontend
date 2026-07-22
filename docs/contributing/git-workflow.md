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
3. Use a **`chore:`** merge title that describes the promotion, not the feature again — for example `chore: promote develop to main`.

Release Please reads commit messages on `main`. The squash merge into `develop` already carries `feat:`, `fix:`, or `feat!:` (and any `BREAKING CHANGE` footer). If the promotion merge also uses `feat!:` or repeats the feature title, Release Please counts the same change twice and the release changelog will duplicate entries.

| PR | Put `feat!:` / `BREAKING CHANGE` here? |
|----|----------------------------------------|
| Feature branch → `develop` (squash merge) | **Yes** — this is the releasable commit |
| `develop` → `main` (promotion merge) | **No** — use `chore: promote develop to main` (or similar) |

This push triggers Release Please on `main`. Release Please will open or update a **Release Please pull request** (`release-please--branches/...`). That PR accumulates the version bump and `CHANGELOG.md` update.

You do **not** need to sync `main` back to `develop` at this stage. `develop` already contains the promoted code.

## Releasing to npm

Publishing uses [npm trusted publishers](https://docs.npmjs.com/trusted-publishers) (OIDC) via [publish-npm.yml](https://github.com/LBHackney-IT/lbh-frontend/actions/workflows/publish-npm.yml). There is no long-lived `NPM_TOKEN` in these workflows.

When reviewing a Release Please pull request, **do not replace the entire PR description**. Release Please parses that body to finalize the release. Add maintainer notes *above* the auto-generated changelog, or use Release Please’s [override section](https://github.com/googleapis/release-please#how-do-i-change-the-version-number) if you need to amend release notes.

1. Review and merge the **Release Please pull request** on `main` (merge commit is fine).
2. Release Please creates a GitHub Release; [Publish npm package](https://github.com/LBHackney-IT/lbh-frontend/actions/workflows/publish-npm.yml) publishes to npm `latest` using OIDC.
3. The Release Please workflow opens a **`main` → `develop`** sync pull request (see below). Confirm the publish workflow succeeded.
4. A **maintainer approves and merges** that sync PR with a **merge commit**. Branch protection requires this — the automation cannot merge on its own.

### Testing before release (maintainers)

When the Release Please PR is ready to test on npm:

1. **Actions → Publish npm package → Run workflow**
2. Set **channel** to `next`
3. Set **git_ref** to the Release Please branch name
4. Approve the run on the **`npm-prerelease`** environment
5. Install with `npm install lbh-frontend@next`

Each approved run publishes a unique version such as `4.0.0-next.1`.

### Publishing to npm `latest` (maintainers)

Normal releases publish automatically when a Release Please PR merges (via the GitHub Release → `publish-npm.yml`). If that step fails, or for a **hotfix** that bypasses Release Please (such as a republish), use the pipeline:

1. Merge the release commit to **`main`** and tag it (for example **`v3.7.1`**), or use an existing tag.
2. **Actions → Publish npm package → Run workflow**
3. Set **channel** to `latest` and **git_ref** to the tag (for example `v3.7.1`)
4. Approve the run on the **`npm-release`** environment

`prepublishOnly` runs `verify:pack` to check the npm tarball contents (no docs or dist build).

### Trusted publisher setup (one-time, package admins)

npm allows **one** trusted publisher workflow per package. Configure it on [npmjs.com](https://www.npmjs.com/package/lbh-frontend) → **Settings** → **Trusted Publisher**:

| Field | Value |
|-------|--------|
| Organization or user | `LBHackney-IT` |
| Repository | `lbh-frontend` |
| Workflow filename | `publish-npm.yml` |
| Environment name | leave empty (manual jobs use `npm-release` / `npm-prerelease`) |
| Allowed actions | `npm publish` |

After a successful OIDC publish, restrict token publishing under **Publishing access** → **Require two-factor authentication and disallow tokens**, then revoke the old automation `NPM_TOKEN`.

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
- Do not use `feat!:` or repeat a feature title on **`develop` → `main` promotion** merges — use `chore: promote develop to main`. Breaking changes belong on the squash merge into `develop` only.
