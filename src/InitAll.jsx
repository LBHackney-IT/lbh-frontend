import React, { useEffect } from "react";

// Wrap components that need imperative JS in this
// SEE: https://lbhackney-it.github.io/LBH-frontend/developing/react#client-side-routing

const Wrapper = ({ children }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require("../lbh/all").initAll();
    }
  }, []);

  return children;
};

export default Wrapper;
