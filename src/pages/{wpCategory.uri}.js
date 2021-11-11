import React from "react"
import { graphql } from "gatsby"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const query = graphql`
  {
    allWpPost {
      edges {
        node {
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
  }
`

export default ComponentName
