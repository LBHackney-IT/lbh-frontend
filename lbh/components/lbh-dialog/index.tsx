import React from "react"
import { Dialog as ReachDialog } from "@reach/dialog"
import "@reach/dialog/styles.css"

interface Props {
  isOpen: boolean
  onDismiss: () => void
  children: React.ReactChild | React.ReactChildren
  title: string
}

const Dialog = ({
  isOpen,
  onDismiss,
  children,
  title,
  ...props
}: Props): React.ReactElement => (
  <ReachDialog
    isOpen={isOpen}
    onDismiss={onDismiss}
    aria-label={title}
    className="lbh-dialog"
    {...props}
  >
    <h2 className="lbh-heading-h2 lbh-dialog__title">{title}</h2>
    {children}
    <button onClick={onDismiss} className="lbh-dialog__close">
      <span className="govuk-visually-hidden">Close</span>

      <svg width="18" height="18" viewBox="0 0 13 13" fill="none">
        <path
          d="M-0.0501709 1.36379L1.36404 -0.050415L12.6778 11.2633L11.2635 12.6775L-0.0501709 1.36379Z"
          fill="#0B0C0C"
        />
        <path
          d="M11.2635 -0.050293L12.6778 1.36392L1.36404 12.6776L-0.0501709 11.2634L11.2635 -0.050293Z"
          fill="#0B0C0C"
        />
      </svg>
    </button>
  </ReachDialog>
)

export default Dialog
