import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "./layout.css"
import ReactLogo from "./reactLogo"
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
        <StaticImage
          src="../images/profile-pic.jpeg"
          alt="Profile picture Mathieu Thiry"
          className="hero__image-profile"
        />
        <StyledHeroName>Hi, I'm Mathieu</StyledHeroName>

        <StyledHeroTagline>
          Building digital products and experience
        </StyledHeroTagline>
        <div style={{ height: "30rem" }}>
          <ReactLogo />
        </div>
        <StyledHeroDescription>
          Front end developer dedicated to create beautiful interface in taking
          advantage of the React ecosystem
        </StyledHeroDescription>
        <Button>Connect with me</Button>
      </StyledHero>
    </>
  )
}

export default Hero
