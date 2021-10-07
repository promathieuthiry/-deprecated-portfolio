import styled from "styled-components"

export const StyledHero = styled.section`
  width: 100%;
  min-height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 10rem;
  text-align: center;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    padding: 4rem 5rem;
  }

  @media only screen and (max-width: 600px) {
    padding: 4rem 1rem;
  }
`

export const StyledHeroName = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 2.5rem;
  padding-top: 4.5rem;

  @media only screen and (max-width: 600px) {
    font-size: 2rem;
  }
`

export const StyledHeroTagline = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 7rem;
  padding-top: 4.5rem;
  z-index: 2;

  @media only screen and (max-width: 800px) {
    font-size: 5rem;
  }

  @media only screen and (max-width: 600px) {
    font-size: 4rem;
  }
`
export const StyledHeroDescription = styled.p`
  font-size: 2rem;
  padding: 0rem 0rem 4rem 0rem;
  width: 80%;
  color: #9ea0ab;
  z-index: 2;
  transform: translateY(-2.5rem);

  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`
