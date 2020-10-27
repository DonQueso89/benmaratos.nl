import React from "react"
import storyStyles from "../styles/stories.module.css"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Story = ({ data }) => {
  const payload = data.datoCmsStory
  return (
    <Layout>
      <SEO title={payload.title} />
      <div className={storyStyles.story}>
        <h3>{payload.title}</h3>
        <div dangerouslySetInnerHTML={{ __html: payload.bodyNode.childMarkdownRemark.html }} />
      </div>
    </Layout>
  )
}

export default Story

export const query = graphql`
  query($slug: String!) {
    datoCmsStory(slug: { eq: $slug }) {
      bodyNode {
        childMarkdownRemark {
          html
        }
      }
      title
      date
    }
  }
`
