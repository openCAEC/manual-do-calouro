/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
});

let nextra_conf = withNextra();
console.log("nextra_conf.rewrites", nextra_conf.rewrites());
delete nextra_conf.rewrites;

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const config =  withPWA({
    ...nextra_conf,
    output: "export",
    distDir: "docs",
    basePath: "/manual-do-calouro",
    images: {
      unoptimized: true,
    },
    assetPrefix: "./",
    compress: true,
    swcMinify: true,
    /* Não da pra usar junto com output export
      i18n: {
        locales: ['en', 'pt'],
        defaultLocale: 'pt'
      }*/
  })


console.log("-----", config);

module.exports = config;
