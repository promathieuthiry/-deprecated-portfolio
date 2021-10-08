import * as React from "react"

import {
  container,
  image_overlay,
  button_outline,
  button_link,
} from "./images-portfolio.module.css"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

const ImagesPortfolio = ({ codeLink, websiteLink, children }) => {
  return (
    <div className={container}>
      {children}
      <div className={image_overlay}>
        <a href={codeLink} target="_blank" rel="noreferrer">
          <button className={button_outline}>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;Code
          </button>
        </a>
        <a href={websiteLink} target="_blank" rel="noreferrer">
          <button className={button_link}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            &nbsp;&nbsp;Website
          </button>
        </a>
      </div>
    </div>
  )
}

export default ImagesPortfolio
