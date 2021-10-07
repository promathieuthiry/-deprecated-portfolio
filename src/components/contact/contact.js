import React, { useState } from "react"
import {
  wrapper,
  title,
  description,
  form_container,
} from "./contact.module.css"

const Contact = () => {
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
    <div className={wrapper}>
      <h3 className={title}>Get in touch</h3>
      <p className={description}>Interested in working together?</p>
      <div className={form_container}>
        <form
          name="contact"
          method="post"
          //   action="/thanks/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div hidden data-netlify-recaptcha="true" />
          {/* <p hidden>
            <label>
              Don’t fill this out:{" "}
              <input name="bot-field" onChange={handleChange} />
            </label>
          </p> */}
          <p>
            <label>
              Your name
              <br />
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={inputData.name}
                placeholder="John Doe"
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={inputData.email}
                placeholder="jdoe@gmail.com"
              />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea
                name="message"
                onChange={handleChange}
                value={inputData.message}
                placeholder="describe your message"
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Contact
