import React, { useState } from "react"
import { ReactJs } from "@icons-pack/react-simple-icons"
import { Redux } from "@icons-pack/react-simple-icons"
import { Gatsby } from "@icons-pack/react-simple-icons"
import { Styledcomponents } from "@icons-pack/react-simple-icons"
import { Nodedotjs } from "@icons-pack/react-simple-icons"
import { Typescript } from "@icons-pack/react-simple-icons"
import { Javascript } from "@icons-pack/react-simple-icons"
import { Figma } from "@icons-pack/react-simple-icons"
import { Wordpress } from "@icons-pack/react-simple-icons"
import { Ubuntu } from "@icons-pack/react-simple-icons"
import { Materialui } from "@icons-pack/react-simple-icons"
import { Git } from "@icons-pack/react-simple-icons"
import { Graphql } from "@icons-pack/react-simple-icons"
import { Chartdotjs } from "@icons-pack/react-simple-icons"
import { Expo } from "@icons-pack/react-simple-icons"
import { Contentful } from "@icons-pack/react-simple-icons"
import { CssThree } from "@icons-pack/react-simple-icons"
import { Sass } from "@icons-pack/react-simple-icons"
import { Eslint } from "@icons-pack/react-simple-icons"
import { Prettier } from "@icons-pack/react-simple-icons"
import { Visualstudiocode } from "@icons-pack/react-simple-icons"
import { Express } from "@icons-pack/react-simple-icons"
import { Html5 } from "@icons-pack/react-simple-icons"
import { Hyper } from "@icons-pack/react-simple-icons"
import { Jamstack } from "@icons-pack/react-simple-icons"
import { Mapbox } from "@icons-pack/react-simple-icons"
import { Mysql } from "@icons-pack/react-simple-icons"
import { Netlify } from "@icons-pack/react-simple-icons"
import { Postman } from "@icons-pack/react-simple-icons"
import { WebThreeDotjs } from "@icons-pack/react-simple-icons"

import {
  StyledWrapper,
  StyledSkillsGrid,
  StyleSkillsIcon,
  StyledCheckboxWrapper,
  StyledLabel1,
  StyledLabel2,
} from "../../styles/StyledSkills"

function Skills() {
  const [isToolsSelected, setToolsSelected] = useState(false)

  function handleCheckbox() {
    setToolsSelected(!isToolsSelected)
  }

  function handleTechnicalSkillsBox() {
    isToolsSelected && setToolsSelected(false)
  }

  function handleToolsBox() {
    !isToolsSelected && setToolsSelected(true)
  }
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper isToolsSelected={isToolsSelected}>
        <StyledLabel1
          onClick={handleTechnicalSkillsBox}
          isToolsSelected={isToolsSelected}
        >
          Technical Skills
        </StyledLabel1>
        <div onClick={handleCheckbox}>
          <span></span>
        </div>
        <StyledLabel2
          onClick={handleToolsBox}
          isToolsSelected={isToolsSelected}
        >
          Tools
        </StyledLabel2>
      </StyledCheckboxWrapper>

      <StyledSkillsGrid>
        {!isToolsSelected ? (
          <>
            <StyleSkillsIcon originalColor="#61DAFB">
              <ReactJs />
              <p>React</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#764ABC">
              <Redux />
              <p>Redux</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#663399">
              <Gatsby />
              <p>Gatsby</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#F7DF1E">
              <Javascript />
              <p>Javascript</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#3178C6">
              <Typescript />
              <p>Typescript</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#E10098">
              <Graphql />
              <p>Graphql</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#E34F26">
              <Html5 />
              <p>Html5</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#1572B6">
              <CssThree />
              <p>CSS3</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#CC6699">
              <Sass />
              <p>Sass</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#DB7093">
              <Styledcomponents />
              <p>Styled Components</p>
            </StyleSkillsIcon>

            <StyleSkillsIcon originalColor="#F0047F">
              <Jamstack />
              <p>Jamstack</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#4265FB">
              <Mapbox />
              <p>Mapbox</p>
            </StyleSkillsIcon>

            <StyleSkillsIcon originalColor="#339933">
              <Nodedotjs />
              <p>Node.js</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#363636">
              <Express />
              <p>Express</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#4479A1">
              <Mysql />
              <p>Mysql</p>
            </StyleSkillsIcon>
            {/* <StyleSkillsIcon originalColor="#F16822">
          <WebThreeDotjs />
          <p>Web3.js</p>
        </StyleSkillsIcon> */}
          </>
        ) : (
          <>
            <StyleSkillsIcon originalColor="#E95420">
              <Ubuntu />
              <p>Ubuntu</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#F05032">
              <Git />
              <p>Git</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#007ACC">
              <Visualstudiocode />
              <p>VScode</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#F344B1">
              <Hyper />
              <p>Hyper</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#1770B0">
              <Expo />
              <p>Expo</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#0081CB">
              <Materialui />
              <p>Materialui</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#FF6C37">
              <Postman />
              <p>Postman</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#4B32C3">
              <Eslint />
              <p>Eslint</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#F7B93E">
              <Prettier />
              <p>Prettier</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#F24E1E">
              <Figma />
              <p>Figma</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#21759B">
              <Wordpress />
              <p>Wordpress</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#FF6384">
              <Chartdotjs />
              <p>Chart.js</p>
            </StyleSkillsIcon>
            <StyleSkillsIcon originalColor="#2478CC">
              <Contentful />
              <p>Contentful</p>
            </StyleSkillsIcon>

            <StyleSkillsIcon originalColor="#00C7B7">
              <Netlify />
              <p>Netlify</p>
            </StyleSkillsIcon>
          </>
        )}
      </StyledSkillsGrid>
    </StyledWrapper>
  )
}

export default Skills
