import React, { useEffect } from "react";

// Wrap components that need imperative JS in this
// SEE: https://lbhackney-it.github.io/LBH-frontend/developing/react#client-side-routing

const PreviewArea = ({ height, children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../lbh/all").initAll();
    }
  }, []);

  return (
    <div className="preview-area" style={{ height: height }}>
      {children}
    </div>
  );
};

export default PreviewArea;
