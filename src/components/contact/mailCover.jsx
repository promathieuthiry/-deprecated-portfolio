import React, { useEffect } from "react"

import lottie from "lottie-web"
import MailLogo from "../../images/lottie/mail.json"
import styled from "styled-components"

const Cover = styled.div`
  width: 35rem;
  height: 35rem;
  filter: brightness(80%);

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }

  /* @media (max-width: 380px) {
    width: 20rem;
    height: 20rem;
  } */
`

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

  return <Cover id="mail-cover" />
}

export default MailCover
