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
      "developing/react",
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
        items: [
          "components/accordion",
          "components/input",
          "components/announcement",
          "components/back-link",
          "components/back-to-top",
          "components/breadcrumbs",
          "components/button",
          "components/contacts-block",
          "components/character-count",
          "components/tag",
          "components/tabs",
          "components/textarea",
          "components/warning-text",
        ],
      },
      {
        type: "category",
        label: "For staff",
        items: ["components/input"],
      },
    ],
    Patterns: [
      {
        type: "category",
        label: "Help staff to...",
        items: ["patterns/manage-a-caseload", "patterns/find-a-client"],
      },
    ],
    Tutorials: ["tutorials/react", "tutorials/prototype"],
    Contributing: ["contributing/how-to-contribute"],
  },
};
