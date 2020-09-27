/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */


const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `data` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    //if (node.fields && node.fields.slug.includes("poems")) {
      //createPage({
        //path: node.fields.slug,
        //component: path.resolve(`./src/templates/poem.js`),
        //context: {
          //// Data passed to context is available
          //// in page queries as GraphQL variables.
          //slug: node.fields.slug,
        //},
      //})
    //}
    if (node.fields && node.fields.slug.includes("stories")) {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/story.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    }
  })
}