---
title: Accordion
---

import InitAll from "../../src/InitAll"

<InitAll>

<div class="govuk-accordion myClass lbh-accordion" data-module="govuk-accordion" id="default-example" data-attribute="value">
    <div class="govuk-accordion__section ">
        <div class="govuk-accordion__section-header">
            <h5 class="govuk-accordion__section-heading">
                <span class="govuk-accordion__section-button" id="default-example-heading-1">
                    Section A
                </span>
            </h5>
        </div>
        <div id="default-example-content-1" class="govuk-accordion__section-content" aria-labelledby="default-example-heading-1">
            <ul class="lbh-list lbh-list--bullet">
                <li>Example item 1</li>
            </ul>
        </div>
    </div>
    <div class="govuk-accordion__section ">
        <div class="govuk-accordion__section-header">
            <h5 class="govuk-accordion__section-heading">
                <span class="govuk-accordion__section-button" id="default-example-heading-2">
                    Section B
                </span>
            </h5>
        </div>
        <div id="default-example-content-2" class="govuk-accordion__section-content" aria-labelledby="default-example-heading-2">
            <ul class="lbh-list lbh-list--bullet">
                <li>Example item 2</li>
            </ul>
        </div>
    </div>

</div>

## HTML

```html
<div
  class="govuk-accordion myClass lbh-accordion"
  data-module="govuk-accordion"
  id="default-example"
  data-attribute="value"
>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-1"
        >
          Section A
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-1"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-1"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 1</li>
      </ul>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h5 class="govuk-accordion__section-heading">
        <span
          class="govuk-accordion__section-button"
          id="default-example-heading-2"
        >
          Section B
        </span>
      </h5>
    </div>
    <div
      id="default-example-content-2"
      class="govuk-accordion__section-content"
      aria-labelledby="default-example-heading-2"
    >
      <ul class="lbh-list lbh-list--bullet">
        <li>Example item 2</li>
      </ul>
    </div>
  </div>
</div>
```

## JSX

```jsx
import { useEffect, useRef } from "react"
import { Accordion } from "lbh-frontend"

const MyAccordion = () => {
  const ref = useRef(null)

  useEffect(() => {
    new Accordion(ref.current).init()
  }, [])

  return (
    <div
      className="govuk-accordion lbh-accordion"
      id="default-example"
      data-attribute="value"
      ref={ref}
    >
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-1"
            >
              Section A
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-1"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-1"
        >
          <ul className="lbh-list lbh-list--bullet">
            <li>Example item 1</li>
          </ul>
        </div>
      </div>
      <div className="govuk-accordion__section ">
        <div className="govuk-accordion__section-header">
          <h5 className="govuk-accordion__section-heading">
            <span
              className="govuk-accordion__section-button"
              id="default-example-heading-2"
            >
              Section B
            </span>
          </h5>
        </div>
        <div
          id="default-example-content-2"
          className="govuk-accordion__section-content"
          aria-labelledby="default-example-heading-2"
        >
          <ul className="lbh-list lbh-list--bullet">
            <li>Example item 2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyAccordion
```

### With SSR

If you're using Next.js, you may need to write an effect like this instead:

```jsx
useEffect(() => {
  if (window !== undefined) {
    let Accordion = require("lbh-frontend").Accordion
    new Accordion(ref.current).init()
  }
}, [])
```

</InitAll>
