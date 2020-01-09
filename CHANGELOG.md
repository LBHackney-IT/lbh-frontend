# Changelog

## Unreleased

### Bugfixes:

### Features

## 1.6.2

### Bugfixes:

- Explicitly tell govuk-frontend not to load fonts

  ([PR #71](https://github.com/LBHackney-IT/LBH-frontend/pull/71))

## 1.6.1

### Bugfixes:

- Update Handlebars to 4.5.3

  ([PR #70](https://github.com/LBHackney-IT/LBH-frontend/pull/70))

## 1.6.0

### Features

- Add file upload component

  ([PR #62](https://github.com/LBHackney-IT/LBH-frontend/pull/62))

- Introduce lbh-rem function to provide rem values with pixel fallbacks

  ([PR #59](https://github.com/LBHackney-IT/LBH-frontend/pull/59))

### Bugfixes:

- Add margin top to buttons and fieldsets where margin-top: 0 is set in govuk 

  ([PR #61](https://github.com/LBHackney-IT/LBH-frontend/pull/61))

- Duplicate govuk fieldset template in lbh fieldset component template in order 
  to maintain caller() functionality (this didn't work when simply calling the 
  govuk-fieldset macro from the lbh-fieldset template)

  ([PR #60](https://github.com/LBHackney-IT/LBH-frontend/pull/60))

- Replace SVG for lbh-logo with correct svg

  ([PR #58](https://github.com/LBHackney-IT/LBH-frontend/pull/58))

- Import file for govuk-width-container in lbh-container

  ([PR #57](https://github.com/LBHackney-IT/LBH-frontend/pull/57))

## 1.5.0

### New features:

- Fix form group import

  ([PR #54](https://github.com/LBHackney-IT/LBH-frontend/pull/54))

## 1.4.0

### New features:

- Check the "engines" field of the package.json for the node version

  Rather than relying on things like NVM, we can support any Node environment 
  manager by comparing to the package.json.

  ([PR #43](https://github.com/LBHackney-IT/LBH-frontend/pull/43))

- Remove sass extends

  Sass @extends were causing issues depending on where the extend rule ended up in the final CSS - which differed depending on whether you're importing all styles, or just an individual component. I've removed all of the typography extends and created mixins in the helpers folder instead which can be included wherever needed.

  ([PR #44](https://github.com/LBHackney-IT/LBH-frontend/pull/44))

- Add hint component

  Add in the hint component and add the lbh-hint class to hints added via other components such as checkbox, radios, and more.

  ([PR #46](https://github.com/LBHackney-IT/LBH-frontend/pull/46))

- Add label component

  Add in the label component and add the lbh-label class to labels added via other components where possible. Creates an lbh-label mixin for when we can't apply the lbh-label class.

  ([PR #47](https://github.com/LBHackney-IT/LBH-frontend/pull/47))

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
