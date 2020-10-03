import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Bio = ({ data }) => (
  <Layout>
    <SEO title="Bio" />
    <p style={{maxWidth: "50%"}}>
      <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.nodes[0].html}}/>
    </p>
  </Layout>
)

export default Bio

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/data/metadata/bio.md"}}) {
      nodes {
        html
      }
    }
  }`
