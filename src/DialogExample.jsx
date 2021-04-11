import React, { useState } from "react"
import Dialog from "../lbh/components/lbh-dialog"

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
