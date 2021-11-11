import React from "react"
import styled from "styled-components"
import Blob from "../images/blob.inline.svg"
import { CustomIcon } from "../styles/StyledIcon"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  width: 100%;
  border-top: ${props =>
    props.notdisplayBorderTop ? "" : "0.1rem solid #9ea0ab"};
  padding-top: 4rem;
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    color: #9ea0ab;
    font-size: 2.5rem;
    padding: 2rem;
    cursor: pointer;
  }
  a {
    transition: all 0.3s ease;
  }
  a:hover {
    color: #fff;
    svg {
      transform: scale(1.1);
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  }
`

export const EmailWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;

  @media only screen and (max-width: 675px) {
    justify-self: start;
    padding-left: 3rem;
    margin-top: 2rem;
  }

  /* svg {
    position: absolute;
    top: -3.2rem;
    right: 25rem;
    @media only screen and (max-width: 675px) {
      top: -4.8rem;
      right: 18rem;
    }
  } */
`

const StyledBlob = styled(Blob)`
  position: absolute;
  top: -3.2rem;
  right: 25rem;
  @media (max-width: 675px) {
    top: -4.8rem;
    right: 18rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
    right: -7rem;
  }
`

export const IconWrapper = styled.span`
  display: block;
  z-index: 2;
  font-size: 2.5rem;
`

export const Link = styled.a.attrs(props => ({
  target: "_blank",
  href: props.href,
}))`
  font-family: "Raleway", sans-serif;
  font-size: 2rem;
  font-weight: bold;
  padding-left: 5rem;

  @media (max-width: 675px) {
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    display: none;
  }
`

export const Email = () => {
  return (
    <EmailWrapper>
      <StyledBlob />
      <IconWrapper>
        <CustomIcon icon={faEnvelope} href="mailto:promathieuthiry@gmail.com" />
      </IconWrapper>
      <Link href="mailto:promathieuthiry@gmail.com">
        promathieuthiry@gmail.com
      </Link>
    </EmailWrapper>
  )
}
