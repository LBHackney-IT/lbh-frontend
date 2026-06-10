# GitHub merge policy (maintainers)

This document describes the GitHub settings that support the [git workflow](../docs/contributing/git-workflow.md).

## Current ruleset

The repository uses the organisation ruleset [**Require review**](https://github.com/LBHackney-IT/lbh-frontend/rules/696232), which applies to `develop`, `main`, and other protected branches. It currently allows all merge methods: merge commit, squash, and rebase.

Policy is enforced by **which merge button contributors use** on each pull request type. Optionally, add stricter repo-level rulesets below.

## Recommended merge methods by PR type

| Target branch | Source | Merge method |
|---------------|--------|--------------|
| `develop` | Feature branch | **Squash and merge** |
| `main` | `develop` (promotion) | **Create a merge commit** |
| `main` | Release Please (`release-please--*`) | **Create a merge commit** |
| `develop` | `main` (post-release sync) | **Create a merge commit** |

### Optional: repo ruleset for `main`

To reduce mistakes, add a **repository** ruleset (higher precedence than org defaults) that applies only to `main` and allows **merge commits only**:

1. Go to **Settings → Rules → Rulesets → New branch ruleset**.
2. Name: `Main: merge commits only`.
3. Enforcement: Active.
4. Target branches: `main`.
5. Under **Branch rules → Restrict merge methods**, allow only **Merge commit**.
6. Keep existing review requirements.

`develop` should continue to allow squash merges for feature PRs.

## Post-release sync automation

The `sync-to-develop` job in [release-please.yml](workflows/release-please.yml) runs after Release Please publishes a release. It:

1. Pushes a `sync/main-after-<tag>` branch with `main` merged in
2. Opens a pull request into `develop`
3. Comments on the PR asking for maintainer action

It does **not** merge into `develop` itself. Branch protection requires admin or code owner approval like any other PR.

### Maintainer responsibility after each release

1. Find the automated PR titled `chore: sync main after release <tag>`
2. Review (should only change version, changelog, and manifest files)
3. Approve and merge with **Create a merge commit** — same day as the release

### Optional: fully automated merge

If you want the bot to merge without human approval, grant the **Release Please GitHub App** bypass access on `develop` in the ruleset and restore an auto-merge step in the workflow. This is not the default setup.

## Default branch

Keep **`develop`** as the default branch so new pull requests and clones target the integration branch.

## Checklist after adopting this policy

- [ ] Confirm team knows: feature PRs → squash to `develop`; promotion/sync → merge commit.
- [ ] Optional: add repo ruleset restricting `main` to merge commits only.
- [ ] Assign a maintainer to approve and merge each post-release sync PR.
- [ ] Complete one-time `main` → `develop` alignment if branches are currently conflicting.
- [ ] Close any stale manual “sync” PRs that predate this policy.
