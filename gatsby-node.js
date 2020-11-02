/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allDatoCmsStory {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allDatoCmsStory.edges.forEach(({ node }) => {
    createPage({
      path: `/stories/${node.slug}/`,
      component: path.resolve(`./src/templates/story.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}
