---
title: Button
---

import PreviewArea from "../../src/PreviewArea"

<button class="govuk-button lbh-button" data-module="govuk-button">
  Save and continue
</button>

### HTML

```html
<button class="govuk-button lbh-button" data-module="govuk-button">
  Save and continue
</button>
```

## Button secondary

<button class="govuk-button govuk-secondary lbh-button lbh-button--secondary" data-module="govuk-button">
  Secondary button
</button>

### HTML

```html
<button
  class="govuk-button govuk-secondary lbh-button lbh-button--secondary"
  data-module="govuk-button"
>
  Secondary button
</button>
```

## Button disabled

<button disabled="disabled" aria-disabled="true" class="govuk-button lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">
  Disabled button
</button>

### HTML

```html
<button
  disabled="disabled"
  aria-disabled="true"
  class="govuk-button lbh-button lbh-button--disabled govuk-button--disabled"
  data-module="govuk-button"
>
  Disabled button
</button>
```

## Button link

<a href="/" role="button" draggable="false" class="govuk-button lbh-button" data-module="govuk-button">
  Link button
</a>

### HTML

```html
<a
  href="/"
  role="button"
  draggable="false"
  class="govuk-button lbh-button"
  data-module="govuk-button"
>
  Link button
</a>
```

## Button link disabled

<a href="/" role="button" draggable="false" class="govuk-button lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">
  Disabled link button
</a>

### HTML

```html
<a
  href="/"
  role="button"
  draggable="false"
  class="govuk-button lbh-button lbh-button--disabled govuk-button--disabled"
  data-module="govuk-button"
>
  Disabled link button
</a>
```

## Add another

This button style is helpful for "add another" UI patterns.

Tailor the text inside the button for the thing the user is adding. For instance, "add another person" or "add another address".

<button className="govuk-button lbh-button lbh-button--add">
<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 0L5 0V12H6.94V0Z"/>
<path d="M12 5H0V7H12V5Z"/>
</svg>
Add another item
</button>

### HTML

```html
<button className="govuk-button lbh-button lbh-button--add">
  <svg width="12" height="12" viewBox="0 0 12 12">
    <path d="M6.94 0L5 0V12H6.94V0Z" />
    <path d="M12 5H0V7H12V5Z" />
  </svg>
  Add another item
</button>
```
