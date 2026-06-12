---
title: Migrating from dist
---

From **4.0.0**, `lbh-frontend` no longer ships minified CSS, JavaScript, or assets under `dist/`. Use [npm](/developing/installing-from-npm) and compile Sass / bundle JavaScript in your application build.

## If you used script tags and `window.LBHFrontend`

Migrate to a bundler (Webpack, Vite, Parcel, etc.) and import from the package:

```js
import { initAll } from "lbh-frontend";

initAll();
```

Import styles from `lbh/` in your Sass entrypoint — see [installing with npm](/developing/installing-from-npm).

See [starter kits](https://design-system.hackney.gov.uk/tutorials/production) for framework examples.

## If you downloaded files from GitHub

That workflow is no longer supported. Pin to **3.7.x** if you need time to migrate, then upgrade to **4.x** with a build pipeline.
