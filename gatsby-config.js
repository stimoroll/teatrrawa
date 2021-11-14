// require('dotenv').config();
let env = process.env.NODE_ENV || 'development';
let baseUrl = process.env.BASE_URL || 'http://localhost:8000'
let protocol = process.env.PROTOCOL || 'http'
let basegql = process.env.BASE_GQL || 'http://cakeit.local/graphql'
let base = process.env.BASE || 'https://ec2-3-68-233-90.eu-central-1.compute.amazonaws.com' //'http://cakeit.local'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = process.env.NODE_TLS_REJECT_UNAUTHORIZED || 1
// require("dotenv").config({
  // path: `.env.${process.env.NODE_ENV}`,
// })
/*
const dotenv = require('dotenv');
const envConfig = 
dotenv.parse(fs.readFileSync(`.env.${process.env.NODE_ENV}`));
for (var k in envConfig) {
  process.env[k] = envConfig[k];
}*/
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"]=1
process.env["CLOUDINARY_CLOUD_NAME"]='teatrrawa'
process.env["CLOUDINARY_API_KEY"]='683758242113594'
process.env["CLOUDINARY_API_SECRET"]='0_TXlU3wvOruUNdEOKbTW76A4gg'
process.env["CLOUDINARY_URL"]='cloudinary://683758242113594:0_TXlU3wvOruUNdEOKbTW76A4gg@teatrrawa'

module.exports = {
  pathPrefix: "/teatrrawa", //put here github
  siteMetadata: {
    title: `Teatr Rawa`,
    description: `grupa teatralna`,
    author: `@me`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: baseUrl,
    //   },
    // },
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
        verbose: true,
        // baseUrl: `https://trawa1.netlify.app/`,
        // baseUrl: 'http://localhost:8000',
        // baseUrl: baseUrl,
        // ulr: `https://trawa1.netlify.app/`
        // url: `http://cakeit.local/graphql`,
        // url: `${base}/graphql`,
        url: `${base}/graphql`,
        // url: `https://ec2-3-68-233-90.eu-central-1.compute.amazonaws.com/graphql`,
        // url: `https://ec2-3-121-218-170.eu-central-1.compute.amazonaws.com/graphql`,
        useACF: true,
        protocol: protocol,
        searchAndReplace: [
          {
            search: `${base}`,
            replace: baseUrl, //"https://trawa1.netlify.app",
          },
        ],
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
    // `gatsby-theme-wordpress-gutenberg`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve:`gatsby-source-cloudinary`,
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        resourceType: `all`,
        secure: true,
        // type: `all`,
        prefix: `/`
      }
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        // uploadFolder: 'gatsby-cloudinary',
        production: {
          allow404Images: true
        }
      },
    },
  ],
}
