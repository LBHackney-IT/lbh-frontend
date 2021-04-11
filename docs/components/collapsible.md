---
title: Collapsible
---

import InitAll from "../../src/InitAll"
import PreviewArea from "../../src/PreviewArea"
import Tabs from "@theme/Tabs"
import TabItem from "@theme/TabItem"

:::note
This component is intended for staff-facing use only.
:::

Use a collapsible component to organise a page with a large amount of content into sections.

Collapsibles work best when a whole page is organised around them. Avoid using them only once on a page. They can work well in the main body of a page, or in a sidebar.

A [summary list](/components/summary-list) is a great way to format the content inside a collapsible.

Do not use collapsibles for more detailed information that only some users may need. Use a [details](/components/details) component instead.

## Open by default

<InitAll>
<PreviewArea>
  <section data-one className="lbh-collapsible" data-module="lbh-collapsible">
      <button 
        aria-expanded="true" data-behavior="lbh-collapsible-toggle" className="lbh-collapsible__button"
      >
          <h2 className="lbh-heading-h2 lbh-collapsible__heading">Contact details</h2>
          <svg width="17" height="10" viewBox="0 0 17 10">
              <path d="M2 1.5L8.5 7.5L15 1.5" strokeWidth="3"/>
          </svg>
      </button>
      <div className="lbh-collapsible__content" data-behavior="lbh-collapsible-content">
          <dl class="govuk-summary-list lbh-summary-list">
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Name</dt>
              <dd class="govuk-summary-list__value">Firstname Lastname</dd>
              <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                  Change<span class="govuk-visually-hidden"> name</span>
              </a>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Date of birth</dt>
              <dd class="govuk-summary-list__value">13/08/1980</dd>
              <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                  Change<span class="govuk-visually-hidden"> date of birth</span>
              </a>
              </dd>
          </div>
          <div class="govuk-summary-list__row">
              <dt class="govuk-summary-list__key">Contact information</dt>
              <dd class="govuk-summary-list__value">
              <p class="govuk-body">email@email.com</p>
              <p class="govuk-body">
                  Address line 1<br />
                  Address line 2<br />
                  Address line 3
              </p>
              </dd>
              <dd class="govuk-summary-list__actions">
              <a class="govuk-link" href="#">
                  Change<span class="govuk-visually-hidden"> contact information</span>
              </a>
              </dd>
          </div>
          </dl>
      </div>
  </section>
  </PreviewArea>
</InitAll>

<Tabs
defaultValue="html"
values={[
{label: 'HTML', value: 'html'},
{label: 'React', value: 'react'}
]}>
<TabItem value="html">

```html
<section class="lbh-collapsible" data-module="lbh-collapsible">
  <button
    aria-expanded="true"
    data-behavior="lbh-collapsible-toggle"
    class="lbh-collapsible__button"
  >
    <h2 class="lbh-heading-h2 lbh-collapsible__heading">Contact details</h2>
    <svg width="17" height="10" viewBox="0 0 17 10">
      <path d="M2 1.5L8.5 7.5L15 1.5" stroke-width="3" />
    </svg>
  </button>
  <div class="lbh-collapsible__content" data-behavior="lbh-collapsible-content">
    Content here
  </div>
</section>
```

</TabItem>
<TabItem value="react">

You may prefer to control the behaviour of the component with a `useState` hook, rather than relying on the built-in imperative JS.

If you do this, you can remove the `data-module` and `data-behaviour` attributes.

```jsx
const React, { useState } from "react";

const MyCollapsible = ({ children }) => {

    const [open, setOpen] = useState(true);

    return (
        <section className="lbh-collapsible">
            <button
                aria-expanded={open}
                className="lbh-collapsible__button"
                onClick={() => setOpen(!open)}
            >
                <h2 className="lbh-heading-h2 lbh-collapsible__heading">
                    Contact details
                </h2>
                <svg width="17" height="10" viewBox="0 0 17 10">
                    <path d="M2 1.5L8.5 7.5L15 1.5" strokeWidth="3"/>
                </svg>
            </button>
            <div className="lbh-collapsible__content" hidden={!open}>
                {children}
            </div>
        </section>
    );
}

export default MyCollapsible;
```

</TabItem>

</Tabs>

## Closed by default

```html
<section class="lbh-collapsible" data-module="lbh-collapsible">
  <button
    aria-expanded="false"
    data-behavior="lbh-collapsible-toggle"
    class="lbh-collapsible__button"
  >
    <h2 class="lbh-heading-h2 lbh-collapsible__heading">Contact details</h2>
    <svg width="17" height="10" viewBox="0 0 17 10">
      <path d="M2 1.5L8.5 7.5L15 1.5" stroke-width="3" />
    </svg>
  </button>
  <div
    class="lbh-collapsible__content"
    data-behavior="lbh-collapsible-content"
    hidden
  >
    Content here
  </div>
</section>
```
