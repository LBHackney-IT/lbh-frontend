---
title: Dialog
---

import DialogExample from "../../src/DialogExample"

:::note
This component is intended for staff-facing use only.
:::

Use a dialog to:

- have a user confirm a potentially dangerous or destructive action
- allow a user to "peek" at the details of something without losing the context of the page underneath

Dialogs should only allow a user to take a single action. If many actions are possible, use a whole page instead.

<DialogExample/>

## React

Our dialog component is only compatible with React. It's based on the [Reach UI](https://reach.tech/dialog/) dialog.

```jsx
import React, { useState } from "react"
import Dialog from "lbh-frontend/lbh/components/lbh-dialog"

const DialogExample = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="govuk-button lbh-button"
      >
        Preview dialog
      </button>

      <Dialog
        title="Are you sure?"
        isOpen={open}
        onDismiss={() => setOpen(false)}
      >
        <p className="lbh-body">The record will be permanently deleted.</p>

        <div className="lbh-dialog__actions">
          <a href="#" className="govuk-button lbh-button">
            Yes, delete
          </a>

          <button
            onClick={() => setOpen(false)}
            className="lbh-link lbh-link--no-visited-state"
          >
            No, cancel
          </button>
        </div>
      </Dialog>
    </>
  )
}

export default DialogExample
```
