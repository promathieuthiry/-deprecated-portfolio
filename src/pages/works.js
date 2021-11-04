import * as React from "react"
import { graphql } from "gatsby"
import Portfolio from "../components/portfolio/portfolio"
import Layout from "../components/layout/layout"
import Seo from "../components/seo"

const WorksPage = ({ data }) => (
  <Layout>
    <Seo title="Works" />
    <Portfolio img={data} featured={false} />
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

export default WorksPage
