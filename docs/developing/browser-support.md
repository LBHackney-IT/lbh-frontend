---
title: Browser support
---

LBH Frontend will allow you to build services that comply with the [guidance
in the GOV.UK Service Manual][service-manual-browsers].

## Browsers

Currently, LBH Frontend officially supports the following browsers:

| Operating system | Browser                              | Support    |
| ---------------- | ------------------------------------ | ---------- |
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

Internet Explorer 8–10 are no longer supported. Use the [npm package](/developing/installing-from-npm) and compile styles in your application build.

[service-manual-browsers]: https://www.gov.uk/service-manual/technology/designing-for-different-browsers-and-devices#browsers-to-test-in

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
