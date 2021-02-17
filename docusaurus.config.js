module.exports = {
  title: "Hackney Design System",
  tagline: "The design system and frontend playbook for Hackney Council",
  url: "https://design-system.hackney.gov.uk",
  baseUrl: "/LBH-frontend/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
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
        // {
        //   to: "/",
        //   activeBasePath: "docs",
        //   label: "Get started",
        // },
        // {
        //   to: "/docs/contributing",
        //   label: "Contributing",
        // },
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
          customCss: [
            // require.resolve("./docs/lbh/all.scss"),
            require.resolve("./src/css/docs.scss"),
          ],
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
