import React from "react"
import Typewriter from "typewriter-effect"

export default function TypeWriter() {
  return (
    <div className="gradient_text">
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
