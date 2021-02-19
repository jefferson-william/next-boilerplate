import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    outline: 0;
    margin: 0;
  }
  html {
    display: table;
  }
  body {
    font-size: 16px;
    font-family: 'Red Rat Display', Arial, Helvetica, sans-serif;
  }
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
`
