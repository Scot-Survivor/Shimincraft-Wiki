// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const organizationName = "Scot-Survivor";
const projectName = "Shimincraft-Wiki";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Shimincraft Wiki",
  tagline: "mc.shimincraft.com",
  url: `https://${organizationName}.github.io`,
  baseUrl: `/`,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  favicon: "img/favicon.ico",
  // GitHub Pages adds a trailing slash by default that I don't want
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig: {
      navbar: {
          title: "Shimincraft SMP",
          logo: {
              alt: "Shimincraft Logo",
              src: "img/logo.png",
          },
          items: [
              { to: '/glossary', label: 'Glossary', position: 'left' },
              {
                  type: "doc",
                  docId: "intro",
                  position: "left",
                  label: "Getting Started",
              },
              { to: "/blog", label: "Dev Blog", position: "left" },
          ],
      },
      footer: {
          style: "dark",
          links: [
              {
                  title: "Docs",
                  items: [
                      {
                          label: "Glossary",
                          to: "/glossary",
                      },
                      {
                          label: "Documentation",
                          to: "/docs/intro",
                      },
                  ],
              },
              {
                  title: "More",
                  items: [
                      {
                          label: "Blog",
                          to: "/blog",
                      },
                      {
                          label: "GitHub of Wiki",
                          href: `https://github.com/${organizationName}/${projectName}`,
                      },
                  ],
              },
          ],
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    },
};

module.exports = config;
