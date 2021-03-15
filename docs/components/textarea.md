---
title: Textarea
---

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
    Don&#39;t include personal or financial information, eg your National
    Insurance number or credit card details.
  </span>
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="more-detail"
    name="more-detail"
    rows="5"
    aria-describedby="more-detail-hint"
  ></textarea>
</div>
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
    <span class="govuk-visually-hidden">Error:</span> You must provide an
    explanation
  </span>
  <textarea
    class="govuk-textarea govuk-textarea--error  lbh-textarea"
    id="no-ni-reason"
    name="no-ni-reason"
    rows="5"
    aria-describedby="no-ni-reason-error"
  ></textarea>
</div>
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
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="full-address"
    name="address"
    rows="5"
  >
    221B Baker Street
    London
    NW1 6XE
  </textarea>
</div>
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
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="full-address"
    name="address"
    rows="8"
  ></textarea>
</div>
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
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="textarea-with-page-heading"
    name="address"
    rows="5"
  ></textarea>
</div>
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
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="textarea-with-page-heading"
    name="address"
    rows="5"
  ></textarea>
</div>
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
  <label
    class="govuk-label  lbh-label"
    for="textarea-with-autocomplete-attribute"
  >
    Full address
  </label>
  <textarea
    class="govuk-textarea  lbh-textarea"
    id="textarea-with-autocomplete-attribute"
    name="address"
    rows="5"
    autocomplete="street-address"
  ></textarea>
</div>
```
