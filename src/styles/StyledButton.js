import styled, { keyframes } from "styled-components"

const moveInBottomAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`

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
  padding: 1.9rem 6rem;
  cursor: pointer;
  /* transition: all 0.2s;
  animation: ${moveInBottomAnimation} 0.5s ease-out 0.75s;
  animation-fill-mode: backwards;
   */

  &:hover {
    transform: translateY(-3px);
    /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); */
  }
  &:active {
  }
`
