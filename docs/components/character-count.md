---
title: Character count
---

import InitAll from "../../src/InitAll"

Use the Character count

## Character count

<InitAll>

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="more-detail">
    Can you provide more detail?
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="more-detail" name="more-detail" rows="5" aria-describedby="more-detail-info"></textarea>
</div>

  <span id="more-detail-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="more-detail">
      Can you provide more detail?
    </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="more-detail"
      name="more-detail"
      rows="5"
      aria-describedby="more-detail-info"
    ></textarea>
  </div>

  <span
    id="more-detail-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

## Character count with hint

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="with-hint">
    Can you provide more detail?
  </label>
  <span id="with-hint-hint" class="govuk-hint lbh-hint">
    Don&#39;t include personal or financial information, eg your National Insurance number or credit card details.
  </span>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="with-hint" name="with-hint" rows="5" aria-describedby="with-hint-info with-hint-hint"></textarea>
</div>

  <span id="with-hint-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="with-hint">
      Can you provide more detail?
    </label>
    <span id="with-hint-hint" class="govuk-hint lbh-hint">
      Don&#39;t include personal or financial information, eg your National
      Insurance number or credit card details.
    </span>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="with-hint"
      name="with-hint"
      rows="5"
      aria-describedby="with-hint-info with-hint-hint"
    ></textarea>
  </div>

  <span
    id="with-hint-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

## Character count with default value

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="100">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="with-default-value">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="with-default-value" name="default-value" rows="5" aria-describedby="with-default-value-info">221B Baker Street
London
NW1 6XE
</textarea>
</div>

  <span id="with-default-value-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 100 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="100"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="with-default-value">
      Full address
    </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="with-default-value"
      name="default-value"
      rows="5"
      aria-describedby="with-default-value-info"
    >
221B Baker Street
London
NW1 6XE
</textarea
    >
  </div>

  <span
    id="with-default-value-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 100 characters
  </span>
</div>
```

## Character count with default value exceeding limit

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <div class="govuk-form-group govuk-form-group--error lbh-form-group">
  <label class="govuk-label lbh-label" for="exceeding-characters">
    Full address
  </label>
  <span id="exceeding-characters-error" class="govuk-error-message">
  <span class="govuk-visually-hidden">Error:</span> Please do not exceed the maximum allowed limit
  </span>
  <textarea class="govuk-textarea govuk-textarea--error govuk-js-character-count govuk-textarea--error lbh-character-count" id="exceeding-characters" name="exceeding" rows="5" aria-describedby="exceeding-characters-info exceeding-characters-error">221B Baker Street
London
NW1 6XE
</textarea>
</div>

  <span id="exceeding-characters-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
>
  <div class="govuk-form-group govuk-form-group--error lbh-form-group">
    <label class="govuk-label lbh-label" for="exceeding-characters">
      Full address
    </label>
    <span id="exceeding-characters-error" class="govuk-error-message">
      <span class="govuk-visually-hidden">Error:</span> Please do not exceed the
      maximum allowed limit
    </span>
    <textarea
      class="govuk-textarea govuk-textarea--error govuk-js-character-count govuk-textarea--error lbh-character-count"
      id="exceeding-characters"
      name="exceeding"
      rows="5"
      aria-describedby="exceeding-characters-info exceeding-characters-error"
    >
221B Baker Street
London
NW1 6XE
</textarea
    >
  </div>

  <span
    id="exceeding-characters-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

## Character count with custom rows

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="custom-rows">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="custom-rows" name="custom" rows="8" aria-describedby="custom-rows-info"></textarea>
</div>

  <span id="custom-rows-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="custom-rows">
      Full address
    </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="custom-rows"
      name="custom"
      rows="8"
      aria-describedby="custom-rows-info"
    ></textarea>
  </div>

  <span
    id="custom-rows-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

## Character count with label as page headings

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="textarea-with-page-heading">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="textarea-with-page-heading" name="address" rows="5" aria-describedby="textarea-with-page-heading-info"></textarea>
</div>

  <span id="textarea-with-page-heading-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="textarea-with-page-heading">
      Full address
    </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="textarea-with-page-heading"
      name="address"
      rows="5"
      aria-describedby="textarea-with-page-heading-info"
    ></textarea>
  </div>

  <span
    id="textarea-with-page-heading-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

## Character count with word count

<div class="govuk-character-count" data-module="govuk-character-count" data-maxwords="10">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="word-count">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="word-count" name="word-count" rows="5" aria-describedby="word-count-info"></textarea>
</div>

  <span id="word-count-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 words
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxwords="10"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="word-count"> Full address </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="word-count"
      name="word-count"
      rows="5"
      aria-describedby="word-count-info"
    ></textarea>
  </div>

  <span
    id="word-count-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 words
  </span>
</div>
```

## Character count with word threshhold

<div class="govuk-character-count" data-module="govuk-character-count" data-maxlength="10" data-threshold="75">
  <div class="govuk-form-group lbh-form-group">
  <label class="govuk-label lbh-label" for="with-threshold">
    Full address
  </label>
  <textarea class="govuk-textarea govuk-js-character-count lbh-character-count" id="with-threshold" name="with-threshold" rows="5" aria-describedby="with-threshold-info"></textarea>
</div>

  <span id="with-threshold-info" class="govuk-hint govuk-character-count__message" aria-live="polite">
  You can enter up to 10 characters
</span>

</div>

### HTML

```html
<div
  class="govuk-character-count"
  data-module="govuk-character-count"
  data-maxlength="10"
  data-threshold="75"
>
  <div class="govuk-form-group lbh-form-group">
    <label class="govuk-label lbh-label" for="with-threshold">
      Full address
    </label>
    <textarea
      class="govuk-textarea govuk-js-character-count lbh-character-count"
      id="with-threshold"
      name="with-threshold"
      rows="5"
      aria-describedby="with-threshold-info"
    ></textarea>
  </div>

  <span
    id="with-threshold-info"
    class="govuk-hint govuk-character-count__message"
    aria-live="polite"
  >
    You can enter up to 10 characters
  </span>
</div>
```

</InitAll>
