import * as React from "react"

import Header from "./header"
import Footer from "./footer"

import { StyledWrapper } from "../../styles/Global"
import GlobalStyles from "../../styles/Global"

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </StyledWrapper>
  )
}

export default Layout
