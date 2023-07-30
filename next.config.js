/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
});

let nextra_conf = withNextra();
console.log("nextra_conf.rewrites", nextra_conf.rewrites());
delete nextra_conf.rewrites;

const config = withPWA({
  ...nextra_conf,
  output: "export",
  distDir: "docs",
  basePath: "/manual-do-calouro",
  images: {
    unoptimized: true,
  },
  assetPrefix: "./",
  compress: true,
  plugins: [
    [
      "@fullhuman/postcss-purgecss",
      {
        content: [
          "./pages/**/*.{js,jsx,ts,tsx,md,mdx}",
          "./components/**/*.{js,jsx,ts,tsx,md,mdx}",
        ],
        defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    ],
    "postcss-preset-env",
  ],
  /* Não da pra usar junto com output export
  i18n: {
    locales: ['en', 'pt'],
    defaultLocale: 'pt'
  }*/
});

console.log("-----", config);

module.exports = config;
