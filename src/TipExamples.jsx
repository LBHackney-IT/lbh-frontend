import React, { forwardRef } from "react"
import Tip from "../lbh/components/lbh-tip"

const Trigger = forwardRef((props, ref) => (
  <a
    ref={ref}
    className="govuk-link lbh-link lbh-link--no-visited-state"
    href="#"
  >
    Hover to see the tip
  </a>
))

export const TipExample = () => (
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

export const InteractiveTipExample = () => (
  <Tip
    interactive={true}
    content={
      <>
        <h3 className="lbh-heading-h4">
          <a href="#" className="lbh-link lbh-link--no-visited-state">
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
