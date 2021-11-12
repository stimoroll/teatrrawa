const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
//wpPost -> posts
/*wpPost {
  pageInfo {
    endCursor
    startCursor
  }
  nodes {
    id
    link
    uri
    title
    featuredImageId
    featuredImage {
      node {
        id
        caption
        description
        mediaItemUrl
        srcSet
        sourceUrl
        uri
        title
      }
    }
  }
}*/
  const result = await graphql(`
  {
    allWpPost {
      group(field: categories___nodes___name) {
        fieldValue
        edges {
          node {
            date(formatString: "MMMM DD, YYYY")
            content
            id
            link
            uri
            title
            featuredImageId
            featuredImage {
              node {
                id
                mediaItemUrl
                srcSet
                sourceUrl
                uri
                title
              }
            }
          }
        }
      }
      nodes {
        id
        link
        uri
        title
        featuredImageId
        featuredImage {
          node {
            id
            mediaItemUrl
            srcSet
            sourceUrl
            uri
            title
          }
        }
      }
    }
    allWpCategory {
      edges {
        node {
          id
          name
          count
          uri
          slug
        }
      }
    }
  }
  `)

  console.log(result);

  if (result.errors) {
    reporter.panicOnBuild(`Something went horrible wrong!`, result.errors)
    return
  }

  const { wp, allWpCategory, allWpPost } = result.data
  return result.data;
}


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type WpBlockAttributesObject {
      foobar: String
    }
  `;
  createTypes(typeDefs);
};