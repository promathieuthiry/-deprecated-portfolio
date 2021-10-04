import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Seo from "../components/seo"
import Skills from "../components/skills/skills"
import Services from "../components/services/services"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <Skills />
  </Layout>
)

export default IndexPage
