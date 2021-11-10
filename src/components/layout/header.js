import React, { useState } from "react"
import { Link } from "gatsby"

import { onLinkClick, addOverflow, removeOverflow } from "../../helpers/utils"
import {
  StyledHeader,
  StyledHeaderLink,
  IconMobile,
  Barswrapper,
  Bars,
} from "../../styles/StyledHeader"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Header = () => {
  const [open, setOpen] = useState(false)
  function Open() {
    if (open) {
      removeOverflow()
      setOpen(!open)
    } else {
      addOverflow()
      setOpen(!open)
    }
  }

  function onLink(section) {
    Open()
    onLinkClick(section)
  }

  return (
    <StyledHeader>
      <StyledHeaderLink to="/">
        <StaticImage src="../../images/code.png" alt="" />
        <p>Mathieu Thiry</p>
      </StyledHeaderLink>

      {/* Desktop Navbar */}
      <ul>
        <li>
          <Link to="/" activeClassName="gradient_text">
            Home
          </Link>
        </li>
        <li>
          <Link to="/works" activeClassName="gradient_text">
            Works
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="gradient_text">
            Contact
          </Link>
        </li>
      </ul>
      {/* End Desktop Navbar */}

      {/* Mobile icon */}

      {open ? (
        <IconMobile>
          <FontAwesomeIcon icon={faTimes} size="3x" onClick={Open} />
        </IconMobile>
      ) : (
        <IconMobile>
          <FontAwesomeIcon icon={faBars} size="3x" onClick={Open} />
        </IconMobile>
      )}

      {open && (
        <Barswrapper>
          <Bars>
            <Link to="/">Home</Link>
          </Bars>
          <Bars>
            <Link to="/works">Works</Link>
          </Bars>
          <Bars>
            <Link to="/contact">Contact</Link>
          </Bars>
        </Barswrapper>
      )}

      {/* End Mobile Navbar */}
    </StyledHeader>
  )
}

export default Header
