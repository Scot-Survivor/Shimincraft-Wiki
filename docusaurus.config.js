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
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.png",
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
              {
                  type: "doc",
                  docId: "intro",
                  position: "left",
                  label: "Getting Started",
              },
              { to: "/blog", label: "Shimincraft Blog", position: "left" },
              { to: `https://github.com/${organizationName}/${projectName}/tree/main/`, label: `Last Updated: ${new Date().toISOString().split('T')[0]}`, position: "right" },
          ],
      },
      footer: {},
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    },
};

module.exports = config;
