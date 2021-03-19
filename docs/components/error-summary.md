---
title: Error summary
---

import PreviewArea from "../../src/PreviewArea"

<div class="govuk-error-summary optional-extra-class lbh-error-summary" aria-labelledby="error-summary-title" role="alert" tabindex="-1" data-module="govuk-error-summary">
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    Message to alert the user to a problem goes here
  </h2>
  <div class="govuk-error-summary__body">
    <p>
      Optional description of the errors and how to correct them
    </p>
    <ul class="govuk-list govuk-error-summary__list">
      <li>
        <a href="#example-error-1">Descriptive link to the question with an error</a>
      </li>
      <li>
        <a href="#example-error-1">Descriptive link to the question with an error</a>
      </li>
    </ul>
  </div>
</div>

### HTML

```html
<div
  class="govuk-error-summary optional-extra-class lbh-error-summary"
  aria-labelledby="error-summary-title"
  role="alert"
  tabindex="-1"
  data-module="govuk-error-summary"
>
  <h2 class="govuk-error-summary__title" id="error-summary-title">
    Message to alert the user to a problem goes here
  </h2>
  <div class="govuk-error-summary__body">
    <p>Optional description of the errors and how to correct them</p>
    <ul class="govuk-list govuk-error-summary__list">
      <li>
        <a href="#example-error-1"
          >Descriptive link to the question with an error</a
        >
      </li>
      <li>
        <a href="#example-error-1"
          >Descriptive link to the question with an error</a
        >
      </li>
    </ul>
  </div>
</div>
```
