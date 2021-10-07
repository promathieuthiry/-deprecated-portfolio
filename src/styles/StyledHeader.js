import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;

  ul {
    list-style-type: none;
  }

  img {
    width: 4rem;
    height: auto;
    z-index: 2;
  }

  p {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 2rem;
    flex: 1;
  }

  ul {
    display: flex;
    gap: 2rem;

    li {
      font-size: 1.5rem;
    }
    div {
      cursor: pointer;
    }
  }
`
export const StyledHeaderLink = styled(props => <Link {...props} />)`
  display: flex;
  align-items: center;
  flex: 1;
`
