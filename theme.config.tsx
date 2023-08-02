import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Giscus from "@giscus/react";

const config: DocsThemeConfig = {
  logo: <span>CAEC</span>,
  project: {
    link: "https://github.com/openCAEC/manual-do-calouro",
  },
  docsRepositoryBase: "https://github.com/openCAEC/manual-do-calouro",
  footer: {
    text: "Manual do Calouro, CAEC",
  },
  editLink: {
    text: "Edite esta página no GitHub",
  },
  head: (
    <>
      <link rel="icon" type="image/png" href="/manual-do-calouro/favicon.png"></link>
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
        locale: 'pt',
        images: [{ url: "https://opencaec.github.io/manual-do-calouro/favicon.png" }],
      },
    };
  },
  main({ children }) {
    return (
      <>
        {children}
        <Giscus
          repo="openCAEC/manual-do-calouro"
          repoId="R_kgDOKBM0YA"
          category="General"
          categoryId="DIC_kwDOKBM0YM4CYNzu"
          mapping="pathname"
          reactionsEnabled="1"
          emitMetadata="0"
          theme="preferred_color_scheme"
          loading="lazy"
          lang="pt"
        />
      </>
    );
  },
  //faviconGlyph: '✦',
};

export default config;
