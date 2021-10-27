module.exports = {
  siteMetadata: {
    title: `Teatr Rawa`,
    description: `teatr nowych moliwośći`,
    author: `@weibenfalk`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress-experimental`,
      options: {
        url: `http://cakeit.local/graphql`,
        // configure according to plugin's instructions
      },
    },
    // `gatsby-theme-wordpress-gutenberg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // url: `http://cakeit.local/graphql`,
    //   },
    // },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Poppins\:200, 400, 500, 600, 700`],
        display: `swap`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    // {
    //   resolve:`gatsby-source-cloudinary`,
    //   options: {
    //     cloudName: 'teatrrawa',
    //     apiKey: '683758242113594',
    //     apiSecret: '0_TXlU3wvOruUNdEOKbTW76A4gg',
    //     resourceType: [`image`,`video`],
    //     type: `type Value`,
    //     prefix: `gatsby-cloudinary/`
    //   }
    // }
  ],
}
