import styled from "styled-components"

export const StyledWrapper = styled.section`
  width: 100%;
  padding: 0rem 0rem 4.5rem 0rem;
`

export const StyledPortfolioTitle = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 3.5rem;
  padding-bottom: 0.5rem;
  text-align: center;
  padding-top: ${props => !props.featured && "5rem"};
`
export const StyledPortfolioDescription = styled.p`
  font-size: 2rem;
  padding: 0rem 0rem 6rem 0rem;
  color: #9ea0ab;
  text-align: center;
  width: 50%;
  margin: 0 auto;
`

export const StyledPortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(60rem, 1fr));
  grid-column-gap: 5rem;
  grid-row-gap: 3rem;
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`

export const StyledPortofolioCard = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (max-width: 1330px) {
    margin: auto;
  }
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
