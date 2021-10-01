import styled from "styled-components"

export const StyledHero = styled.section`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 10rem;
  text-align: center;
  position: relative;
  z-index: 2;
`

export const StyledHeroName = styled.h2`
  font-family: "Raleway", sans-serif;
  font-size: 2.5rem;
  padding-top: 4.5rem;
`

export const StyledHeroTagline = styled.h1`
  font-family: "Raleway", sans-serif;
  font-size: 7rem;
  padding-top: 4.5rem;
  z-index: 2;
`
export const StyledHeroDescription = styled.p`
  font-size: 2rem;
  padding: 0rem 0rem 4rem 0rem;
  width: 80%;
  color: #9ea0ab;
  z-index: 2;
  transform: translateY(-2.5rem);
`
