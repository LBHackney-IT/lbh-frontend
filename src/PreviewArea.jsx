import React from "react"

const PreviewArea = ({ height, children }) => (
  <div className="preview-area" style={{ height: height }}>
    {children}
  </div>
)

export default PreviewArea
