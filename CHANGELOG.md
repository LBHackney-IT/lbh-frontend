# Changelog

## Unreleased

### New features:

- Check the "engines" field of the package.json for the node version

  Rather than relying on things like NVM, we can support any Node environment 
  manager by comparing to the package.json.

  ([PR #43](https://github.com/LBHackney-IT/LBH-frontend/pull/43))

## 1.3.0

### New features:

- Update to govuk-frontend version 3.3.0

  Update the version of govuk-frontend, made visual changes to the warning text
  component, so backstop images got updated. Also copied their change to allow
  lang to be set in template.njk

  ([PR #39](https://github.com/LBHackney-IT/LBH-frontend/pull/39))

- Add favicon to assets

  Add a favicon so that it can be imported by users of the library

  ([PR #38](https://github.com/LBHackney-IT/LBH-frontend/pull/38))

- Add changelog

  Add a changelog so that we can see what is happening in new releases

  ([PR #37](https://github.com/LBHackney-IT/LBH-frontend/pull/37))

- Add Tag component

  Add a tag component so it can be imported separately from external libraries

  ([PR #41](https://github.com/LBHackney-IT/LBH-frontend/pull/41))
