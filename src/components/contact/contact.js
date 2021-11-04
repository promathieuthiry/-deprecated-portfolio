import React from "react"

import {
  wrapper,
  title,
  description,
  cover_wrapper,
} from "./contact.module.css"
import MailCover from "./mailCover"
import Form from "./form"

const Contact = () => {
  return (
    <div className={wrapper} id="contact_section">
      <div className={cover_wrapper}>
        <MailCover />
      </div>
      <div>
        <h3 className={title}>Get in touch</h3>
        <p className={description}>Interested in working together?</p>
        <Form />
      </div>
    </div>
  )
}

export default Contact
