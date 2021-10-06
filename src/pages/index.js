import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Seo from "../components/seo"
import Skills from "../components/skills/skills"
import Services from "../components/services/services"
import Portfolio from "../components/portfolio/portfolio"
import Contact from "../components/contact/contact"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <Skills />
    <Portfolio />
    <Contact />
  </Layout>
)

export default IndexPage
