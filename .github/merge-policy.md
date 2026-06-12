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
- Use a **`chore:`** promotion title (for example `chore: promote develop to main`) — **not** `feat!:` or the same title as the feature squash merge on `develop`. Release Please scans both commits and duplicates changelog entries if the breaking change appears twice.
- **No sync back to `develop` yet** — file content is already on `develop`

### 2. Test a release candidate on npm (optional)

When the Release Please PR is ready to test:

1. **Actions → Publish npm prerelease → Run workflow**
2. Set **git_ref** to the Release Please branch name (e.g. `release-please--branches--main--components--lbh-frontend`)
3. Approve the run when prompted (**`npm-prerelease`** environment — see below)
4. Install with `npm install lbh-frontend@next` or the exact `X.Y.Z-next.N` version from the workflow summary

Each run publishes a new semver prerelease (`3.7.0-next.1`, `3.7.0-next.2`, …) so npm never rejects duplicate versions.

### 3. Merge Release Please PR on `main`

- PR branch name starts with `release-please--`
- Merge with **merge commit**
- [Release please workflow](workflows/release-please.yml) publishes to npm `latest`

### 4. Merge the automated sync PR on `develop`

After a successful release, the workflow opens:

- **Title:** `chore: sync main after release <tag>`
- **Branch:** `sync/main-after-<tag>` → `develop`

A maintainer must **approve and merge with a merge commit**. Branch protection prevents the bot from merging on its own. Merge promptly so `develop` does not drift from `main` on version and changelog files.

Expected file changes: `package.json`, `CHANGELOG.md`, `.release-please-manifest.json` (and any release-only edits from `main`).

### 5. Hotfixes on `main`

If something lands on `main` outside the normal flow, open a manual `main` → `develop` sync PR and merge with a **merge commit**.

## Workflow automation

| Workflow | Trigger | Notes |
|----------|---------|-------|
| [release-please.yml](workflows/release-please.yml) | Push to `main` | Release PR, npm publish, opens sync PR |
| [publish-release.yml](workflows/publish-release.yml) | Manual (`workflow_dispatch`) | Publishes `latest` after environment approval |
| [publish-prerelease.yml](workflows/publish-prerelease.yml) | Manual (`workflow_dispatch`) | Publishes `X.Y.Z-next.N` to `@next` after environment approval |
| [tests.yml](workflows/tests.yml) | Push | Unit tests |
| [documentation.yml](workflows/documentation.yml) | Push / PR | Docs build and deploy |