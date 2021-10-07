import styled from "styled-components"

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  width: 100%;
  border-top: 0.1rem solid #9ea0ab;
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
`

export const StyledEmail = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;

  span {
    display: block;
    z-index: 2;
    font-size: 2.5rem;
  }
  a {
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    padding-left: 5rem;
  }
`

export const StyledBlob = styled.svg`
  position: absolute;
  top: -3.2rem;
  right: 9.9rem;
`
