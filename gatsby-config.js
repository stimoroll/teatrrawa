// require('dotenv').config();

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
})

module.exports = {
  siteMetadata: {
    title: `Cake It!`,
    description: `This is Cake It!`,
    author: `@me`,
  },
  plugins: [
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
    {
      resolve: `gatsby-source-wordpress`,
      // resolve: `gatsby-source-wordpress-experimental`,
      options: {
        // url: `http://cakeit.local/graphql`,
        url: `https://ec2-3-121-218-170.eu-central-1.compute.amazonaws.com/graphql`,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Teko\:200, 400, 500, 600, 700`],
        display: `swap`,
      },
    },
    `gatsby-theme-wordpress-gutenberg`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        // cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        // apiKey: process.env.CLOUDINARY_API_KEY,
        // apiSecret: process.env.CLOUDINARY_API_SECRET,
        cloudName: 'teatrrawa',
        apiKey: '683758242113594',
        apiSecret: '0_TXlU3wvOruUNdEOKbTW76A4gg',    
        resourceType: `image`,
        type: `type Value`,
        prefix: `abc-xyz/`
      }
    }
  ],
}
