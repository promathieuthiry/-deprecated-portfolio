import React, { useState } from "react"
import { Link } from "gatsby"

import {
  onLinkClick,
  addOverflow,
  removeOverflow,
  getWindowDimensions,
} from "../../helpers/utils"
import { StyledHeader, StyledHeaderLink } from "../../styles/StyledHeader"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"
import { icon_menu, barswrapper, bars } from "./header.module.css"
const Header = () => {
  const [open, setOpen] = useState(false)
  // console.log(getWindowDimensions())
  function Open() {
    if (open) {
      removeOverflow()
      setOpen(!open)
    } else {
      addOverflow()
      setOpen(!open)
    }
  }

  return (
    <StyledHeader>
      <StyledHeaderLink to="/">
        <StaticImage src="../../images/code.png" alt="" />
        <p>Mathieu Thiry</p>
      </StyledHeaderLink>

      {/* Desktop Navbar */}
      <ul>
        {/* <li>
          <Link to="/404">About</Link>
        </li> */}
        <li>
          <div onClick={() => onLinkClick("portfolio_section")}>Works</div>
        </li>
        <li>
          <div onClick={() => onLinkClick("contact_section")}>Contact</div>
        </li>
      </ul>
      {/* End Desktop Navbar */}
      {open ? (
        <FontAwesomeIcon
          icon={faTimes}
          size="3x"
          onClick={Open}
          className={icon_menu}
        />
      ) : (
        <FontAwesomeIcon
          icon={faBars}
          size="3x"
          onClick={Open}
          className={icon_menu}
        />
      )}
      {/* Start Mobile Navbar */}
      {open && (
        <div className={barswrapper}>
          {/* <div className={bars}>
            <Link to="/404">About</Link>
          </div> */}
          <div className={bars}>
            <div onClick={() => onLinkClick("portfolio_section")}>Works</div>
          </div>
          <div className={bars}>
            <div onClick={() => onLinkClick("contact_section")}>Contact</div>
          </div>
        </div>
      )}
      {/* End Mobile Navbar */}
    </StyledHeader>
  )
}

export default Header
