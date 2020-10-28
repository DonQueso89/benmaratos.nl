import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Poem from "../components/poem"

const Poems = ({ data, location }) => {
  const nodesBySlug = data.allDatoCmsPoem.edges.reduce(
    (acc, { node }) => Object.assign(acc, { [node.slug]: node }),
    {}
  )
  const values = Object.values(nodesBySlug)
  const poem =
    nodesBySlug[decodeURI(location.hash.replace("#", ""))] || values[0]

  const poemIdx = values.findIndex(x => x.slug === poem.slug)
  const next = values[poemIdx + 1]
  const prev = values[poemIdx - 1]

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.keyCode === 39 && next) {
        navigate(`/poemsCarousel/#${next.slug}`)
      }
      if (e.keyCode === 37 && prev) {
        navigate(`/poemsCarousel/#${prev.slug}`)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [next, prev])

  return (
    <Layout>
      <SEO title="Gedichten" />
      {prev && (
        <Link to={`/poemsCarousel/#${prev.slug}`}>
          <h1 style={{ position: "fixed", left: 8, bottom: "50%" }}>&#60;</h1>
        </Link>
      )}
      <Poem payload={poem} />
      {next && (
        <Link to={`/poemsCarousel/#${next.slug}`}>
          <h1 style={{ position: "fixed", right: 8, bottom: "50%" }}>&#62;</h1>
        </Link>
      )}
    </Layout>
  )
}

export const query = graphql`
  query {
    allDatoCmsPoem {
      edges {
        node {
          bodyNode {
            childMarkdownRemark {
              html
            }
          }
          title
          date
          slug
        }
      }
    }
  }
`

export default Poems
