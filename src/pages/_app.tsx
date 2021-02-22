import { FC, useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import wrapperStore from '~/store'
import theme from '~/styles/theme'
import { MyAppProps } from '~/types/config/App'

const MyApp: FC<MyAppProps> = ({ Component, pageProps, router }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')

    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} {...router} />
      </ThemeProvider>
    </>
  )
}

export default wrapperStore.withRedux(MyApp)
