module.exports = {
  siteMetadata: {
    title: `Ben Maratos`,
    description: ``,
    author: `DonQueso89`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/config/typography`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
