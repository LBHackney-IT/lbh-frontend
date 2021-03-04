---
title: Text input
---


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

## With hint text

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

## With error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-with-error-message">
    National Insurance number
  </label>
  <span id="input-with-error-message-hint" class="govuk-hint  lbh-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For
    example, ‘QQ 12 34 56 C’.
  </span>
  <span id="input-with-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <input
    class="govuk-input  lbh-input govuk-input--error"
    id="input-with-error-message"
    name="test-name-3"
    type="text"
    aria-describedby="input-with-error-message-hint input-with-error-message-error"
  />
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label  lbh-label" for="input-with-error-message">
    National Insurance number
  </label>
  <span id="input-with-error-message-hint" class="govuk-hint  lbh-hint">
    It’s on your National Insurance card, benefit letter, payslip or P60. For
    example, ‘QQ 12 34 56 C’.
  </span>
  <span id="input-with-error-message-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <input
    class="govuk-input  lbh-input govuk-input--error"
    id="input-with-error-message"
    name="test-name-3"
    type="text"
    aria-describedby="input-with-error-message-hint input-with-error-message-error"
  />
</div>
```
