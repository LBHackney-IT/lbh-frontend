---
title: Cookie banner
---

import PreviewArea from "../../src/PreviewArea"

<section class="lbh-cookie-banner" data-module="lbh-cookie-banner">
  <div class="lbh-container">
    <div class="govuk-grid-row">
      <div class="lbh-cookie-banner__content govuk-grid-column-two-thirds-from-desktop">
        <p>We use cookies to ensure you have the best experience. For full details see our <a href="#">Cookie policy</a></p>
      </div>
      <div class="lbh-cookie-banner__button-wrapper govuk-grid-column-one-third-from-desktop">
          <button type="button" class="govuk-button lbh-cookie-banner__button lbh-button govuk-button--secondary lbh-button--secondary" data-module="govuk-button" data-behavior="lbh-cookie-close">
            Accept and close
        </button>
      </div>
    </div>
  </div>
</section>

### HTML

```html
<section class="lbh-cookie-banner" data-module="lbh-cookie-banner">
  <div class="lbh-container">
    <div class="govuk-grid-row">
      <div
        class="lbh-cookie-banner__content govuk-grid-column-two-thirds-from-desktop"
      >
        <p>
          We use cookies to ensure you have the best experience. For full
          details see our <a href="#">Cookie policy</a>.
        </p>
      </div>
      <div
        class="lbh-cookie-banner__button-wrapper govuk-grid-column-one-third-from-desktop"
      >
        <button
          type="button"
          class="govuk-button lbh-cookie-banner__button lbh-button govuk-button--secondary lbh-button--secondary"
          data-module="govuk-button"
          data-behavior="lbh-cookie-close"
        >
          Accept and close
        </button>
      </div>
    </div>
  </div>
</section>
```
