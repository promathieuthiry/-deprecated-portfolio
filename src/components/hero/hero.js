import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../layout/layout.css"
import ReactLogo from "./reactLogo"
import WaveGif from "../../images/wave.gif"
import TypeWriter from "./typeWriter"

import {
  StyledHero,
  StyledHeroName,
  StyledHeroTagline,
  StyledHeroDescription,
} from "../../styles/StyledHero"
import { onLinkClick } from "../../helpers/utils"
import { Button } from "../../styles/StyledButton"

const Hero = () => {
  return (
    <>
      <StyledHero>
        <StaticImage
          src="../../images/profile-pic.jpeg"
          alt="Profile picture Mathieu Thiry"
          className="hero__image-profile"
        />
        <StyledHeroName>
          Hi, I'm Mathieu
          <img src={WaveGif} alt="" className="hero__image-wave-gif" />
        </StyledHeroName>

        <StyledHeroTagline>
          Building digital products like
          <TypeWriter />
        </StyledHeroTagline>
        <div style={{ height: "30rem" }}>
          <ReactLogo />
        </div>
        <StyledHeroDescription>
          Mid React developer dedicated to create beautiful interface in taking
          advantage of the React ecosystem. 2 years of experience with React.
        </StyledHeroDescription>
        <Button onClick={() => onLinkClick("contact_section")}>
          Connect with me
        </Button>
      </StyledHero>
    </>
  )
}

export default Hero
