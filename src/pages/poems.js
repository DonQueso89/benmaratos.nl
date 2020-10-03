import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Poem from "../components/poem"

const Poems = ({ data, location }) => {
  const nodesBySlug = data.allMarkdownRemark.edges.reduce(
    (acc, { node }) => Object.assign(acc, { [node.fields.slug]: node }),
    {}
  )
  const values = Object.values(nodesBySlug)
  const poem =
    nodesBySlug[decodeURI(location.hash.replace("#", ""))] || values[0]

  const poemIdx = values.findIndex(x => x.fields.slug === poem.fields.slug)
  const next = values[poemIdx + 1]
  const prev = values[poemIdx - 1]

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 39 && next) {
        navigate(`/poems/#${next.fields.slug}`)
      }
      if (e.keyCode === 37 && prev) {
        navigate(`/poems/#${prev.fields.slug}`)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [next, prev])

  return (
    <Layout>
      <SEO title="Gedichten" />
      {prev && (
        <Link to={`/poems/#${prev.fields.slug}`}>
          <h1 style={{ position: "fixed", left: 8, bottom: "50%" }}>&#60;</h1>
        </Link>
      )}
      <Poem payload={poem} />
      {next && (
        <Link to={`/poems/#${next.fields.slug}`}>
          <h1 style={{ position: "fixed", right: 8, bottom: "50%" }}>&#62;</h1>
        </Link>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { glob: "**/poems/*.md" } }) {
      edges {
        node {
          html
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

export default Poems
