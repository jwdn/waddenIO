module.exports = {
  siteMetadata: {
    title: `Jon Wadden`,
    description: `UI Designer and Web Developer.`,
    author: `Jon Wadden`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jon Wadden`,
        short_name: `JW`,
        start_url: `/`,
        background_color: `#000033`,
        theme_color: `#000033`,
        display: `standalone`,
        icon: `${__dirname}/static/images/favicon.png`,
      },
    },
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
