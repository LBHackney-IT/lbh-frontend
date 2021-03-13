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

You need to import the design system's styles into your project's main Sass file.

If you need to override the way components look, put these imports _above_ your own code.

To import all components, add:

```scss
@import "node_modules/lbh-frontend/lbh/all";
```

### Import individual components (optional)

If you are only using a small number of components, or want to experiment with shrinking your production CSS files, you can import components one-by-one.

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

### Import JavaScript

If you're using a modern build tool like [Parcel](https://parceljs.org/) or [Webpack](https://webpack.js.org/), use the import syntax to import all components. To initialise them, use the `initAll` function:

```js
import { initAll } from "lbh-frontend"

initAll()
```

`initAll()` must be called _after_ the HTML has been rendered to the page. If you're using React, there are some [extra things you need to do](https://design-system.hackney.gov.uk/developing/react).

### Initialise individual components (optional)

If you're only using a small number of components, or adding and removing them after the page has loaded, you may want to initialise them individually.

LBH Frontend components with JavaScript behaviour have a `data-module` attribute set in their markup. You can use this to initialise them manually:

```js
import { Radios } from "lbh-frontend"

const radio = document.querySelector('[data-module="govuk-radios"]')
if (radio) {
    new Radios(radio).init()
}
```

If you're using React, use a [ref](https://reactjs.org/docs/hooks-reference.html#useref) instead.


## Importing assets

Your app needs to include our images and fonts.

`$lbh-assets-path` should be set to the publicly accessibly path to your assets. By default, it's `/assets`.

If you're running your Sass through a bundler like Parcel or Webpack, you can set it to a location inside `node_modules`, and the assets will be copied over into your production build. One of these values is normally enough:

```
$lbh-asset-path: "~lbh-frontend/lbh/assets";
$lbh-asset-path: "node_modules/lbh-frontend/lbh/assets";
```

Check our [starter kits](https://design-system.hackney.gov.uk/tutorials/production) for examples.

If you're not uing a bundler, you'll need to take extra steps:

### 1. By reference (recommended)

Make `/node_modules/lbh-frontend/lbh/assets` available to your project by routing requests for your assets folder there.

For example, if your project uses [express.js](https://expressjs.com/), this might look like:

```js
app.use(
  "/assets",
  express.static(path.join(__dirname, "/node_modules/lbh-frontend/lbh/assets"))
)
```

### 2. Copying assets

Manually copy the entire `/node_modules/lbh-frontend/lbh/assets` folder into a public facing directory in your project.

You should make this part of your automatic build process so it stays up to date.

Then, set `$lbh-assets-path` in your project Sass file to point to the relevant directories in your project.

