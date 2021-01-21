import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Poppins', sans-serif;
    color: ${props => props.theme.colors.light};
    box-sizing: border-box;
    overflow-y: scroll;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
  }
  ::-moz-focus-inner {
    border: 0;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  a:focus {
    outline: none;
  }
`

export default GlobalStyle
