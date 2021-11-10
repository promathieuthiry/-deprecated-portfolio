import React from "react"

import MailCover from "./mailCover"
import Form from "./form"

import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  width: 100%;
  background: #232631;
  box-shadow: 0.5rem 0.5rem 0.8rem 0.4rem rgba(0, 0, 0, 0.0991282);
  border-radius: 0.34rem;
  padding: 4rem 4rem 4rem 0rem;
  margin-top: 5rem;

  @media (max-width: 720px) {
    padding: 0rem 2rem;
    overflow: hidden;
  }
`

const CoverWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contact = () => {
  return (
    <Wrapper id="contact_section">
      <CoverWrapper>
        <MailCover />
      </CoverWrapper>
      <Form />
    </Wrapper>
  )
}

export default Contact
