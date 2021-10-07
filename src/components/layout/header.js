import * as React from "react"
import { Link } from "gatsby"

import { onLinkClick } from "../../helpers/scrool"
import { StyledHeader, StyledHeaderLink } from "../../styles/StyledHeader"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  // function onLinkClick() {
  //   return document.getElementById("contact_section").scrollIntoView({
  //     behavior: "smooth",
  //     block: "start",
  //     inline: "nearest",
  //   })
  // }

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
          <Link to="/404">Works</Link>
        </li>
        <li>
          <div onClick={onLinkClick}>Contact</div>
        </li>
      </ul>
    </StyledHeader>
  )
}

export default Header
