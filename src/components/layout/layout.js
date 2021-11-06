import * as React from "react"

import Header from "./header"
import Footer from "./footer/footer"
import Contact from "../contact/contact"
import { StyledWrapper } from "../../styles/Global"
import GlobalStyles from "../../styles/Global"
import "../../styles/app.css"

const Layout = ({ children }) => {
  return (
    <StyledWrapper>
      <GlobalStyles />
      <Header />
      {children}
      <Contact />
      <Footer notdisplayBorderTop={true} />
    </StyledWrapper>
  )
}

export default Layout
