import styled from "styled-components"

export const Button = styled.button`
  background: linear-gradient(90deg, #86d3ff -49.34%, #e386fd 100%);
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
  &:active {
  }

  @media only screen and (max-width: 374px) {
    font-size: 1.2rem;
    /* padding: 1rem 2rem; */
  }
`
