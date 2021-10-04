import * as React from "react"

import {
  StyledFooter,
  StyledEmail,
  StyledBlob,
} from "../../styles/StyledFooter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
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
      <StyledEmail>
        <StyledBlob>
          <svg
            width="150"
            height="150"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#242631"
              d="M35.3,-16.9C39.6,1.5,32.4,18.2,19.3,28.1C6.2,38,-13,41.1,-32.8,30.2C-52.6,19.3,-73.1,-5.5,-67.8,-25.5C-62.4,-45.4,-31.2,-60.4,-7.8,-57.8C15.6,-55.3,31.1,-35.2,35.3,-16.9Z"
              transform="translate(100 100)"
            />
          </svg>
        </StyledBlob>
        <span>
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <p>promathieuthiry@gmail.com</p>
      </StyledEmail>
    </StyledFooter>
  )
}

export default Footer
