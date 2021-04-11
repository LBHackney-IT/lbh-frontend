import React from "react"
import Tippy from "@tippyjs/react"

interface Props {
  delay?: number
  interactive?: boolean
  content: React.ReactChild
  children: React.ReactChild
}

const Tip = ({
  delay = 300,
  interactive = false,
  children,
  content,
  ...props
}: Props): React.ReactElement => {
  return (
    <p className="lbh-body">
      <Tippy
        delay={delay}
        content={content}
        interactive={interactive}
        {...props}
      >
        {children}
      </Tippy>
    </p>
  )
}

export default Tip
