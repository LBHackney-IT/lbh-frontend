---
title: Accordion
---

import InitAll from "../../src/InitAll"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

<InitAll>

  <div class="govuk-accordion myClass lbh-accordion" data-module="govuk-accordion" id="default-example" data-attribute="value">
      <div class="govuk-accordion__section">
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
      <div class="govuk-accordion__section">
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

<Tabs
defaultValue="html"
values={[
{label: 'HTML', value: 'html'},
{label: 'Create React App', value: 'cra'},
{label: 'Next.js', value: 'next'}
]}>
<TabItem value="html">

```html
<div
  class="govuk-accordion myClass lbh-accordion"
  data-module="govuk-accordion"
  id="default-example"
  data-attribute="value"
>
  <div class="govuk-accordion__section">
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
  <div class="govuk-accordion__section">
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

</TabItem>
<TabItem value="cra">

```jsx
import { useEffect, useRef } from "react";
import { Accordion } from "lbh-frontend";

const MyAccordion = () => {
  const ref = useRef(null);

  useEffect(() => {
    new Accordion(ref.current).init();
  }, []);

  return (
    <div
      className="govuk-accordion lbh-accordion"
      id="default-example"
      data-attribute="value"
      ref={ref}
    >
      <div className="govuk-accordion__section">
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
      <div className="govuk-accordion__section">
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
  );
};

export default MyAccordion;
```

</TabItem>
<TabItem value="next">

```jsx
import { useEffect, useRef } from "react";

const MyAccordion = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (window !== undefined) {
      const Accordion = require("lbh-frontend").Accordion;
      new Accordion(ref.current).init();
    }
  }, []);

  return (
    <div
      className="govuk-accordion lbh-accordion"
      id="default-example"
      data-attribute="value"
      ref={ref}
    >
      <div className="govuk-accordion__section">
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
      <div className="govuk-accordion__section">
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
  );
};

export default MyAccordion;
```

</TabItem>

</Tabs>

</InitAll>
