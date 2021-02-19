import React from 'react'
import { Provider } from 'react-redux'
import withReduxSaga from 'next-redux-saga'
import withRedux from 'next-redux-wrapper'
import App, { AppInitialProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import configureStore from '~/store'
import theme from '~/styles/theme'

class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps, store, router, err }: any = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} {...router} {...err} />
        </ThemeProvider>
      </Provider>
    )
  }
}

export default withRedux(configureStore, { debug: process.env.NODE_ENV === 'development' })(withReduxSaga(MyApp))
