import React from "react"

import styled from "styled-components"
import {
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconElement = styled.a.attrs(props => ({
  target: "_blank",
  rel: "noreferrer",
  href: props.href,
}))``

export const CustomIcon = ({ icon, href }) => {
  return (
    <IconElement href={href}>
      <FontAwesomeIcon icon={icon} />
    </IconElement>
  )
}
