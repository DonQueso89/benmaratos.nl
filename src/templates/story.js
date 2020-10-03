import React from "react"
import storyStyles from "../styles/stories.module.css"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = ({ data }) => {
  const payload = data.markdownRemark
  return (
    <Layout>
      <SEO title={payload.frontmatter.title} />
      <div className={storyStyles.story}>
        <h3>{payload.frontmatter.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: payload.html }} />
      </div>
    </Layout>
  )
}

export default Story

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
