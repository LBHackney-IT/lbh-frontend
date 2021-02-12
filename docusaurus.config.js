module.exports = {
  title: "LBH Frontend",
  tagline: "The design system and frontend playbook for Hackney Council",
  url: "https://design-system.hackney.gov.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "src/static/img/favicon.svg",
  organizationName: "lbhackney-it", // Usually your GitHub org/user name.
  projectName: "lbh-frontend", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Frontend",
      logo: {
        alt: "My Site Logo",
        src: "src/static/img/logo-long.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Get started",
        },
        {
          to: "/lbh/components/lbh-accordion/README",
          label: "Components",
        },
        {
          to: "/docs/contributing",
          label: "Contributing",
        },
        {
          href: "https://github.com/LBHackney-IT/lbh-frontend",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Made by HackIT.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "src",
          routeBasePath: "/",
          sidebarPath: require.resolve("./src/sidebars.config.js"),
          editUrl: "https://github.com/LBHackney-IT/lbh-frontend/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/docs.css"),
        },
      },
    ],
  ],
};
