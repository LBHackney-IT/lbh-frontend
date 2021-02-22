---
title: Button
---

## Button

<button class="govuk-button  lbh-button" data-module="govuk-button">
  Save and continue
</button>

### HTML

```html
<button class="govuk-button  lbh-button" data-module="govuk-button">
  Save and continue
</button>
```

### Nunjucks

```
{% from "lbh-button/macro.njk" import lbhButton %}

{{ lbhButton({
  "text": "Save and continue"
}) }}
```

## Button disabled

<button disabled="disabled" aria-disabled="true" class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">
  Disabled button
</button>

### HTML

```html
<button
  disabled="disabled"
  aria-disabled="true"
  class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled"
  data-module="govuk-button"
>
  Disabled button
</button>
```

### Nunjucks

```
{% from "lbh-button/macro.njk" import lbhButton %}

{{ lbhButton({
  "text": "Disabled button",
  "disabled": true
}) }}
```

## Button link

<a href="/" role="button" draggable="false" class="govuk-button  lbh-button" data-module="govuk-button">
  Link button
</a>

### HTML

```html
<a
  href="/"
  role="button"
  draggable="false"
  class="govuk-button  lbh-button"
  data-module="govuk-button"
>
  Link button
</a>
```

### Nunjucks

```

{% from "lbh-button/macro.njk" import lbhButton %}

{{ lbhButton({
  "text": "Link button",
  "href": "/"
}) }}
```

## Button link disabled

<a href="/" role="button" draggable="false" class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">
  Disabled link button
</a>

### HTML

```
<a href="/" role="button" draggable="false" class="govuk-button  lbh-button lbh-button--disabled govuk-button--disabled" data-module="govuk-button">
  Disabled link button
</a>
```

### Nunjucks

```
{% from "lbh-button/macro.njk" import lbhButton %}

{{ lbhButton({
  "text": "Disabled link button",
  "href": "/",
  "disabled": true
}) }}
```
