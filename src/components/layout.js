/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import { StyledWrapper } from "../styles/Global"
import GlobalStyles from "../styles/Global"

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

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
