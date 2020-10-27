import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Stories = ({ data }) => {
  return (
    <Layout>
      <SEO title="Verhalen" />
      {data.allDatoCmsStory.edges.map(({ node }) => (
        <Link to={node.slug}>{node.title}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsStory(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export default Stories
