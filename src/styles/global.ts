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
  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
  }
  #__next {
    display: flex;
    flex-direction: column;
  }
`
