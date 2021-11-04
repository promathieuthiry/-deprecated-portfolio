import { ThemeProvider } from "styled-components"
import Theme from "./src/styles/Theme"
import React from "react"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={Theme}>{element}</ThemeProvider>
)
