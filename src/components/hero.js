import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import {
  StyledHero,
  StyledHeroName,
  StyledHeroTagline,
  StyledHeroDescription,
} from "../styles/StyledHero"

import { Button } from "../styles/StyledButton"

const Hero = () => {
  return (
    <>
      <StyledHero>
        {/* <StaticImage
          src="../images/hero-cover.svg"
          alt=""
          className="hero__image-cover"
        /> */}

        <StaticImage
          src="../images/profile-pic.jpeg"
          alt="Profile picture Mathieu Thiry"
          className="hero__image-profile"
        />
        <StyledHeroName>Hi, I'm Mathieu</StyledHeroName>

        <StyledHeroTagline>
          Building digital products, brands, and experience.
        </StyledHeroTagline>

        <StyledHeroDescription>
          A front end developer specialized in UI/UX Design, Responsive Web
          Design, and Visual Development
        </StyledHeroDescription>
        <Button>Connect with me</Button>
      </StyledHero>
    </>
  )
}

export default Hero
