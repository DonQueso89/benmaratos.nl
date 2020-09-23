import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import SEO from "../components/seo"


const Stories = ({ data }) => {
    return <Layout >
    <SEO title="Verhalen" />

    </Layout>
}

export const query = graphql`
    query storyTitles {
    allMarkdownRemark(filter: {fileAbsolutePath: {glob: "**/stories/*.md"}}) {
        edges {
        node {
            frontmatter {
            title
            }
        }
        }
    }
    }
`
export default Stories;