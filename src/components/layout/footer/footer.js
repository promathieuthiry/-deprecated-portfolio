import * as React from "react"

import { StyledFooter, Email } from "../../../styles/StyledFooter"
import { CustomIcon } from "../../../styles/StyledIcon"
import { iconArray } from "../../data/icon"

function Footer({ notdisplayBorderTop }) {
  return (
    <StyledFooter notdisplayBorderTop={notdisplayBorderTop}>
      <ul>
        {iconArray.map((item, index) => {
          return (
            <li key={index}>
              <CustomIcon icon={item.icon} href={item.href} />
            </li>
          )
        })}
      </ul>
      <Email />
    </StyledFooter>
  )
}

export default Footer
