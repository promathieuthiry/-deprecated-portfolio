import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import {
  StyledPortfolioTitle,
  StyledPortfolioGrid,
  StyledPortofolioCard,
  StyledPortfolioDescription,
} from "../../styles/StyledPortfolio"
import "../layout/layout.css"

import ImagesPortfolio from "./images-portfolio"
import { image } from "./images-portfolio.module.css"

const Portfolio = () => {
  return (
    <>
      <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
      <StyledPortfolioDescription>
        Here are a few projects I've worked on recently.
      </StyledPortfolioDescription>
      <StyledPortfolioGrid>
        <StyledPortofolioCard>
          <ImagesPortfolio
            codeLink="https://github.com/promathieuthiry/frontend_mentor/tree/main/fm11-fylo-dark-theme-landing-page-master"
            websiteLink="https://frontend-mentor-promathieuthiry.netlify.app/fm11-fylo-dark-theme-landing-page-master/index.html"
          >
            <StaticImage
              src="../../images/preview-project-fylo-data-storage.jpeg"
              alt="Preview project Fylo-Data-Storage"
              className={image}
            />
          </ImagesPortfolio>
          <p>Fylo landing page</p>
          <span>
            Corporate website for data storage. Dark theme website based on a
            figma design
          </span>
        </StyledPortofolioCard>

        <StyledPortofolioCard>
          <ImagesPortfolio
            codeLink="https://github.com/promathieuthiry/frontend_mentor/tree/main/fm8-pricing-component-with-toggle-master"
            websiteLink="https://frontend-mentor-promathieuthiry.netlify.app/fm8-pricing-component-with-toggle-master/index.html"
          >
            <StaticImage
              src="../../images/preview-project-price-component.jpg"
              alt="Preview project Price component"
              className={image}
            />
          </ImagesPortfolio>
          <p>Price component</p>
          <span>
            A pricing component with toggle solution based on a figma design
          </span>
        </StyledPortofolioCard>

        <StyledPortofolioCard>
          <ImagesPortfolio
            codeLink="https://github.com/promathieuthiry/frontend_mentor/tree/main/fm4-pod-request-access-landing-page"
            websiteLink="https://frontend-mentor-promathieuthiry.netlify.app/fm4-pod-request-access-landing-page/index.html"
          >
            <StaticImage
              src="../../images/preview-project-pod-request-project.jpeg"
              alt="Preview project landing page podcasts"
              className={image}
            />
          </ImagesPortfolio>
          <p>Pod landing page</p>
          <span>A landing page for a podcast based on a figma design</span>
        </StyledPortofolioCard>
      </StyledPortfolioGrid>
    </>
  )
}

export default Portfolio
