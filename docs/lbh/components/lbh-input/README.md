---
title: Input
---

Use an accordion to make a large amount of content easily digestible.

Consider using an accordion where a user might only be interested in one or two sections of the content.

If the content should be explored in a particular order, consider using pages instead.

## Input

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-example">
    National Insurance number
  </label>
  <input class="govuk-input  lbh-input" id="input-example" name="test-name" type="text"/>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-example">
    National Insurance number
  </label>
  <input
    class="govuk-input  lbh-input"
    id="input-example"
    name="test-name"
    type="text"
  />
</div>
```

### Nunjucks

```
{% from "lbh-input/macro.njk" import lbhInput %}

{{ lbhInput({
  "label": {
    "text": "National Insurance number"
  },
  "id": "input-example",
  "name": "test-name"
}) }}
```

## With hint text

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-with-hint-text">
    National insurance number
  </label>
  <span id="input-with-hint-text-hint" class="govuk-hint  lbh-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’.
  </span>
  <input class="govuk-input  lbh-input" id="input-with-hint-text" name="test-name-2" type="text" aria-describedby="input-with-hint-text-hint"/>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-with-hint-text">
    National insurance number
  </label>
  <span id="input-with-hint-text-hint" class="govuk-hint  lbh-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For
    example, ‘QQ 12 34 56 C’.
  </span>
  <input
    class="govuk-input  lbh-input"
    id="input-with-hint-text"
    name="test-name-2"
    type="text"
    aria-describedby="input-with-hint-text-hint"
  />
</div>
```

### Nunjucks

```
{% from "lbh-input/macro.njk" import lbhInput %}

{{ lbhInput({
  "label": {
    "text": "National insurance number"
  },
  "hint": {
    "text": "It’s on your National Insurance card, benefit letter, payslip or P60. For example, ‘QQ 12 34 56 C’."
  },
  "id": "input-with-hint-text",
  "name": "test-name-2"
}) }}
```
