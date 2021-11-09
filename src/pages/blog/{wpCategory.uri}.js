import React from "react"
import { graphql } from "gatsby"
export default function Component(props) {
  return props.data.fields.sku + props.params.name
}
// This is the page query that connects the data to the actual component. Here you can query for any and all fields
// you need access to within your code. Again, since Gatsby always queries for `id` in the collection, you can use that
// to connect to this GraphQL query.
// export const query = graphql`
//   query($id: String) {
//     product(id: { eq: $id }) {
//       fields {
//         sku
//       }
//     }
//   }
// `


export const querySpektakle = graphql`query MyQuery {
  allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Spektakle"}}}}}) {
    edges {
      node {
        id
        title
        uri
      }
    }
  }
}
`

// export const querySelect = graphql`
//   query($slug: String!) {
//    allWpPost(
//     filter: { categories: { nodes: { elemMatch: { slug: { eq: $slug } } } } }
//     sort: { fields: date, order: DESC }
//    ) {
//     edges {
//      node {
//       title
//       slug
//       date(formatString: "MMMM DD, YYYY")
//       content
//      }
//     }
//    }
//   }
// `