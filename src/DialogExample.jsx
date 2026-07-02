import React, { useState } from "react"
import { Dialog } from "../lbh/all.js"

const DialogExample = () => {
  const [informationalOpen, setInformationalOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [cancelOnlyOpen, setCancelOnlyOpen] = useState(false)

  return (
    <>
      <div className="govuk-button-group">
        <button
          type="button"
          onClick={() => setInformationalOpen(true)}
          className="govuk-button lbh-button"
        >
          Informational dialog
        </button>

        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="govuk-button lbh-button"
        >
          Confirm and cancel
        </button>

        <button
          type="button"
          onClick={() => setCancelOnlyOpen(true)}
          className="govuk-button lbh-button"
        >
          Cancel link only
        </button>
      </div>

      <Dialog
        title="More information"
        isOpen={informationalOpen}
        onDismiss={() => setInformationalOpen(false)}
      >
        <p className="lbh-body">Use the close button to dismiss this dialog.</p>
      </Dialog>

      <Dialog
        title="Are you sure?"
        isOpen={confirmOpen}
        onDismiss={() => setConfirmOpen(false)}
        onConfirm={() => setConfirmOpen(false)}
        confirmText="Yes, delete"
        onCancel={() => setConfirmOpen(false)}
      >
        <p className="lbh-body">The record will be permanently deleted.</p>
      </Dialog>

      <Dialog
        title="Contact details"
        isOpen={cancelOnlyOpen}
        onDismiss={() => setCancelOnlyOpen(false)}
        onCancel={() => setCancelOnlyOpen(false)}
        cancelText="Close"
      >
        <p className="lbh-body">123 Example Street, London</p>
      </Dialog>
    </>
  )
}

export default DialogExample
