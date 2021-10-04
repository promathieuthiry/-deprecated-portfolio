import * as React from "react"
import { Link } from "gatsby"

import { StyledHeader, StyledHeaderLink } from "../../styles/StyledHeader"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderLink to="/">
        <StaticImage src="../../images/code.png" alt="" />
        <p>Mathieu Thiry</p>
      </StyledHeaderLink>
      <ul>
        <li>
          <Link to="/404">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/404">Works</Link>
        </li>
        <li>
          <Link to="/404">Contact</Link>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
