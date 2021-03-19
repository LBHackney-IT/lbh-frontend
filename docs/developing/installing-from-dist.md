---
title: Installing from dist
---

:::caution
You should only use the code from dist if you're adapting a legacy app. If you're starting something new, [use npm instead](/developing/installing-from-npm).
:::

When installing from `dist`, you are using compiled and minified versions of the
stylesheet. This means that you will not be able to:

- selectively include the CSS or JavaScript for individual components.
- build your own styles or components based on the palette or typography and
  spacing mixins.
- customise the build (for example, overriding colours or enabling global
  styles).

If you need any of this functionality, you must [install using node package manager](https://design-system.hackney.gov.uk/developing/installing-from-npm) instead.

## Installation

### 1. Download resources

Download the latest compiled and minified versions of the stylesheets,
JavaScript and the assets:

- [CSS and JavaScript](https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist)
- [Assets](https://github.com/LBHackney-IT/lbh-frontend/tree/master/dist/assets)

### 2. Include resources

You must copy the entire `assets` folder to the root of your service.

Follow the below example to add the CSS and JavaScript files to your HTML template. This example assumes you have copied the stylesheets and JavaScript files to `/stylesheets` and `/javascript` respectively.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Example</title>
    <!--[if !IE 8]><!-->
    <link
      rel="stylesheet"
      href="stylesheets/lbh-frontend-[latest version].min.css"
    />
    <!--<![endif]-->
    <!--[if IE 8]>
      <link
        rel="stylesheet"
        href="stylesheets/lbh-frontend-ie8-[latest-version].min.css"
      />
    <![endif]-->
  </head>
  <body>
    <!-- Copy and paste component HTML-->
    <button class="lbh-button">This is a button component</button>
    <script src="javascript/lbh-frontend-[latest version].min.js"></script>
    <script>
      window.LBHFrontend.initAll();
    </script>
  </body>
</html>
```
