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
    padding: 2.5rem 0rem;
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

const IconMobileAwesome = styled.span`
  display: none;
  opacity: 0;

  @media (max-width: 600px) {
    display: block;
    opacity: 1;
    cursor: pointer;
  }
`
export const IconMobile = ({ children }) => {
  return <IconMobileAwesome>{children}</IconMobileAwesome>
}

export const Barswrapper = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: block;
    background-color: #0d0e10;
    height: calc(100vh - 6.5rem);
    width: 100%;
    z-index: 10;
    position: absolute;
    top: 6.5rem;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all 0.5s ease-out;
  }
`

export const Bars = styled.div`
  display: none;

  @media (max-width: 600px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10rem;
    color: #9ea0ab;
    font-family: "Raleway", sans-serif;
    font-size: 4rem;
    text-align: center;
    border-bottom: 0.1rem solid #9ea0ab;
    transition: all 0.5s ease-out;
  }

  &:hover {
    color: #fff;
  }

  &:nth-child(1) {
    border-top: 0.1rem solid #9ea0ab;
  }
`
