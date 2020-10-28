import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Poems = ({ data }) => {
  return (
    <Layout>
      <SEO title="Gedichten" />
      {data.allDatoCmsPoem.edges.map(({ node }) => (
        <Link to={`/poemsCarousel/#${node.slug}`}>{node.title}</Link>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsPoem(sort: { fields: date, order: DESC }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`

export default Poems
