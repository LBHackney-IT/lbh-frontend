if (typeof window !== "undefined") {
  const L = require("leaflet");

  document.body.className = document.body.className
    ? document.body.className + " js-enabled"
    : "js-enabled";
}
