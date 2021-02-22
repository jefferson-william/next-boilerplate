/* eslint-disable react/no-danger */
import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import theme from '~/styles/theme'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    const sheet = new ServerStyleSheets()

    const page = ctx.renderPage((App: any) => (props: any) => sheet.collect(<App {...props} />))
    const styleTag = sheet.getStyleElement()

    return {
      ...initialProps,
      ...page,
      styles: [...React.Children.toArray(initialProps.styles), styleTag],
    }
  }

  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/icon-32x32.png`} sizes="32x32" />
          <link rel="icon" href={`${process.env.PUBLIC_URL}/icon-192x192.png`} sizes="192x192" />
          <link rel="apple-touch-icon" href={`${process.env.PUBLIC_URL}/icon-192x192.png`} />
          <link rel="manifest" href={`${process.env.PUBLIC_URL}/manifest.json`} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
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
        <body>
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
