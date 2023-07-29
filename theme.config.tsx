import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>CAEC</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
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
    text: "Edite esta página no GitHub",
  },
  head: (
    <>
      <meta
        name="google-site-verification"
        content="Fn69z68OsVveXs1qgSQCWGkVY6sjVmhqAWXwRJHt4_w"
      />
      <meta name="description" content="Manual do Calouro, CAEC"></meta>
    </>
  ),
  useNextSeoProps() {
    return {
      description: "Manual do Calouro, CAEC",
      openGraph: {
        images: [{ url: "https://nextra.vercel.app/og.png" }],
      },
    };
  },

  //faviconGlyph: '✦',
};

export default config;
