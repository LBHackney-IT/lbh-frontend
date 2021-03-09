---
title: Coding standards
---

## Commit messages

We use [Angular commit message conventions](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format). This lets us automatically release new versions to NPM with accurate [semver](https://semver.org/) version numbers.

These commit messages look like:

```bash
<type>(<scope>): <short summary>
```

For example, adding a new component to the design system might have a commit message like:

```bash
feat(component-xyz): Added component xyz
```

The keyword `feat` indicates that this commit includes a new feature, and will trigger a minor version increase when merged into the main branch.

If you're just fixing a bug, you could use `fix` instead, which will trigger a patch release.

The text inside the brackets indicates the scope of your changes. Normally this is the name of the component you're adding or changing. You could also use `core` for changes to tooling, or `docs` for pure documentation changes.

After the colon, you can write your commit message as normal.

You can read more about this format in the [semantic-release docs](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#-commit-message-format).

## Testing

We use [Jest](https://jestjs.io/) to run our tests.

If you add a component that includes JavaScript, you must add jest unit tests for it.

Because many of our components are purely presentational and consist only of HTML and SCSS, we don't unit test them in the usual way. Instead, we use:

- [axe](https://www.deque.com/axe/) to warn us about any accessibility issues in our markup
- [jest-image-snapshot](https://github.com/americanexpress/jest-image-snapshot) to warn us about unexpected visual regressions in our components, so we don't accidentally change the way components look

We use the documentation file for a component (in `docs/components`) as the source material for these tests. This way you don't have to write seperate test cases.
