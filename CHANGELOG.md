# Changelog

## Unreleased

### Bugfixes

- Remove setAttribute which broke the library for users
  ([PR #100](https://github.com/LBHackney-IT/LBH-frontend/pull/100))

### Features

## 1.9.0

### Bugfixes

### Features

- Add colours page to the app so that people can see the colours that can be used with lbh-colours
  ([PR #92](https://github.com/LBHackney-IT/LBH-frontend/pull/92))
- Remove leaflet as a dependency that gets packaged up with lbh-frontend and instead require it in the app so that it can still be used but doesn't add weight to the package. Requires users to install leaflet as dependency
  ([PR #93](https://github.com/LBHackney-IT/LBH-frontend/pull/93))
- Add panel component
  ([PR #94](https://github.com/LBHackney-IT/LBH-frontend/pull/94))
- Add summary list component
  ([PR #95](https://github.com/LBHackney-IT/LBH-frontend/pull/95))
- Update node to 12.14.0
  ([PR #96](https://github.com/LBHackney-IT/LBH-frontend/pull/96))
- Update the app to allow users to generate html
  ([PR #98](https://github.com/LBHackney-IT/LBH-frontend/pull/98))

## 1.8.3

### Bugfixes

- Fix fixed header spacing
  ([PR #90](https://github.com/LBHackney-IT/LBH-frontend/pull/90))

## 1.8.2

### Bugfixes

- Export govuk js components explicitly from all.js so that they can be imported in the global namespace
  ([PR #88](https://github.com/LBHackney-IT/LBH-frontend/pull/88))

## 1.8.1

### Bugfixes

- Include objects scss in each components import so that lbh-container, lbh-form-group, and lbh-main-wrapper are styled in components where they're used when those components are imported individually.
  ([PR #85](https://github.com/LBHackney-IT/LBH-frontend/pull/85))

## 1.8.0

### Bugfixes

- Fix header spacing for breadcrumbs and make sure lbh-header--fixed gets pushed down by skip-link focus
  ([PR #83](https://github.com/LBHackney-IT/LBH-frontend/pull/83))
- Set explicit margin on list
  ([PR #84](https://github.com/LBHackney-IT/LBH-frontend/pull/84))

### Features

- Add a basic header to our base template (which can be overwritten)
  ([PR #81](https://github.com/LBHackney-IT/LBH-frontend/pull/81))

## 1.7.0

### Bugfixes

- Move lobotomised owl spacing into helpers so that it gets included with individual component imports.
  ([PR #77](https://github.com/LBHackney-IT/LBH-frontend/pull/77))

### Features

- Add build scripts for releases
  ([PR #78](https://github.com/LBHackney-IT/LBH-frontend/pull/78))

## 1.6.3

### Bugfixes

- Change secondary button height to be the same as primary button height
  ([PR #75](https://github.com/LBHackney-IT/LBH-frontend/pull/75))

### Features

- Update to version 3.5.0 of govuk-frontend and encorporate relevant changes in our files
  ([PR #74](https://github.com/LBHackney-IT/LBH-frontend/pull/74))

## 1.6.2

### Bugfixes

- Explicitly tell govuk-frontend not to load fonts

  ([PR #72](https://github.com/LBHackney-IT/LBH-frontend/pull/72))

## 1.6.1

### Bugfixes

- Update Handlebars to 4.5.3

  ([PR #70](https://github.com/LBHackney-IT/LBH-frontend/pull/70))

## 1.6.0

### Features

- Add file upload component

  ([PR #62](https://github.com/LBHackney-IT/LBH-frontend/pull/62))

- Introduce lbh-rem function to provide rem values with pixel fallbacks

  ([PR #59](https://github.com/LBHackney-IT/LBH-frontend/pull/59))

### Bugfixes

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
