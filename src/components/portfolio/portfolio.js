import * as React from "react"

import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"

import {
  StyledPortfolioTitle,
  StyledPortfolioGrid,
  StyledPortofolioCard,
  StyledPortfolioDescription,
} from "../../styles/StyledPortfolio"
import "../layout/layout.css"

import ImagesPortfolio from "./images-portfolio"
import { image } from "./images-portfolio.module.css"
import { images } from "../data/data"
import { filterImage, filterImagesFeatured } from "../../helpers/utils"

const Portfolio = ({ img }) => {
  return (
    <div id="portfolio_section">
      <StyledPortfolioTitle>Portfolio</StyledPortfolioTitle>
      <StyledPortfolioDescription>
        Here are a few projects I've worked on recently.
      </StyledPortfolioDescription>
      <StyledPortfolioGrid>
        {filterImagesFeatured(images).map(item => {
          const { githubUrl, livesiteUrl, filename, title, description } = item
          return (
            <StyledPortofolioCard key={item.id}>
              <ImagesPortfolio codeLink={githubUrl} websiteLink={livesiteUrl}>
                <GatsbyImage
                  image={filterImage(img.allFile.edges, filename)}
                  alt={`Preview ${title}`}
                  className={image}
                />
              </ImagesPortfolio>
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
