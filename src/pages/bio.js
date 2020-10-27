import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Bio = ({ data }) => (
  <Layout>
    <SEO title="Bio" />
    <p style={{ maxWidth: "50%" }}>
      <div
        dangerouslySetInnerHTML={{
          __html: data.datoCmsBio.bodyNode.childMarkdownRemark.html,
        }}
      />
    </p>
  </Layout>
)

export default Bio

export const query = graphql`
  query {
    datoCmsBio {
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
