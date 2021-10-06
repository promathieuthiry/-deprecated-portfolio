import styled from "styled-components"

export const StyledWrapper = styled.section`
  width: 100%;
  padding: 0rem 0rem 4.5rem 0rem;
`

export const StyledSkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
  border-top: 0.1rem solid #9ea0ab;
  border-left: 0.1rem solid #9ea0ab;
`

export const StyleSkillsIcon = styled.div`
  border-bottom: 0.1rem solid #9ea0ab;
  border-right: 0.1rem solid #9ea0ab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  min-height: 13rem;

  &:hover {
    svg {
      color: ${props => props.originalColor};
    }
    p {
      color: ${props => props.originalColor};
    }
  }
  svg {
    width: 5rem;
    height: 5rem;
    color: #9ea0ab;
    transition: all 0.5s ease-out;
  }

  p {
    color: #9ea0ab;
    font-size: 1.2rem;
    padding-top: 1rem;
    font-family: "Raleway", sans-serif;
    font-weight: bold;
    transition: all 0.5s ease-out;
  }
`

export const StyledCheckboxWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;

  div {
    width: 5.6rem;
    height: 3.2rem;
    background: linear-gradient(90deg, #86d3ff -49.34%, #e386fd 100%);
    border-radius: 1.6rem;
    position: relative;
    transition: all 0.5s ease-out;
    margin: 0rem 2.5rem;
    cursor: pointer;
    &:hover {
      opacity: 0.9;
    }
  }

  span {
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
    position: absolute;
    top: 0.4rem;
    left: 0.4rem;
    background-color: #fff;
    border-radius: 50%;
    transition: all 0.5s ease-out;
    transform: ${props =>
      props.isToolsSelected ? "translateX(2.4rem)" : "translateX(0rem)"};
  }
`

export const StyledLabel1 = styled.p`
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: ${props => (props.isToolsSelected ? "#9ea0ab" : "#FFF")};
  opacity: ${props => (props.isToolsSelected ? "0.5" : "1")};
  transform: ${props => (props.isToolsSelected ? "scale(0.9)" : "scale(1)")};
  transition: all 0.5s ease-out;
  cursor: pointer;
`

export const StyledLabel2 = styled.p`
  font-size: 3rem;
  transform: ${props => (props.isToolsSelected ? "scale(1)" : "scale(0.9)")};
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: ${props => (props.isToolsSelected ? "#FFF" : "#9ea0ab")};
  opacity: ${props => (props.isToolsSelected ? "1" : "0.5")};
  transition: all 0.5s ease-out;
  cursor: pointer;
`
