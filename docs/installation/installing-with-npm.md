# Installing LBH Frontend with node package manager (NPM)

## Requirements

To use > N Frontend with NPM you must:

1. Install the long-term support (LTS) version of
   [Node.js](https://nodejs.org/en/), which includes NPM. The minimum version of
   Node required is 4.2.0.

   (We recommend using [`nvm`](https://github.com/creationix/nvm) for managing
   versions of Node.)

2. Create a [package.json file](https://docs.npmjs.com/files/package.json) if
   you don’t already have one. You can create a default `package.json` file by
   running `npm init` from the root of your application.

3. If you want to use the LBH Frontend Nunjucks macros, install Nunjucks -
   the minimum version required is 3.0.0.

```
npm install nunjucks --save
```

## Installation

To install, run:

```
npm install --save lbh-frontend
```

After you have installed GOV.UK Frontend the `lbh-frontend` package will
appear in your `node_modules` folder.

## Importing styles

You need to import the LBH Frontend styles into the main Sass file in your
project. You should place the below code before your own Sass rules (or Sass
imports) if you want to override LBH Frontend with your own styles.

1. To import all components, add the below to your Sass file:

  ```SCSS
  @import "node_modules/lbh-frontend/lbh/all";
  ```

2. To import an individual component (for example a button), add the below to
your Sass file:

  ```SCSS
  @import "node_modules/lbh-frontend/lbh/components/lbh-button/button";
  ```

### Optional: Resolving SCSS import paths

If you wish to resolve the above `@import` paths in your build (in order to
avoid prefixing paths with `node_modules`), you should add `node_modules` to
your [Sass include paths](https://github.com/sass/node-sass#includepaths)
(in Ruby, they should be added to [assets
paths](http://guides.rubyonrails.org/asset_pipeline.html#search-paths)).

For example, if your project uses Gulp, you would add the Sass include paths to
your Gulp configuration file (for example `gulpfile.js`) with
[gulp-sass](https://www.npmjs.com/package/gulp-sass). Below is an example:

```JS
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({
      includePaths: 'node_modules'
     }))
    .pipe(gulp.dest('./css'));
});

```

If you compile Sass to CSS in your project, your build tasks will already
include something similar to the above task - in that case, you will just need
to include add `includePaths` to it.

After resolving the import paths you can import LBH Frontend by using:

```SCSS
@import "lbh-frontend/lbh/components/button/button";
```

### Global Styles

LBH Frontend avoids applying styles globally on HTML elements such as `body`; instead, styles are are applied using classes. One exception to this is that we are using the [lobotomised owl selector](https://alistapart.com/article/axiomatic-css-and-lobotomized-owls/) to ensure sensible spacing across/between components; due to its low specificity it is easy to overwrite for specific selectors if necessary &mdash; you may find you need to do this for a number of selectors.

This to avoid the risk of global styles conflicting with any pre-existing globals or with any app specific CSS.

These [global styles](../../src/lbh/core/_global-styles.scss) (`<h1>` to `<h6>`, `<p>`, `<a>`) are not included by default in LBH Frontend. To include these global styles in your app, you can set `$lbh-global-styles` variable to `true` before importing LBH Frontend styles into your app:

```SCSS
// application.scss

$lbh-global-styles: true;

@import "lbh-frontend/lbh/all";
```


## Using JavaScript

Some of the JavaScript included in LBH Frontend improves the usability and
accessibility of the components.

For example, the JavaScript will:

- allow links styled as buttons to be triggered with the space bar when focused,
  which matches the behaviour of native buttons and the way the button is
  described when using assistive technologies.
- enhance the details component to help users of assistive technologies
  understand whether it is expanded or collapsed, and to make the component
  behave correctly for users of Internet Explorer 8.

You should [include](#option-1-include-javascript) or [import](#option-2-import-javascript) LBH Frontend JavaScript, and then initialise the script in your application to ensure that all users can use it successfully.

Note that LBH Frontend does not initialise any scripts by default; all scripts **must** be initialised in order for them to work.

### Option 1: Include JavaScript

Include the `node_modules/lbh-frontend/lbh/all.js` script on your page. You might wish to copy the file into your project or reference it from `node_modules`.

To initialise all components, use the `initAll` function.

JavaScript in LBH Frontend requires HTML to be parsed first by the browser before it is initialised. Because of this, make sure you include the script before the closing `</body>` tag.
Including the script elsewhere will stop components from functioning or displaying correctly.

```html
    <script src="path-to-assets/lbh-frontend/lbh/all.js"></script>
    <script>window.LBHFrontend.initAll()</script>
  </body>
</html>
```

#### Initialise LBH Frontend in only certain sections of a page

By default, the `initAll` function from LBH Frontend initialises all components scoped to an entire page with the `document` object.

You can change this by passing the `scope` parameter to the `initAll` function.

For example, if you have a modal dialog box that opens with new markup you could do the following:

```js
var $modal = document.querySelector('.modal')
window.LBHFrontend.initAll({
  scope: $modal
})
```

#### Initialise individual included components

LBH Frontend components with JavaScript behaviour have the `data-module` attribute set in their markup.

You can use this attribute to initialise the component manually. This may be useful if you are adding markup to a page after it has loaded.

To initialise the first radio component on a page, use:

```js
var Radios = window.LBHFrontend.Radios
var $radio = document.querySelector('[data-module="lbh-radios"]')
if ($radio) {
  new Radios($radio).init()
}
```

### Option 2: Import JavaScript

If you're using a bundler such as [Webpack](https://webpack.js.org/), use the `import` syntax to import all components. To initialise them, use the `initAll` function:

```JS
import { initAll } from 'lbh-frontend'

initAll()
```

If you're using a bundler such as [Browserify](http://browserify.org/), you may need to use the CommonJS `require`:

```JS
const LBHFrontend = require('lbh-frontend')

LBHFrontend.initAll()
```

#### Import individual components

If you're using a bundler such as Webpack, use the `import` syntax to import a component:

```JS
import { Radios } from 'lbh-frontend'
```

If you're using a bundler such as [Browserify](http://browserify.org/), you may need to use the CommonJS `require`:


```JS
const LBHFrontend = require('lbh-frontend')

const Radios = LBHFrontend.Radios
```

LBH Frontend components with JavaScript behaviour have the `data-module` attribute set in their markup.

You can use this attribute to initialise the component manually, this may be useful if you are adding markup to a page after it has loaded.

To initialise the first radio component on a page, use:

```js
var $radio = document.querySelector('[data-module="lbh-radios"]')
if ($radio) {
  new Radios($radio).init()
}
```

### Polyfills
A JavaScript polyfill provides functionality on older browsers or assistive technology that do not natively support it.

The polyfills provided with GOV.UK Frontend aim to fix usability and accessibility issues. If there is a JavaScript included in the component directory, it is important to import and initialise it in your project to ensure that all users can properly use the component (see [Polyfilling](/docs/contributing/polyfilling.md)).

### How LBH Frontend is bundled
The JavaScript included in GOV.UK Frontend components are in [UMD (Universal Module Definition)](https://github.com/umdjs/umd) format which makes it compatible with AMD (Asynchronous module definition) and CommonJS.

See [JavaScript Coding Standards](/docs/contributing/coding-standards/js.md) for more details of how JavaScript is used in the project.

#### Using LBH Frontend with Webpack 4
Here's an example of setting up [`webpack.config.js`](examples/webpack/webpack.config.js) in your project

## Importing assets

In order to import LBH Frontend images and fonts to your project, you should configure your application to reference or copy the relevant LBH Frontend assets.

Follow either [Recommended solution](#recommended-solution) or [Alternative solution](#alternative-solution).

### Recommended solution

Make `/node_modules/lbh-frontend/assets` available to your project by routing
requests for your assets folder there.

For example, if your project uses [express.js](https://expressjs.com/), below is
a code sample you could add to your configuration:

```JS
app.use('/assets', express.static(path.join(__dirname, '/node_modules/lbh-frontend/lbh/assets')))
```
### Alternative solution

Manually copy the images and fonts from `/node_modules/lbh-frontend/lbh/assets` into a public facing directory in your project. Ideally copying the files to your project should be an automated task or part of your build pipeline to ensure that the LBH Frontend assets stay up-to-date.

The default paths used for assets are `assets/images` and `assets/fonts`. **If your asset folders follow this structure, you will not need to complete the following steps.**

To use different asset paths, also complete the below step(s).

1. Set `$govuk-assets-path`, `$govuk-images-path` and `$govuk-fonts-path` in your project Sass file to point to the relevant directories in your project (this will override the defaults set in `/node_modules/govuk-frontend/settings/_assets.scss`). Make sure you do this in Sass before importing `lbh-frontend` into your project - see [Importing styles](#importing-styles).

  Example 1:

  ``` SCSS
  // Include images from /application/assets/images and fonts from /application/assets/fonts
  $govuk-assets-path: '/application/assets';

  @import "lbh-frontend/lbh/all";
  ```

  Example 2:

  ``` SCSS
  // Include images from /images/govuk-frontend and fonts from /fonts
  $govuk-images-path: "/images/lbh-frontend/";
  $govuk-fonts-path: "/fonts/";

  @import "lbh-frontend/lbh/all";
  ```

2. Optional: You can also override the helpers used to generate the asset urls, for example if you are using sass-rails' asset-pipeline functionality. You can do this by setting `$govuk-image-url-function` to the name of the function(s) you wish to use. See `src/govuk/settings/_assets.scss` for more information and examples.

## Include CSS and JavaScript

Add the CSS and JavaScript code to your HTML template:

```html
<!DOCTYPE html>
  <head>
    <title>Example</title>
    <link rel="stylesheet" href="assets/application.css">
  </head>
  <body>
    <!-- Copy and paste component HTML-->
    <button class="lbh-button">This is a button component</button>
    <script src="assets/application.js"></script>
  </body>
</html>
```

If your service supports Internet Explorer 8, you will need to [generate and
include a separate stylesheet](supporting-internet-explorer-8.md) as well.
