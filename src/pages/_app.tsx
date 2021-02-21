import { FC } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import wrapperStore from '~/store'
import theme from '~/styles/theme'
import { MyAppProps } from '~/types/config/App'

const MyApp: FC<MyAppProps> = ({ Component, pageProps, router }) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} {...router} />
    </ThemeProvider>
  </>
)

export default wrapperStore.withRedux(MyApp)
