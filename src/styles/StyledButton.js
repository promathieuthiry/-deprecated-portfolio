import styled from "styled-components"

export const Button = styled.button`
  background: ${props => props.theme.gradient};
  box-shadow: 0.2rem 0.3rem 0.6rem rgba(0, 0, 0, 0.15925);
  border-radius: 2.8rem;
  color: #1c3246;
  border: none;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.9rem;
  padding: ${props => (props.padding ? props.padding : "1.9rem 6rem")};
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }

  @media (max-width: 374px) {
    font-size: 1.2rem;
  }
`
export const ButtonLink = styled.button`
  background: ${props => props.gradient && props.theme.gradient};
  border-radius: 2.8rem;
  color: #1c3246;
  border: none;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  font-size: 1.8rem;
  line-height: 1.9rem;
  padding: 1.2rem 3rem;
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
  }

  @media (max-width: 450px) {
    padding: 1rem 1.5rem;
  }
`
