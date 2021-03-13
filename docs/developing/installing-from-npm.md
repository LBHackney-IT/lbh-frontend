---
title: Installing with npm
---

The recommended way to use the Hackney design system is to install it with npm.

Before you follow these steps, take a look at our [starter kits](https://design-system.hackney.gov.uk/tutorials/production) to see if there's a pre-made example for your framework.

## Prerequisites

You need [Node.js](https://nodejs.org/en/) and npm installed.

If your project isn't already using npm, you'll need to run `npm init` to generate a `package.json` file.

## Installation

To install, run:

```bash
npm install lbh-frontend
```

When it completes, you should see `lbh-frontend` in your `node_modules` folder.

`govuk-frontend` will also be automatically installed.

## Importing styles

You need to import the design system's styles into your project's main sass file.

If you need to override the way components look, put these imports _above_ your own code.

To import all components, add:

```scss
@import "node_modules/lbh-frontend/lbh/all";
```

### Import individual components (optional)

If you are only using a small number of components, or want to experiment with shrinking the size of your production CSS files, you can import components one-by-one.

For example, importing the [button](https://design-system.hackney.gov.uk/components/button) looks like:

```scss
@import "node_modules/lbh-frontend/lbh/components/lbh-button/button";
```

Don't forget to add these imports before your components:

```scss
@import "node_modules/lbh-frontend/lbh/core/all";
@import "node_modules/lbh-frontend/lbh/objects/all";
```

### Resolve import paths (optional)

If you want to be able to write cleaner imports, you can add `node_modules` to your Sass include paths.

If you're using the Sass CLI, use the `--load-paths` [option](https://sass-lang.com/documentation/cli/dart-sass#load-path).

In Rails, you'll need to add `node_modules` to your [asset paths](https://guides.rubyonrails.org/asset_pipeline.html#search-paths).

Frameworks like Next.js have [their own way of doing this](https://nextjs.org/docs/basic-features/built-in-css-support#customizing-sass-options).

This lets you write imports like:

```scss
@import "lbh-frontend/lbh/components/button/button";
```

### Global styles

By default, the design system avoids applying styles directly to elements like the HTML body, heading and paragraph tags. Instead, you need to apply classes.

This is useful if you want to avoid conflicts with other styles in your app.

To change this behaviour, set `$lbh-global-styles` to true before you import the design system styles:

```scss
$lbh-global-styles: true;

@import "lbh-frontend/lbh/all";
```

One exception to this rule is the [lobotomised owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/), which we use to ensure sensible default spacing between components. It's easily overridden if you need.

## Using JavaScript

Some components include JavaScript to improve their usability and accessibility.

For example, the JavaScript will:

- allow [links styled as buttons](https://design-system.hackney.gov.uk/components/button#button-link) to be triggered with the space bar, like native buttons
- inform screen readers whether the [details](https://design-system.hackney.gov.uk/components/details) component is expanded or collapsed

:::note
Our JavaScript includes polyfills that stabilise how components behave with assistive technology and older browsers. You should always import and init a component's JavaScript, even if you're not sure what it's doing.
:::

## Import JavaScript

If you're using a modern build tool like [Parcel](https://parceljs.org/) or [Webpack](https://webpack.js.org/), use the import syntax to import all components. To initialise them, use the initAll function:

```js
import { initAll } from "lbh-frontend"

initAll()
```

`initAll()` must be called _after_ the HTML has been rendered to the page. If you're using React, there are some [extra things you need to do](https://design-system.hackney.gov.uk/developing/react).

### Initialise individual components (optional)

If you're only using a small number of components, or adding and removing them on the fly using a framework like React, you may want to initialise them individually.

LBH Frontend components with JavaScript behaviour have a `data-module` attribute set in their markup. You can use this to initialise them manually:

```js
import { Radios } from "lbh-frontend"

const radio = document.querySelector('[data-module="govuk-radios"]')
if (radio) {
    new Radios(radio).init()
}
```

If you're using React, use a [ref](https://reactjs.org/docs/refs-and-the-dom.html) instead.


## Importing assets

In order to import LBH Frontend images and fonts to your project, you should configure your application to reference or copy the relevant LBH Frontend assets.

### Recommended solution

Make `/node_modules/lbh-frontend/lbh/assets` available to your project by routing
requests for your assets folder there.

For example, if your project uses [express.js](https://expressjs.com/), below is
a code sample you could add to your configuration:

```js
app.use(
  "/assets",
  express.static(path.join(__dirname, "/node_modules/lbh-frontend/lbh/assets"))
)
```

### Alternative solution

Manually copy the images and fonts from `/node_modules/lbh-frontend/lbh/assets` into a public facing directory in your project. Ideally copying the files to your project should be an automated task or part of your build pipeline to ensure that the LBH Frontend assets stay up-to-date.

The default paths used for assets are `assets/images` and `assets/fonts`. **If your asset folders follow this structure, you will not need to complete the following steps.**

To use different asset paths, also complete the below step(s).

1. Set `$govuk-assets-path`, `$govuk-images-path` and `$govuk-fonts-path` in your project Sass file to point to the relevant directories in your project (this will override the defaults set in `/node_modules/govuk-frontend/settings/_assets.scss`). Make sure you do this in Sass before importing `lbh-frontend` into your project - see [Importing styles](#importing-styles).

Example 1:

```scss
// Include images from /application/assets/images and fonts from /application/assets/fonts
$govuk-assets-path: "/application/assets";

@import "lbh-frontend/lbh/all";
```

Example 2:

```scss
// Include images from /images/govuk-frontend and fonts from /fonts
$govuk-images-path: "/images/lbh-frontend/";
$govuk-fonts-path: "/fonts/";

@import "lbh-frontend/lbh/all";
```

2. Optional: You can also override the helpers used to generate the asset urls, for example if you are using sass-rails' asset-pipeline functionality. You can do this by setting `$govuk-image-url-function` to the name of the function(s) you wish to use. See `src/govuk/settings/_assets.scss` for more information and examples.
