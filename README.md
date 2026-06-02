# Hackney Design System

[![Publish documentation](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/documentation.yml/badge.svg)](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/documentation.yml)

[![Run unit tests](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/tests.yml/badge.svg)](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/tests.yml)

The Hackney Design System contains everything you need to build user interfaces for Hackney platforms and services.

**[See the full documentation](https://design-system.hackney.gov.uk/)**

---

We have a [Codepen](https://codepen.io/jhackett1/pen/xxRWWKv) for you to quickly experiment with code samples from the design system, and a [prototype kit](https://github.com/LBHackney-IT/lbh-simple-frontend) for making flows to share with stakeholders or use in research.

We have [starter kits](https://github.com/LBHackney-IT/hackney-design-system-examples/) for using the design system in production.

---

## Contributing

We use a feature-branching strategy. Make your pull requests to the `develop` branch.

**[See the full contributor guidance](https://design-system.hackney.gov.uk/contributing/introduction)**

## Branching & releases

This repo uses two long-lived branches:

| Branch | Purpose |
|--------|---------|
| **`develop`** | Default branch. Feature work is integrated here. |
| **`main`** | Release branch. Pushes here trigger **npm publish** and **semantic-release**. |

### Where to branch from

| Change type | Branch from | Open PR into |
|-------------|---------------|--------------|
| **Features, fixes, docs, chores** (normal work) | **`develop`** | **`develop`** |
| **Production hotfix** (urgent npm release) | **`main`** | **`main`** |
| **Sync after release** (no new feature work) | **`main`** | **`develop`** |

Always start from an up-to-date base:

```bash
git fetch origin

# New feature or fix (usual case)
git checkout develop
git pull origin develop
git checkout -b feat/my-change

# Hotfix for what is already on npm
git checkout main
git pull origin main
git checkout -b fix/my-hotfix
```

Use short branch names with a conventional prefix where you can (`feat/`, `fix/`, `chore/`). Target **`develop`** for day-to-day work—even if `main` is ahead on release commits, new features should not branch from `main` unless you are doing a hotfix.

Pull requests are **squash-merged** only (org setting). That keeps `main` history tidy, but `main` and `develop` will not share the same commit graph. GitHub’s compare view can list many old commits even when both branches already contain the same code. To check whether branches match, use:

```bash
git fetch origin
git diff origin/main origin/develop
```

An empty diff means the code is in sync; ignore the commit count on Compare.

### Commit messages

Releases on `main` are driven by **[semantic-release](https://semantic-release.gitbook.io/)**, which reads **conventional commits** (`feat:`, `fix:`, `chore:`, etc.). Use those prefixes on PR titles (they become the squash commit message). Avoid generic squash titles like `sync` or `test` on PRs into `main`, or versioning may not run as expected.

### Release flow (`develop` → npm → sync back)

Use this when shipping a new package version:

1. **Integrate on `develop`**  
   Open feature PRs → **`develop`** (squash merge). Ensure CI passes (`npm test`, docs build on PRs to `main` where applicable).

2. **Promote to `main`**  
   Open **`develop` → `main`**. Use a **conventional squash title** that describes the release (e.g. `feat: update build for Node 20`).  
   Before opening the PR, confirm there is a real delta:
   ```bash
   git diff origin/main origin/develop
   ```
   If the diff is empty, there is nothing to release—sync branches instead of merging an empty promotion.

3. **Publish**  
   Squash-merge into **`main`**. On push, the **Release to NPM** workflow runs semantic-release, which may:
   - bump `package.json`
   - update `CHANGELOG.md`
   - commit built `dist` assets
   - publish to npm and create a GitHub release  

   Only commits on **`main`** trigger this; `develop` does not publish.

4. **Sync back to `develop`**  
   After release, open **`main` → `develop`** (squash merge, e.g. `chore: sync main after 3.6.2`) so `develop` picks up the release commit, version bump, and `CHANGELOG.md`. Skip this step and `develop` will drift from `main` again.

5. **Docs / GitHub Pages**  
   Documentation deploys from **`main`** (see `.github/workflows/documentation.yml`).

### Hotfixes

For urgent fixes on the live package: follow the **hotfix** row in [Where to branch from](#where-to-branch-from) (`main` → `main`), use a `fix:` squash title, then **sync `main` → `develop`** (step 4 above).
