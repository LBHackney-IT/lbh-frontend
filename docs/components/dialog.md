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

Our dialog component is only compatible with React. It uses [Radix UI Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) for accessible modal behaviour.

Import from the main package entry:

```jsx
import React, { useState } from "react"
import { Dialog } from "lbh-frontend"
```

### Informational (dismiss only)

```jsx
const [open, setOpen] = useState(false)

<Dialog title="More information" isOpen={open} onDismiss={() => setOpen(false)}>
  <p className="lbh-body">Use the close button to dismiss this dialog.</p>
</Dialog>
```

### Confirm and cancel

Optional actions render in `.lbh-dialog__actions` using existing design system button and link styles.

```jsx
<Dialog
  title="Are you sure?"
  isOpen={open}
  onDismiss={() => setOpen(false)}
  onConfirm={() => setOpen(false)}
  confirmText="Yes, delete"
  onCancel={() => setOpen(false)}
>
  <p className="lbh-body">The record will be permanently deleted.</p>
</Dialog>
```

### Cancel link only

```jsx
<Dialog
  title="Contact details"
  isOpen={open}
  onDismiss={() => setOpen(false)}
  onCancel={() => setOpen(false)}
  cancelText="Close"
>
  <p className="lbh-body">123 Example Street, London</p>
</Dialog>
```

### Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `isOpen` | `boolean` | Yes | — | Controls whether the dialog is visible |
| `onDismiss` | `() => void` | Yes | — | Called when the user closes via the X button or overlay |
| `title` | `string` | Yes | — | Dialog heading |
| `children` | `ReactNode` | Yes | — | Main dialog content |
| `onConfirm` | `() => void` | No | — | Primary action handler |
| `confirmText` | `string` | No | `"Yes"` | Primary action label |
| `confirmButtonTestId` | `string` | No | — | `data-testid` for the confirm button |
| `onCancel` | `() => void` | No | — | Secondary action handler |
| `cancelText` | `string` | No | `"No, cancel"` | Secondary action label |

If both `onConfirm` and `onCancel` are omitted, no action footer is rendered.
