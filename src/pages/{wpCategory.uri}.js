import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    posts {
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
            mediaItemId
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
`

export default ComponentName
