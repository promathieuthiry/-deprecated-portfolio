import React, { useState } from "react"
import {
  form_wrapper,
  first_row,
  label,
  input,
  textarea,
  second_row,
  third_row,
  nameContainer,
  emailContainer,
} from "./form.module.css"

import { Button } from "../../styles/StyledButton"

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
      className={form_wrapper}
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
      <div className={first_row}>
        <div className={nameContainer}>
          <label className={label}>
            Your name
            <br />
            <input
              type="text"
              name="name"
              className={input}
              onChange={handleChange}
              value={inputData.name}
              placeholder="John Doe"
              required
            />
          </label>
        </div>
        <div className={emailContainer}>
          <label className={label}>
            Your email
            <br />
            <input
              type="email"
              name="email"
              className={input}
              onChange={handleChange}
              value={inputData.email}
              placeholder="jdoe@gmail.com"
            />
          </label>
        </div>
      </div>
      <div className={second_row}>
        <label className={label}>
          Message
          <br />
          <textarea
            name="message"
            className={textarea}
            onChange={handleChange}
            value={inputData.message}
            placeholder="describe your message"
          />
        </label>
      </div>
      <div className={third_row}>
        <div data-netlify-recaptcha="true"></div>
        <Button type="submit" padding="1.2rem 3rem">
          Send
        </Button>
      </div>
    </form>
  )
}
