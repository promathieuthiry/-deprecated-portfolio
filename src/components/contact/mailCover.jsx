import React, { useEffect } from "react"

import lottie from "lottie-web"
import MailLogo from "../../images/lottie/mail.json"
import { cover } from "./contact.module.css"

function MailCover() {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#mail-cover"),
      animationData: MailLogo,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
    })
    return () => anim.destroy()
  }, [])

  return <div className={cover} id="mail-cover" />
}

export default MailCover
