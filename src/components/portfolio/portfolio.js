import * as React from "react"

import {
  StyledPortfolioTitle,
  StyledPortfolioGrid,
  StyledPortofolioCard,
  StyledPortfolioDescription,
  ImageStyle,
} from "../../styles/StyledPortfolio"

import ImagesPortfolio from "./images-portfolio"
import { images } from "../data/data"
import { filterImage, filterImagesFeatured } from "../../helpers/utils"
import styled from "styled-components"

const Portfolio = ({ img, featured }) => {
  return (
    <div id="portfolio_section">
      <StyledPortfolioTitle featured={featured}>Portfolio</StyledPortfolioTitle>
      <StyledPortfolioDescription>
        {featured
          ? "Here are a few projects I've worked on recently"
          : "I am constantly exploring new technologies and creative designs to develop projects that build on and go beyond my existing knowledge."}
      </StyledPortfolioDescription>

      <StyledPortfolioGrid>
        {filterImagesFeatured(images, featured).map(item => {
          const { githubUrl, livesiteUrl, filename, title, description } = item
          return (
            <StyledPortofolioCard key={item.id}>
              <ImagesPortfolio
                allImages={img.allFile.edges}
                codeLink={githubUrl}
                websiteLink={livesiteUrl}
                filename={filename}
                title={title}
              ></ImagesPortfolio>
              <div style={{ maxWidth: "60rem" }}>
                <p>{title}</p>
                <span>{description}</span>
              </div>
            </StyledPortofolioCard>
          )
        })}
      </StyledPortfolioGrid>
    </div>
  )
}

export default Portfolio
