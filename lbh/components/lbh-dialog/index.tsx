import React from "react"
import * as RadixDialog from "@radix-ui/react-dialog"

export interface DialogProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadixDialog.Content>,
    "title"
  > {
  isOpen: boolean
  onDismiss: () => void
  title: string
  children: React.ReactNode
  onConfirm?: () => void
  confirmText?: string
  confirmButtonTestId?: string
  onCancel?: () => void
  cancelText?: string
}

const Dialog = ({
  isOpen,
  onDismiss,
  children,
  title,
  onConfirm,
  confirmText = "Yes",
  confirmButtonTestId,
  onCancel,
  cancelText = "No, cancel",
  ...props
}: DialogProps): React.ReactElement => {
  const showActions = Boolean(onConfirm || onCancel)

  return (
    <RadixDialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) onDismiss()
      }}
    >
      <RadixDialog.Portal>
        <RadixDialog.Overlay className="lbh-dialog__overlay" />
        <RadixDialog.Content
          className="lbh-dialog lbh-dialog--radix"
          aria-describedby={undefined}
          {...props}
        >
          <RadixDialog.Title asChild>
            <h2 className="lbh-heading-h2 lbh-dialog__title">{title}</h2>
          </RadixDialog.Title>
          {children}
          <RadixDialog.Close asChild>
            <button type="button" className="lbh-dialog__close">
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
          </RadixDialog.Close>
          {showActions && (
            <div className="lbh-dialog__actions">
              {onConfirm && (
                <button
                  type="button"
                  className="govuk-button lbh-button"
                  onClick={onConfirm}
                  data-testid={confirmButtonTestId}
                >
                  {confirmText}
                </button>
              )}
              {onCancel && (
                <button
                  type="button"
                  className="lbh-link lbh-link--no-visited-state"
                  onClick={onCancel}
                >
                  {cancelText}
                </button>
              )}
            </div>
          )}
        </RadixDialog.Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Dialog
