# GitHub merge policy (maintainers)

Internal reference for repository admins. Contributors should follow [Git workflow](../docs/contributing/git-workflow.md) instead.

## Branch roles

| Branch | Default? | Purpose |
|--------|----------|---------|
| `develop` | Yes | Integration — all feature PRs land here |
| `main` | No | Release — promotion merges and Release Please |

## Merge method by PR type

| Pull request | Merge button |
|--------------|--------------|
| Feature branch → `develop` | **Squash and merge** |
| `develop` → `main` (promotion) | **Create a merge commit** |
| Release Please (`release-please--*`) → `main` | **Create a merge commit** |
| `main` → `develop` (post-release sync) | **Create a merge commit** |

Never squash-merge between `main` and `develop`.

## Release cycle (maintainer checklist)

### 1. Promote `develop` → `main` (optional before release)

- Open PR: `develop` → `main`
- Merge with **merge commit**
- Use a conventional title (`feat:`, `fix:`, etc.) — this feeds Release Please
- **No sync back to `develop` yet** — file content is already on `develop`

### 2. Merge Release Please PR on `main`

- PR branch name starts with `release-please--`
- Merge with **merge commit**
- [Release please workflow](workflows/release-please.yml) publishes to npm `latest`

### 3. Merge the automated sync PR on `develop`

After a successful release, the workflow opens:

- **Title:** `chore: sync main after release <tag>`
- **Branch:** `sync/main-after-<tag>` → `develop`

A maintainer must **approve and merge with a merge commit**. Branch protection prevents the bot from merging on its own. Merge promptly so `develop` does not drift from `main` on version and changelog files.

Expected file changes: `package.json`, `CHANGELOG.md`, `.release-please-manifest.json` (and any release-only edits from `main`).

### 4. Hotfixes on `main`

If something lands on `main` outside the normal flow, open a manual `main` → `develop` sync PR and merge with a **merge commit**.

## Workflow automation

| Workflow | Trigger | Notes |
|----------|---------|-------|
| [release-please.yml](workflows/release-please.yml) | Push to `main` | Release PR, npm publish, opens sync PR |
| [release-pr-build.yml](workflows/release-pr-build.yml) | Release Please PRs to `main` | Builds `dist/`, publishes `@next`, commits to PR branch |
| [tests.yml](workflows/tests.yml) | Push | Unit tests |
| [documentation.yml](workflows/documentation.yml) | Push / PR | Docs build and deploy |