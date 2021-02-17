module.exports = {
  title: "Hackney Design System",
  tagline:
    "The Hackney Design System contains everything you need to start building user interfaces for Hackney platforms and services.",
  url: "https://design-system.hackney.gov.uk",
  baseUrl: "/LBH-frontend/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "lbhackney-it", // Usually your GitHub org/user name.
  projectName: "lbh-frontend", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Design System",
      logo: {
        alt: "My Site Logo",
        src: "img/logo-long.svg",
      },
      items: [
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
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.config.js"),
          editUrl: "https://github.com/LBHackney-IT/lbh-frontend/edit/master/",
        },
        theme: {
          customCss: [require.resolve("./src/css/docs.scss")],
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
