if (typeof window !== "undefined") {
  require("../lbh/all").initAll();

  document.body.className = document.body.className
    ? document.body.className + " js-enabled"
    : "js-enabled";
}
