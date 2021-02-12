module.exports = {
  title: "LBH Frontend",
  tagline: "The design system and frontend playbook for Hackney Council",
  url: "https://design-system.hackney.gov.uk",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "lbhackney-it", // Usually your GitHub org/user name.
  projectName: "lbh-frontend", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Frontend",
      logo: {
        alt: "My Site Logo",
        src: "img/logo-long.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Get started",
          position: "left",
        },
        {
          to: "/",
          activeBasePath: "docs",
          label: "Components",
          position: "left",
        },
        {
          to: "/",
          activeBasePath: "docs",
          label: "Contributing",
          position: "left",
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
          path: "/src/lbh",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/LBHackney-IT/lbh-frontend/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/docs.css"),
        },
      },
    ],
  ],
};
