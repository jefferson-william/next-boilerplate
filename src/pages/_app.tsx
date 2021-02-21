import React from 'react'
import { ThemeProvider } from 'styled-components'
import wrapperStore from '~/store'
import theme from '~/styles/theme'
import { MyAppProps } from '~/types/config/App'

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps, router }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} {...router} />
  </ThemeProvider>
)

export default wrapperStore.withRedux(MyApp)
