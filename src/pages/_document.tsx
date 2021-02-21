/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheet()
    const page = ctx.renderPage((App: any) => (props: any) => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()

    return {
      ...initialProps,
      ...page,
      styles: [styleTags],
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#efefef" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/icon-32x32.png`} sizes="32x32" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/icon-192x192.png`} sizes="192x192" />
          <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}/icon-192x192.png`} />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          {this.props.styles}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-XXXXXXX');
              `,
            }}
          />
        </Head>
        <body data-theme="default">
          <noscript>
            <iframe
              title="GTM"
              src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
