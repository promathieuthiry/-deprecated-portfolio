import * as React from "react"
import {
  StyledService,
  StyledWrapper,
  StyledGridContainer,
  StyledCard,
  StyledCardTitle,
  StyledCardDescription,
  StyledCardMain,
} from "../../styles/StyledService"
import { StaticImage } from "gatsby-plugin-image"
import "../layout/layout.css"

const Services = () => {
  return (
    <>
      <StyledWrapper>
        <StyledService>Services</StyledService>
        <StyledGridContainer>
          <StyledCard>
            <StaticImage
              src="../../images/service-design.png"
              alt=""
              className="services-img "
            />

            <StyledCardTitle>Designer</StyledCardTitle>
            <StyledCardDescription>
              I value simple content structure, clean design patterns, and
              thoughtful interactions.
            </StyledCardDescription>
          </StyledCard>
          <StyledCardMain>
            <StaticImage
              src="../../images/service-frontend.png"
              alt=""
              className="services-img "
            />
            <StyledCardTitle style={{ color: "#1c3246" }}>
              Front-End Developer
            </StyledCardTitle>
            <StyledCardDescription>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </StyledCardDescription>
          </StyledCardMain>
          <StyledCard>
            <StaticImage
              src="../../images/service-backend.png"
              alt=""
              className="services-img "
            />
            <StyledCardTitle>Back-End Developer</StyledCardTitle>
            <StyledCardDescription>
              I like to code things from scratch, and enjoy bringing ideas to
              life in the browser.
            </StyledCardDescription>
          </StyledCard>
        </StyledGridContainer>
      </StyledWrapper>
    </>
  )
}

export default Services
