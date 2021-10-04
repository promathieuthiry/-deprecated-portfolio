import styled from "styled-components"

export const StyledWrapper = styled.section`
  width: 100%;
  padding: 4.5rem 0rem 8.5rem 0rem;
  text-align: center;
`

export const StyledService = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 3.5rem;
  padding-bottom: 3rem;
`

export const StyledGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
  row-gap: 2.4rem;
  column-gap: 8rem;
  padding-top: 3rem;
`

export const StyledCard = styled.div`
  background: #232631;
  box-shadow: 0.5rem 0.5rem 0.8rem 0.4rem rgba(0, 0, 0, 0.0991282);
  border-radius: 0.34rem;
  padding: 2.6rem 2.6rem 2.6rem 2.6rem;
`

export const StyledCardMain = styled.div`
  background: #fafafa;
  box-shadow: 0.5rem 0.5rem 0.8rem 0.4rem rgba(0, 0, 0, 0.0991282);
  border-radius: 0.34rem;
  padding: 2.6rem 2.6rem 2.6rem 2.6rem;
  transform: scale(1.3);
`

export const StyledCardTitle = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1rem 0rem 1.6rem 0rem;
`
export const StyledCardDescription = styled.p`
  font-size: 1.4rem;
  color: #9ea0ab;
  text-align: left;
`
