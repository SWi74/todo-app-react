import React from "react"
import { ThemeProvider } from "styled-components"

const colors = {
  dark: "#333",
  light: "white",

  bg:"#333333",
  lightBg:"rgba(77, 77, 77, 0.4)",
  darkBg: "rgba(26, 26, 26, 0.4)",

  primary: "#16697A",
  secondary: "#489FB5",
  tetrary: "#82C0CC",

  highlight: "rgba(255, 255, 255, 0.1)",
  shadow: "rgba(0, 0, 0, 0.1)",

  accent: "aquamarine"
}

const media = {
  second: "730px",
  third: "1136px"
}

const effects = {
  volume: `5px 5px 5px ${colors.darkBg}, -5px -5px 5px ${colors.lightBg}`,
  bump: `2px 2px 2px ${colors.darkBg}, -2px -2px 2px ${colors.lightBg}`,
  focused: `inset 0 0 5px ${colors.accent}`,
  inset: `inset -2px -2px 2px ${colors.lightBg}, inset 2px 2px 2px ${colors.darkBg}`
}

const theme = {
  colors,
  media,
  effects
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme


