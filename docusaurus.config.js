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

<<<<<<< HEAD
  url: "https://your-docusaurus-site.example.com",
  baseUrl: "/",

  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus",    // Usually your repo name.

  onBrokenLinks: "warn", // Cambiado de "throw" a "warn"
=======
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
>>>>>>> manual-usuario
  onBrokenMarkdownLinks: "warn",

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
<<<<<<< HEAD
=======
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
>>>>>>> manual-usuario
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
<<<<<<< HEAD
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "ignore", // Ignora warning por falta de truncate
=======
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
>>>>>>> manual-usuario
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
<<<<<<< HEAD
=======
      // Replace with your project's social card
>>>>>>> manual-usuario
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
<<<<<<< HEAD
            href: "https://github.com/Xingsandesu/Vektor",
=======
            href: "https://github.com/Snayderstone/vektor_website",
>>>>>>> manual-usuario
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
