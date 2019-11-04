# LBH Frontend

LBH Frontend contains the code you need to start building a user interface
for Hackney Council platforms and services.

<!-- See live examples of LBH Frontend components, and guidance on when to use -->
<!-- them in your service, in the [GOV.UK Design System](https://www.gov.uk/design-system). -->

## Contact the team

LBH Frontend is maintained by a team at Hackney. If you want to know more about LBH Frontend, please email [Emma Lewis](mailto:emma.lewis@hackney.gov.uk).

## Quick start

There are 2 ways to start using LBH Frontend in your app.

### 1. Install with npm (recommended)

We recommend [installing LBH Frontend using node package manager
(npm)](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md).

### 2. Install by using compiled files

You can also [download the compiled and minified assets (CSS, JavaScript) from
GitHub](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-from-dist.md).

## Importing styles

You need to import the LBH Frontend styles and the GOV.UK Frontend styles into the main Sass file in your project. You should place the below code before your own Sass rules (or Sass
imports) if you want to override GOV.UK Frontend with your own styles.

To import add the below to your Sass file:

  ```scss
  @import "node_modules/lbh-frontend/all";
  ```

[More details on importing styles](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md#importing-styles)

## Importing JavaScript

Some of the JavaScript included in LBH Frontend and GOV.UK Frontend improves the usability and accessibility of the components. You should make sure that you are importing and
initialising Javascript in your application to ensure that all users can use it successfully.

You can include Javascript for all components either by copying the `all.js` from `node_modules/lbh-frontend` into your application or referencing the file directly:

```html
<script src="<path-to-lbh-frontend-all-file>/all.js"></script>
```
Next you need to initialise the script by adding:

```html
<script>window.LBHFrontend.initAll()</script>
```

[More details on importing Javascript and advanced options](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md#importing-javascript)


## Importing assets

In order to import LBH Frontend images to your project, you should configure your application to reference or copy the relevant LBH Frontend assets.

[More details on importing assets](https://github.com/LBHackney-IT/LBH-frontend/blob/master/docs/installation/installing-with-npm.md#import-assets)


## Getting updates

To check whether you have the latest version of LBH Frontend, run:

```
npm outdated lbh-frontend
```

To update to the latest version, run:

```
npm update lbh-frontend
```

## Licence

Unless stated otherwise, the codebase is released under the MIT License. This
covers both the codebase and any sample code in the documentation. The
documentation is &copy; Crown copyright and available under the terms of the
Open Government 3.0 licence.
