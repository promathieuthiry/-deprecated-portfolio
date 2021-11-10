import * as React from "react"

import { filterImage, openInNewTab } from "../../helpers/utils"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { ButtonLink } from "../../styles/StyledButton"

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: 0.4s ease;
`

const ImageStyle = styled(GatsbyImage)`
  height: 40rem;
  object-fit: cover;
  max-width: 60rem;
  border-radius: 0.6rem;
  transition: 0.4s ease;

  @media (max-width: 600px) {
    height: auto;
  }
`

const Container = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 0.6rem;
  max-width: 60rem;

  &:hover ${ImageOverlay} {
    height: 100%;
  }
  &:hover ${ImageStyle} {
    transform: scale(1.2);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  gap: 4rem;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 450px) {
    flex-direction: column;
  }
`

const ImagesPortfolio = ({
  allImages,
  codeLink,
  websiteLink,
  filename,
  title,
}) => {
  return (
    <Container>
      <ImageStyle
        image={filterImage(allImages, filename)}
        alt={`Preview ${title}`}
      />
      <ImageOverlay>
        <ButtonWrapper>
          <ButtonLink onClick={() => openInNewTab(codeLink)}>
            <FontAwesomeIcon icon={faGithub} />
            &nbsp;&nbsp;Code
          </ButtonLink>
          <ButtonLink gradient onClick={() => openInNewTab(websiteLink)}>
            <FontAwesomeIcon icon={faExternalLinkAlt} />
            &nbsp;&nbsp;Website
          </ButtonLink>
        </ButtonWrapper>
      </ImageOverlay>
    </Container>
  )
}

export default ImagesPortfolio
