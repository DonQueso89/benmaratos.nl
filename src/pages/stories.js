import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Stories = ({ data }) => {
  return <Layout>
    <SEO title="Verhalen" />
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
    ))}
  </Layout>
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/stories/*.md" } }) {
      edges {
        node {
          frontmatter {
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Stories
