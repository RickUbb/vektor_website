// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/// @type {import('@docusaurus/types').Config}
const config = {
  title: "Vektor",
  tagline: "Plataforma de Agentes de IA",
  favicon: "img/favicon.ico",

  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://vektor-website-hagx.vercel.app/", // Cambia esto por tu URL de Vercel
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RickUbb", // Tu nombre de usuario de GitHub
  projectName: "vektor_website", // El nombre de tu repositorio

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Vektor",
        logo: {
          alt: "Vektor Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentación",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/Snayderstone/vektor_website",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Recursos",
            items: [
              { label: "Documentación de Vektor", to: "/docs/vektor/overview" },
              {
                label: "MCP Dashboards",
                to: "/docs/vektor/tecnica/Modulos/mcp_dashboards",
              },
              {
                label: "MCP Supabase",
                to: "/docs/vektor/tecnica/Modulos/mcp_supabase",
              },
              {
                label: "MCP Weather",
                to: "/docs/vektor/tecnica/Modulos/mcp_weather",
              },
              { label: "API", to: "/docs/vektor/tecnica/BackEnd/endpoints" },
              {
                label: "GitHub",
                href: "https://github.com/Xingsandesu/Vektor",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vektor Project, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
