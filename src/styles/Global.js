import { createGlobalStyle } from "styled-components"
import styled from "styled-components"

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
*:focus {
    outline: none;
}


html {
  box-sizing: border-box;
  font-size: 62.5%; /*  10px/16px = 62.5% -> 1rem = 10px */
}

body {
  font-family: "Open Sans";
  background-color: #0d0e10;
  color: #fff;
  width: 100%;
  height: 100vh;
}
a {
  text-decoration: none;
  color: inherit;
}
`

export const StyledWrapper = styled.div`
  max-width: 144rem;
  margin: 0 auto;
  padding: 2rem 4rem;
  @media only screen and (max-width: 675px) {
    padding: 0.5rem 4rem;
  }
`

export default GlobalStyles
