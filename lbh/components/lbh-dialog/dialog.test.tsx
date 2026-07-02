import React from "react"
import { fireEvent, render, screen, within } from "@testing-library/react"
import Dialog from "./index"

describe("Dialog", () => {
  it("renders title, children, and close button", () => {
    render(
      <Dialog isOpen title="Delete record" onDismiss={() => {}}>
        <p>Are you sure?</p>
      </Dialog>
    )

    expect(screen.getByRole("heading", { name: "Delete record" })).toBeTruthy()
    expect(screen.getByText("Are you sure?")).toBeTruthy()
    expect(screen.getByRole("button", { name: "Close" })).toBeTruthy()
  })

  it("does not render actions when no action props are provided", () => {
    render(
      <Dialog isOpen title="Information" onDismiss={() => {}}>
        <p>Details only</p>
      </Dialog>
    )

    expect(document.body.querySelector(".lbh-dialog__actions")).toBeNull()
  })

  it("renders confirm and cancel actions when provided", () => {
    render(
      <Dialog
        isOpen
        title="Delete record"
        onDismiss={() => {}}
        onConfirm={() => {}}
        confirmText="Yes, delete"
        onCancel={() => {}}
        cancelText="No, cancel"
      >
        <p>Content</p>
      </Dialog>
    )

    expect(screen.getByRole("button", { name: "Yes, delete" })).toBeTruthy()
    expect(screen.getByRole("button", { name: "No, cancel" })).toBeTruthy()
  })

  it("renders only confirm when onCancel is omitted", () => {
    render(
      <Dialog
        isOpen
        title="Sign out"
        onDismiss={() => {}}
        onConfirm={() => {}}
        confirmText="Stay logged in"
      >
        <p>You will be signed out.</p>
      </Dialog>
    )

    expect(
      screen.getByRole("button", { name: "Stay logged in" })
    ).toBeTruthy()
    expect(screen.queryByRole("button", { name: "No, cancel" })).toBeNull()
  })

  it("renders only cancel when onConfirm is omitted", () => {
    render(
      <Dialog
        isOpen
        title="Address"
        onDismiss={() => {}}
        onCancel={() => {}}
        cancelText="Close"
      >
        <p>Address details</p>
      </Dialog>
    )

    const actions = document.body.querySelector(".lbh-dialog__actions")
    expect(actions).toBeTruthy()
    expect(within(actions as HTMLElement).getByRole("button", { name: "Close" })).toBeTruthy()
    expect(screen.queryByRole("button", { name: "Yes" })).toBeNull()
  })

  it("calls onDismiss when the close button is clicked", () => {
    const onDismiss = jest.fn()

    render(
      <Dialog isOpen title="Close me" onDismiss={onDismiss}>
        <p>Content</p>
      </Dialog>
    )

    fireEvent.click(screen.getByRole("button", { name: "Close" }))
    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it("calls onConfirm and onCancel when action buttons are clicked", () => {
    const onConfirm = jest.fn()
    const onCancel = jest.fn()

    render(
      <Dialog
        isOpen
        title="Confirm"
        onDismiss={() => {}}
        onConfirm={onConfirm}
        onCancel={onCancel}
        confirmButtonTestId="confirm-action"
      >
        <p>Content</p>
      </Dialog>
    )

    fireEvent.click(screen.getByTestId("confirm-action"))
    fireEvent.click(screen.getByRole("button", { name: "No, cancel" }))

    expect(onConfirm).toHaveBeenCalledTimes(1)
    expect(onCancel).toHaveBeenCalledTimes(1)
  })
})
