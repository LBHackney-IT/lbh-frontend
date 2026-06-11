# Hackney Design System.

[![Publish documentation](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/documentation.yml/badge.svg)](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/documentation.yml)

[![Run unit tests](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/tests.yml/badge.svg)](https://github.com/LBHackney-IT/LBH-frontend/actions/workflows/tests.yml)

The Hackney Design System contains everything you need to build user interfaces for Hackney platforms and services.

**[See the full documentation](https://design-system.hackney.gov.uk/)**

---

We have a [Codepen](https://codepen.io/jhackett1/pen/xxRWWKv) for you to quickly experiment with code samples from the design system, and a [prototype kit](https://github.com/LBHackney-IT/lbh-simple-frontend) for making flows to share with stakeholders or use in research.

We have [starter kits](https://github.com/LBHackney-IT/hackney-design-system-examples/) for using the design system in production.

---

## Contributing

We use a feature-branching strategy. Make your pull requests to the `develop` branch. See [docs/contributing/git-workflow.md](docs/contributing/git-workflow.md) for release and branch-sync policy.

**[See the full contributor guidance](https://design-system.hackney.gov.uk/contributing/introduction)**

### npm releases

- Pushes run unit tests and a production dependency audit (see `tests.yml`).
- Release Please PRs build `dist/` and commit it to the PR (`release-pr-build.yml`).
- Maintainers can publish a prerelease to npm `@next` when ready (`publish-prerelease.yml` — requires approval on the `npm-prerelease` environment).
- Merging a release publishes to npm `latest` (`release-please.yml`).

### Sass reference (`static/sassdoc`)

The Sass API docs under `static/sassdoc` are committed to the repo. Regenerate locally only when SCSS changes require it (install `sassdoc` temporarily, run `sassdoc lbh --dest static/sassdoc`, then commit).
