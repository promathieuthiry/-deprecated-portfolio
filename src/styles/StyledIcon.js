import React from "react"

import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const IconElement = styled.a.attrs(props => ({
  target: "_blank",
  rel: "noreferrer",
  href: props.href,
}))``

export const CustomIcon = ({ icon, href, size }) => {
  return (
    <IconElement href={href}>
      <FontAwesomeIcon icon={icon} size={size} />
    </IconElement>
  )
}
