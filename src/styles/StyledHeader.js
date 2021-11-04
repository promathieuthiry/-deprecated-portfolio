import * as React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem;
  display: flex;
  align-items: center;
  position: relative;
  @media screen and (max-width: 600px) {
    padding: 1rem 0rem;
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
    gap: 4rem;
    list-style-type: none;

    @media screen and (max-width: 600px) {
      display: none;
    }
    li {
      font-size: 2rem;
      font-family: "Raleway", sans-serif;
      font-weight: bold;
      display: inline-block;
      position: relative;
      color: rgba(250, 250, 250, 1);
      transition: transform 0.25s ease-out;

      &::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background: ${props => props.theme.gradient};
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
      }
      &:hover {
        color: rgba(250, 250, 250, 0.8);

        &::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }
      }
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
