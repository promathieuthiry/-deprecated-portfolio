import React from "react"
import Typewriter from "typewriter-effect"
import { gradient_text } from "../../styles/Global.module.css"

export default function TypeWriter() {
  return (
    <div className={gradient_text}>
      <Typewriter
        options={{
          strings: ["Web App", "Mobile App", "PWA", "Website"],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  )
}
