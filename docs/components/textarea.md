---
title: Textarea
---

Use the textarea component when you need to let users enter an amount of text that’s longer than a single line.

## Textarea

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="more-detail">
    Can you provide more detail?
  </label>
  <span id="more-detail-hint" class="govuk-hint  lbh-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </span>
  <textarea class="govuk-textarea  lbh-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="more-detail">
    Can you provide more detail?
  </label>
  <span id="more-detail-hint" class="govuk-hint  lbh-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </span>
  <textarea class="govuk-textarea  lbh-textarea" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-hint"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "name": "more-detail",
  "id": "more-detail",
  "label": {
    "text": "Can you provide more detail?"
  },
  "hint": {
    "text": "Don't include personal or financial information, eg your National Insurance number or credit card details."
  }
}) }}
```

## Textarea with error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label  lbh-label" for="no-ni-reason">
    Why can&#39;t you provide a National Insurance number?
  </label>
  <span id="no-ni-reason-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> You must provide an explanation
  </span>
  <textarea class="govuk-textarea govuk-textarea--error  lbh-textarea" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label  lbh-label" for="no-ni-reason">
    Why can&#39;t you provide a National Insurance number?
  </label>
  <span id="no-ni-reason-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> You must provide an explanation
  </span>
  <textarea class="govuk-textarea govuk-textarea--error  lbh-textarea" id="no-ni-reason" name="no-ni-reason" rows="5" aria-describedby="no-ni-reason-error"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "name": "no-ni-reason",
  "id": "no-ni-reason",
  "label": {
    "text": "Why can't you provide a National Insurance number?"
  },
  "errorMessage": {
    "text": "You must provide an explanation"
  }
}) }}
```
## Textarea with default value

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="full-address" name="address" rows="5">
    221B Baker Street
    London
    NW1 6XE
  </textarea>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="full-address" name="address" rows="5">
    221B Baker Street
    London
    NW1 6XE
  </textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "id": "full-address",
  "name": "address",
  "value": "221B Baker Street\nLondon\nNW1 6XE\n",
  "label": {
    "text": "Full address"
  }
}) }}
```
## Textarea with custom rows

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="full-address" name="address" rows="8"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="full-address">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="full-address" name="address" rows="8"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "id": "full-address",
  "name": "address",
  "label": {
    "text": "Full address"
  },
  "rows": 8
}) }}
```
## Textarea with label as page heading

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-page-heading">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-page-heading">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "id": "textarea-with-page-heading",
  "name": "address",
  "label": {
    "text": "Full address",
    "isPageHeading": true
  }
}) }}
```
## Textarea with optional form-group classes

<div class="govuk-form-group extra-class lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-page-heading">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group extra-class lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-page-heading">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-page-heading" name="address" rows="5"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "id": "textarea-with-page-heading",
  "name": "address",
  "label": {
    "text": "Full address"
  },
  "formGroup": {
    "classes": "extra-class"
  }
}) }}
```
## Textarea with autocomplete attribute

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-autocomplete-attribute">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-autocomplete-attribute" name="address" rows="5" autocomplete="street-address"></textarea>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label  lbh-label" for="textarea-with-autocomplete-attribute">
    Full address
  </label>
  <textarea class="govuk-textarea  lbh-textarea" id="textarea-with-autocomplete-attribute" name="address" rows="5" autocomplete="street-address"></textarea>
</div>
```

### Nunjucks

```
{% from "lbh-textarea/macro.njk" import lbhTextarea %}

{{ lbhTextarea({
  "id": "textarea-with-autocomplete-attribute",
  "name": "address",
  "label": {
    "text": "Full address"
  },
  "autocomplete": "street-address"
}) }}
```
