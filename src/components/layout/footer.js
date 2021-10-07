import * as React from "react"

import { StyledFooter } from "../../styles/StyledFooter"
import {
  email_container,
  email_logo_wrapper,
  mail_address,
  blob,
} from "./footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Blob from "../../images/blob.inline.svg"
function Footer() {
  return (
    <StyledFooter>
      <ul>
        <li>
          <a
            href="https://twitter.com/mathieu_thiry"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/promathieuthiry"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mathieu-thiry/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <div className={email_container}>
        <Blob className={blob} />
        <span className={email_logo_wrapper}>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <a
          href="mailto:promathieuthiry@gmail.com"
          target="_blank"
          className={mail_address}
        >
          promathieuthiry@gmail.com
        </a>
      </div>
    </StyledFooter>
  )
}

export default Footer
