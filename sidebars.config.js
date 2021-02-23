module.exports = {
  someSidebar: {
    Intoduction: ["introduction/what-is", "introduction/how-it-works"],
    Designing: ["designing/design-kits"],
    Developing: [
      "developing/installing-from-npm",
      "developing/updating-with-npm",
      "developing/installing-from-dist",
      "developing/browser-support",
      "developing/supporting-ie8",
      "developing/generating-components",
      {
        type: "link",
        label: "Sass reference",
        href: "pathname:///sassdoc/index.html",
      },
    ],
    Components: [
      {
        type: "category",
        label: "For residents",
        items: ["components/input", "components/announcement", "components/warning-text", "components/textarea", "components/tag"],
      },
      {
        type: "category",
        label: "For staff",
        items: ["components/input", "components/announcement", "components/warning-text", "components/textarea", "components/tag"],
      },
    ],
    Patterns: [
      {
        type: "category",
        label: "Help staff to...",
        items: ["patterns/manage-a-caseload", "patterns/find-a-client"],
      },
    ],
    Tutorials: ["tutorials/react", "tutorials/nunjucks", "tutorials/prototype"],
    Contributing: ["contributing/how-to-contribute"],
  },
};
