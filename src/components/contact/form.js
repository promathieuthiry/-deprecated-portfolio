import React, { useState } from "react"

import { Button } from "../../styles/StyledButton"
import styled from "styled-components"

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

const Label = styled.label`
  font-size: 1.4rem;
  color: #9ea0ab;
  display: block;
`

const Input = styled.input`
  height: 4rem;
  background-color: #14151c;
  border-radius: 0.4rem;
  padding: 1.2rem 2rem;
  margin: 0.8rem 0;
  display: inline-block;
  border: 0.1rem solid #07070a;
  color: #b9b9ba;
  width: 25rem;

  @media (max-width: 1150px) {
    width: 100%;
  }
`

const TextArea = styled.textarea`
  height: 8rem;
  background-color: #14151c;
  border-radius: 0.4rem;
  padding: 1.2rem 2rem;
  margin: 0.8rem 0;
  display: inline-block;
  border: 0.1rem solid #07070a;
  color: #b9b9ba;
  width: 100%;
`

const SecondRow = styled.div`
  margin-top: 1.5rem;
  width: 100%;
`

const ThirdRow = styled.div`
  margin: 1.5rem 0rem;
  width: 100%;

  @media (max-width: 720px) {
    display: flex;
    justify-content: center;
  }
`

const Title = styled.h3`
  font-family: "Raleway", sans-serif;
  font-size: 3.5rem;
  padding-bottom: 1.5rem;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding-bottom: 0.5rem;
  }
`

const Description = styled.p`
  font-size: 2rem;
  padding: 0rem 0rem 4rem 0rem;
  color: #9ea0ab;

  @media (max-width: 600px) {
    font-size: 1.4rem;
    padding: 0rem 0rem 3rem 0rem;
  }
`

export default function Form() {
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    message: "",
  })

  function handleChange(event) {
    const { name, value } = event.target
    setInputData(prevInputData => ({ ...prevInputData, [name]: value }))
  }

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  function handleSubmit(event) {
    event.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        ...inputData,
      }),
    })
      .then(() => alert("Success"))
      .catch(error => alert(error))
  }

  return (
    <form
      name="contact"
      method="post"
      //   action="/thanks/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
      onSubmit={handleSubmit}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type="hidden" name="form-name" value="contact" />
      {/* To trick bot */}
      <p hidden>
        <label>
          Don’t fill this out:{" "}
          <input name="bot-field" onChange={handleChange} />
        </label>
      </p>

      <Title>Get in touch</Title>
      <Description>Interested in working together?</Description>
      <FirstRow>
        <Label>
          Your name
          <br />
          <Input
            type="text"
            name="name"
            onChange={handleChange}
            value={inputData.name}
            placeholder="John Doe"
            required
          />
        </Label>
        <Label>
          Your email
          <br />
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            value={inputData.email}
            placeholder="jdoe@gmail.com"
          />
        </Label>
      </FirstRow>
      <SecondRow>
        <Label>
          Message
          <br />
          <TextArea
            name="message"
            onChange={handleChange}
            value={inputData.message}
            placeholder="describe your message"
          />
        </Label>
      </SecondRow>
      <ThirdRow>
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit" padding="1.2rem 3rem">
          Send
        </Button>
      </ThirdRow>
    </form>
  )
}
