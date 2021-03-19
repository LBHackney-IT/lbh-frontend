---
title: File upload
---

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload lbh-file-upload" id="file-upload-1" name="file-upload-1" type="file" />
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-1">
    Upload a file
  </label>
  <input
    class="govuk-file-upload lbh-file-upload"
    id="file-upload-1"
    name="file-upload-1"
    type="file"
  />
</div>
```

## File upload with hint text

### HTML

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-2">
    Upload your photo
  </label>
  <span id="file-upload-2-hint" class="govuk-hint lbh-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </span>
  <input class="govuk-file-upload lbh-file-upload" id="file-upload-2" name="file-upload-2" type="file" aria-describedby="file-upload-2-hint" />
</div>

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-2">
    Upload your photo
  </label>
  <span id="file-upload-2-hint" class="govuk-hint lbh-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or
    in an app like iPhoto.
  </span>
  <input
    class="govuk-file-upload lbh-file-upload"
    id="file-upload-2"
    name="file-upload-2"
    type="file"
    aria-describedby="file-upload-2-hint"
  />
</div>
```

## File upload with error message

<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-3">
    Upload a file
  </label>
  <span id="file-upload-3-hint" class="govuk-hint lbh-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.
  </span>
  <span id="file-upload-3-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <input class="govuk-file-upload lbh-file-upload govuk-file-upload--error" id="file-upload-3" name="file-upload-3" type="file" aria-describedby="file-upload-3-hint file-upload-3-error" />
</div>

### HTML

```html
<div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-3">
    Upload a file
  </label>
  <span id="file-upload-3-hint" class="govuk-hint lbh-hint">
    Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or
    in an app like iPhoto.
  </span>
  <span id="file-upload-3-error" class="govuk-error-message">
    <span class="govuk-visually-hidden">Error:</span> Error message goes here
  </span>
  <input
    class="govuk-file-upload lbh-file-upload govuk-file-upload--error"
    id="file-upload-3"
    name="file-upload-3"
    type="file"
    aria-describedby="file-upload-3-hint file-upload-3-error"
  />
</div>
```

## File upload with value and attributes

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-4">
    Upload a photo
  </label>
  <input class="govuk-file-upload lbh-file-upload" id="file-upload-4" name="file-upload-4" type="file" defaultValue="" accept=".jpg, .jpeg, .png" />
</div>

### HTML

```html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-4">
    Upload a photo
  </label>
  <input
    class="govuk-file-upload lbh-file-upload"
    id="file-upload-4"
    name="file-upload-4"
    type="file"
    defaultValue=""
    accept=".jpg, .jpeg, .png"
  />
</div>
```

## File upload with optional form-group classes

<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-1">
    Upload a file
  </label>
  <input class="govuk-file-upload lbh-file-upload" id="file-upload-1" name="file-upload-1" type="file" />
</div>

### HTML

````html
<div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" htmlFor="file-upload-1">
    Upload a file
  </label>
  <input
    class="govuk-file-upload lbh-file-upload"
    id="file-upload-1"
    name="file-upload-1"
    type="file"
  />
</div>
```
````
