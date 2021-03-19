---
title: Select
---

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select lbh-select" id="select-1" name="select-1">
      <option value="1">GOV.UK frontend option 1</option>
      <option value="2" selected>GOV.UK frontend option 2</option>
      <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select lbh-select" id="select-1" name="select-1">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

## Select with hint text and error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label lbh-label" for="select-2">
    Label text goes here
  </label>
  <span id="select-2-hint" class="govuk-hint lbh-hint">
    Hint text goes here
  </span>
  <span id="select-2-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <select class="govuk-select lbh-select govuk-select--error" id="select-2" name="select-2" aria-describedby="select-2-hint select-2-error">
      <option value="1">GOV.UK frontend option 1</option>
      <option value="2">GOV.UK frontend option 2</option>
      <option value="3">GOV.UK frontend option 3</option>
  </select>
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label lbh-label" for="select-2">
    Label text goes here
  </label>
  <span id="select-2-hint" class="govuk-hint lbh-hint">
    Hint text goes here
  </span>
  <span id="select-2-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <select
    class="govuk-select lbh-select govuk-select--error"
    id="select-2"
    name="select-2"
    aria-describedby="select-2-hint select-2-error"
  >
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2">GOV.UK frontend option 2</option>
    <option value="3">GOV.UK frontend option 3</option>
  </select>
</div>
```

## Select with label as page heading

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-3">
    Label text goes here
  </label>
  <select class="govuk-select lbh-select" id="select-3" name="select-3">
      <option value="1">GOV.UK frontend option 1</option>
      <option value="2" selected>GOV.UK frontend option 2</option>
      <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-3">
    Label text goes here
  </label>
  <select class="govuk-select lbh-select" id="select-3" name="select-3">
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

## Select with full width override

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select govuk-!-width-full lbh-select" id="select-1" name="select-1">
      <option value="1">GOV.UK frontend option 1</option>
      <option value="2" selected>GOV.UK frontend option 2</option>
      <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select
    class="govuk-select govuk-!-width-full lbh-select"
    id="select-1"
    name="select-1"
  >
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```

## Select with optional form-group classes

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select class="govuk-select govuk-!-width-full lbh-select" id="select-1" name="select-1">
      <option value="1">GOV.UK frontend option 1</option>
      <option value="2" selected>GOV.UK frontend option 2</option>
      <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="select-1">
    Label text goes here
  </label>
  <select
    class="govuk-select govuk-!-width-full lbh-select"
    id="select-1"
    name="select-1"
  >
    <option value="1">GOV.UK frontend option 1</option>
    <option value="2" selected>GOV.UK frontend option 2</option>
    <option value="3" disabled>GOV.UK frontend option 3</option>
  </select>
</div>
```
