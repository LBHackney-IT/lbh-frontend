---
title: Tip
---

import { TipExample, InteractiveTipExample } from "../../src/TipExamples"

:::note
This component is intended for staff-facing use only.
:::

Use a tip component to allow users to "peek" at a list of items without having to open each one in a new browser tab.

The content in a tooltip should vary depending on what most helps users distinguish between items. Interactive tooltips are possible.

They're a good fit for staff-facing tools where users need to move between a large number of records or cases in a short amount of time.

Tips adapt to the available screen space, appearing above by default.

## Without interactivity

<TipExample/>

### React

Our tip component is only compatible with React. It is based on the [Tippy](https://github.com/atomiks/tippyjs-react) library.

You must attach a `ref` to the item that the tip should be attached to, and forward it to Tippy using `forwardRef`.

```jsx
import React, { forwardRef } from "react"
import Tip from "lbh-frontend/lbh/components/lbh-tip"

const Trigger = forwardRef((props, ref) => (
  <a ref={ref} className="govuk-link lbh-link" href="#">
    Hover to see the tip
  </a>
))

export const MyTip = () => (
  <Tip
    content={
      <>
        <h3 className="lbh-heading-h4">Jane Smith</h3>
        <p className="lbh-body-xs">Born 27 Oct 2009 (age 12)</p>
        <p className="lbh-body-xs">Referred 8 Nov 2019</p>
      </>
    }
  >
    <Trigger />
  </Tip>
)
```

## With interactivity

<InteractiveTipExample/>

```jsx
import React, { forwardRef } from "react"
import Tip from "lbh-frontend/lbh/components/lbh-tip"

const Trigger = forwardRef((props, ref) => (
  <a ref={ref} className="govuk-link lbh-link" href="#">
    Hover to see the tip
  </a>
))

export const MyInteractiveTip = () => (
  <Tip
    interactive={true}
    content={
      <>
        <h3 className="lbh-heading-h4">
          <a href="#" className="lbh-link">
            Jane Smith
          </a>
        </h3>
        <p className="lbh-body-xs">Born 27 Oct 2009 (age 12)</p>
        <p className="lbh-body-xs">Referred 8 Nov 2019</p>
      </>
    }
  >
    <Trigger />
  </Tip>
)
```
