import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>CAEC</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Manual do Calouro, CAEC",
  },
  banner: {
    key: "CAEC",
    text: "CAEC",
  },
  editLink: {
    text: "Edit this page on GitHub",
  },
  //faviconGlyph: '✦',
};

export default config;
