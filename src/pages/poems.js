import React, { useEffect } from "react"
import { Link, graphql, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Poem from "../components/poem"

const Poems = ({ data, location }) => {
  const payload = data.allMarkdownRemark.edges
  const poemIdx = parseInt(location.hash.replace("#", "")) || 0
  const [poem, next, last] = [payload[poemIdx], payload[poemIdx + 1], payload[poemIdx - 1]]

  useEffect(() => {
    console.log("attaching eventhandler to document")
    const handleKeyDown = (e) => {
      if (e.keyCode === 39 && next) {
        navigate(`#${poemIdx + 1}`)
      }
      if (e.keyCode === 37 && last) {
        navigate(`#${poemIdx - 1}`)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [next, last, poemIdx, location.hash])


  return <Layout>
      <SEO title="Gedichten" />
      { last &&  <Link to={`/poems/#${poemIdx - 1}`}><h1 style={{position: "fixed", left: 8, bottom: "50%"}}>&#60;</h1></Link>}
        <Poem payload={poem.node}/>
      { next &&  <Link to={`/poems/#${poemIdx + 1}`}><h1 style={{position: "fixed", right: 8, bottom: "50%"}}>&#62;</h1></Link>}
  </Layout>
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
