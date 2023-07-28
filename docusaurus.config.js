// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Public Notes",
  tagline: "documentation of ideas, thoughts, and experiences",
  favicon: "img/logo.png",

  // Set the production url of your site here
  url: "https://publicnotes.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ahmadalli", // Usually your GitHub org/user name.
  projectName: "public-notes", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  trailingSlash: true,

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
          routeBasePath: "/",
          editUrl: "https://github.com/ahmadalli/public-notes/edit/main/",
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          blogTitle: "Blog",
          routeBasePath: "/blog",
          editUrl: "https://github.com/ahmadalli/public-notes/edit/main/",
          showReadingTime: true,
          postsPerPage: 10,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-GC9V7745EZ",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: "img/logo.png",
      navbar: {
        title: "Public Notes",
        logo: {
          alt: "Logo",
          src: "img/logo.png",
        },
        items: [
          {
            to: "/",
            label: "Notes",
            position: "left",
          },
          {
            to: "blog",
            label: "Blog",
            position: "left",
          },
          {
            href: "https://ahmadallish.substack.com",
            label: "Substack",
            position: "right",
          },
          {
            href: "https://github.com/ahmadalli/public-notes",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} <a href="https://ahmadalli.rocks">Ahmadali Shafiee</a>. Built with Docusaurus. Licensed under <a href="https://creativecommons.org/licenses/by/4.0/">CC-BY-4.0</a>.`,
      },
      colorMode: {
        defaultMode: "dark",
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
