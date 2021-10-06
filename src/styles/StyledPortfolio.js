import styled from "styled-components"

export const StyledWrapper = styled.section`
  width: 100%;
  padding: 0rem 0rem 4.5rem 0rem;
`

export const StyledPortfolioTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 3.5rem;
  padding-bottom: 1.5rem;
  text-align: center;
`
export const StyledPortfolioDescription = styled.p`
  font-size: 2rem;
  padding: 0rem 0rem 4rem 0rem;
  color: #9ea0ab;
  text-align: center;
`

export const StyledPortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
  width: 100%;
`

export const StyledPortofolioCard = styled.div`
  justify-self: center;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Raleway", sans-serif;
    font-size: 2.8rem;
    padding: 1.5rem 0rem 1rem 0rem;
  }
  span {
    color: #9ea0ab;
    font-size: 1.6rem;
  }
`
