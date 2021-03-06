import React from "react"
import poemStyles from "../styles/poems.module.css"
//import { graphql } from "gatsby"
//import Layout from "./layout"
import SEO from "./seo"

const Poem = ({ payload }) => {
  return (
    <div>
      <SEO title={payload.title} />
      <div className={poemStyles.poem}>
        <h3>{payload.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: payload.bodyNode.childMarkdownRemark.html }} />
      </div>
    </div>
  )
}

export default Poem

/*
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
*/
