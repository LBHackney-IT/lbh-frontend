function Collapsible($module) {
  this.$module = $module;
}

const handleToggle = (button, content) => {
  if (content.hasAttribute("hidden")) {
    content.removeAttribute("hidden");
    button.setAttribute("aria-expanded", true);
  } else {
    content.setAttribute("hidden", "");
    button.setAttribute("aria-expanded", false);
  }
};

Collapsible.prototype.init = function () {
  const button = this.$module.querySelector(
    '[data-behavior="lbh-collapsible-toggle"]'
  );
  const content = this.$module.querySelector(
    '[data-behavior="lbh-collapsible-content"]'
  );

  button.addEventListener("click", () => handleToggle(button, content));
};

export default Collapsible;
