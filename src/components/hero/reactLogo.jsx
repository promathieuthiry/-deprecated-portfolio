import React, { useEffect } from "react"

import lottie from "lottie-web"
import reactLogo from "../../images/lottie/react-logo.json"

function ReactLogo() {
  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
      renderer: "svg", // "canvas", "html"
      loop: false, // boolean
      autoplay: true, // boolean
    })
    anim.setSpeed(1.5)
    return () => anim.destroy()
  }, [])

  return <div style={{ width: 300 }} id="react-logo" />
}

export default ReactLogo
