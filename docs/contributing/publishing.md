# Publishing GOV.UK Frontend

### Releasing versions

1. Create a new branch called `release/vx.y.z`, where `x.y.z` is the new version number, following [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

1. Update `CHANGELOG.md` to batch the changes in this version under a heading in the following format:

```md
## [Unreleased]

## [x.y.z]

### Bugfixes

### Features

...

## [a.b.c]

### Bugfixes

### Features

...
```

1. Commit the changes as "Update the changelog in preparation for `vx.y.z`".

1. Run the version bumping script:

   ```sh
   bin/bump-version "x.y.z"
   ```

1. Push the branch and create a pull request, copying the contents of this
   version from the changelog into the description.

1. Get the pull request reviewed.

1. When approved and ready to publish:

   ```sh
   bin/publish "x.y.z"
   ```

1. Merge the pull request and publicize the release.
