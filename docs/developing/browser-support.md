---
title: Browser support
---

LBH Frontend will allow you to build services that comply with the [guidance
in the GOV.UK Service Manual][service-manual-browsers].

## Browsers

Currently, LBH Frontend officially supports the following browsers:

| Operating system | Browser                              | Support    |
| ---------------- | ------------------------------------ | ---------- |
| Windows          | Internet Explorer 8-10               | functional |
| Windows          | Internet Explorer 11                 | compliant  |
| Windows          | Edge (latest 2 versions)             | compliant  |
| Windows          | Google Chrome (latest 2 versions)    | compliant  |
| Windows          | Mozilla Firefox (latest 2 versions)  | compliant  |
| macOS            | Safari 9+                            | compliant  |
| macOS            | Google Chrome (latest 2 versions)    | compliant  |
| macOS            | Mozilla Firefox (latest 2 versions)  | compliant  |
| iOS              | Safari for iOS 9.3+                  | compliant  |
| iOS              | Google Chrome (latest 2 versions)    | compliant  |
| Android          | Google Chrome (latest 2 versions)    | compliant  |
| Android          | Samsung Internet (latest 2 versions) | compliant  |

‘Compliant’ means that the components must look as good and function as well as
they do in other modern browsers.

'Functional' means the components may not look perfect in the given browser, but
must still be usable without errors and without 'looking broken'.

[service-manual-browsers]: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in

### Supporting Internet Explorer 8

It's difficult, but just about still possible, to use the Hackney design system in an app that supports IE8:

1. [Include an HTML5 shiv](#include-an-html5-shiv)
2. [Generate an IE8-specific stylesheet](#bundling-an-ie8-specific-stylesheet)
3. [Transform the IE8 stylesheet using oldie](#transforming-the-generated-stylesheet-using-oldie)
4. [Include the IE8 stylesheet in your project](#including-the-ie8-stylesheet-in-your-project)

Once you have completed these steps, you will be able to write CSS that targets IE8 in your own application styles.

If you are using the distributed versions of LBH Frontend that already
include an IE8-specific stylesheet then you can include that in your project, skipping steps 2 and 3.

#### 1. Include an HTML5 shiv

You will need to to include a [HTML5 shiv](https://github.com/aFarkas/html5shiv)
which allows the 'semantic' HTML elements introduced in HTML5 to be used in
older browsers which do not natively support them.

These elements include `article`, `aside`, `figcaption`, `figure`, `footer`,
`header`, `main`, `mark`, `nav`, `section`, and `time`.

To improve performance for users of modern browsers, you can wrap the shiv
include with conditional comments that target only the browsers that need it:

```html
<!--[if lt IE 9]>
  <script src="/path/tohtml5shiv.js"></script>
<![endif]-->
```

Note that some libraries such as Modernizr may already include html5shiv.

#### 2. Bundling an IE8-specific stylesheet

Setting the `$govuk-is-ie8` variable to `true` when generating the stylesheet
will create a version that targets IE8. For example, it will:

- flatten media queries to create a 'desktop only' version
- include any conditional styles that target IE8
- exclude any conditional styles that target browsers other than IE8

You must set the variable before importing LBH Frontend.

In most scenarios you should be able to create a separate stylesheet for IE8,
set the `$govuk-is-ie8` variable to true and then import your main application
stylesheet without having to redefine anything else.

```scss
// application.scss

@import "lbh-frontend/lbh/all";

.example {
  // example application style
}

// application-ie8.scss

$govuk-is-ie8: true;

@import "application";
```

#### 3. Transforming the generated stylesheet using 'oldie'

You should use the [oldie](https://github.com/jonathantneal/oldie) plugin for
[postcss](https://github.com/postcss/postcss) to further transform the
stylesheet:

- replacing opacity properties with compatible filter properties
- swapping :: selectors with compatible : selectors for pseudo-elements
- swapping rgba colours with compatible hex colours and filter properties

The oldie plugin is also able to flatten media queries, but this will already
have been done as part of the stylesheet compilation in step 1.

Doing this as a separate step allows us to keep the source of LBH Frontend
simple, without having to wrap syntax that would need to be transformed in
mixins or functions.

#### 4. Including the IE8 stylesheet in your project

Now that you have an IE8 compatible stylesheet you should include it using
[conditional comments](https://www.quirksmode.org/css/condcom.html):

```html
<!--[if !IE 8]><!-->
<link rel="stylesheet" href="assets/application.css" />
<!--<![endif]-->
<!--[if IE 8]>
  <link rel="stylesheet" href="assets/application-ie8.css" />
<![endif]-->
```

## Assistive technologies

LBH Frontend will allow you to build services that comply with the [guidance
in the GOV.UK Service Manual][service-manual-assistive-technologies].

Currently, LBH Frontend officially supports the following assistive technologies:

| Software                 | Version        | Type               | Browser                   |
| ------------------------ | -------------- | ------------------ | ------------------------- |
| JAWS                     | 15 or later    | screen reader      | Internet Explorer 11      |
| ZoomText                 | 10.11 or later | screen magnifier   | Internet Explorer 11      |
| Dragon NaturallySpeaking | 11 or later    | speech recognition | Internet Explorer 11      |
| NVDA                     | 2016 or later  | screen reader      | Firefox (latest versions) |
| VoiceOver                | 7.0 or later   | screen reader      | Safari on iOS10 and OS X  |

In addition, we test that all content is accessible with keyboard only.

We aim to support [users who adjust or override the colours of websites they visit][how-users-change-colours-on-websites]. We test this by [changing colours in Firefox][changing-colours-in-firefox], by [enabling 'High Contrast' mode in Windows][enabling-high-contrast-mode-in-windows] and by using the [High Contrast plugin for Chrome][high-contrast-plugin-for-chrome].

[service-manual-assistive-technologies]: https://www.gov.uk/service-manual/technology/testing-with-assistive-technologies#what-to-test
[changing-colours-in-firefox]: https://support.mozilla.org/en-US/kb/change-fonts-and-colors-websites-use
[enabling-high-contrast-mode-in-windows]: https://support.microsoft.com/en-gb/help/13862/windows-use-high-contrast-mode
[high-contrast-plugin-for-chrome]: https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph?hl=en-US
[how-users-change-colours-on-websites]: https://accessibility.blog.gov.uk/2017/03/27/how-users-change-colours-on-websites/
