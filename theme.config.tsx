import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  primaryHue: 512,
  logo: <span>Balancelynx</span>,
  project: {
    link: 'https://github.com/ianatha/balancelynx',
  },
  docsRepositoryBase: 'https://github.com/ianatha/balancelynx-docs/tree/main/',
  footer: {
    text: '© MMXXII Ian Atha. All rights reserved.',
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Balancelynx" />
    </>
  )
}

export default {
  ...config,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Balancelynx'
    }
  }
}