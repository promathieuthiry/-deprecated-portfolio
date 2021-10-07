import React, { useState } from "react"

import {
  wrapper,
  title,
  description,
  form_container,
  cover_wrapper,
  cover,
} from "./contact.module.css"
import MailCover from "./mailCover"
import Form from "./form"

const Contact = () => {
  return (
    <div className={wrapper} id="contact_section">
      <div className={cover_wrapper}>
        <MailCover />
      </div>
      <div className={form_container}>
        <h3 className={title}>Get in touch</h3>
        <p className={description}>Interested in working together?</p>
        <Form />
      </div>
    </div>
  )
}

export default Contact
