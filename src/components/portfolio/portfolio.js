import * as React from "react"

import { GatsbyImage } from "gatsby-plugin-image"

import {
  StyledPortfolioTitle,
  StyledPortfolioGrid,
  StyledPortofolioCard,
  StyledPortfolioDescription,
} from "../../styles/StyledPortfolio"

import ImagesPortfolio from "./images-portfolio"
import { image } from "./images-portfolio.module.css"
import { images } from "../data/data"
import { filterImage, filterImagesFeatured } from "../../helpers/utils"

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
