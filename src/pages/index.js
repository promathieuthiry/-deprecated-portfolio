import * as React from "react"
import Layout from "../components/layout/layout"
import Hero from "../components/hero/hero"
import Seo from "../components/seo"
import Skills from "../components/skills/skills"
import Services from "../components/services/services"
import Portfolio from "../components/portfolio/portfolio"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
    <Portfolio img={data} featured={true} />
    <Skills />
  </Layout>
)

export const portfolioQuery = graphql`
  {
    allFile(filter: { relativeDirectory: { eq: "preview" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
          name
          ext
        }
      }
    }
  }
`

export default IndexPage
