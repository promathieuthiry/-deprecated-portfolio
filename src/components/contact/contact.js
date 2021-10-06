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
    //   .then(() => navigate("/thank-you/"))
    //   .catch(error => alert(error))
  }

  return (
    <div className={wrapper}>
      <h3 className={title}>Get in touch</h3>
      <p className={description}>Interested in working together?</p>
      <div className={form_container}>
        <form
          name="contact v2"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact v2" />

          <div hidden>
            <input name="bot-field" />
          </div>

          <div>
            <label>
              First name
              <br />
              <input type="text" name="first-name" />
            </label>
          </div>

          <div>
            <label>
              Last name
              <br />
              <input type="text" name="last-name" />
            </label>
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <br />
            <input id="email" type="email" name="email" />
          </div>

          <div>
            <label>
              Any Comments?
              <br />
              <textarea name="comments"></textarea>
            </label>
          </div>

          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
