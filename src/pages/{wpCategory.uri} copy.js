import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"

import Layout from "../components/Layout/Layout"
import BreadCrumb from "../components/BreadCrumb/BreadCrumb"
import PostSidebar from "../components/PostSidebar/PostSidebar"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
  color: #000;
`

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`
const PostContent = styled.article`
  margin-top: 20px;
`

export default function Component(props) {
  const data = props?.data || {};
  console.log(getImage(data.avatar));
  console.log(getSrc(data.hero));
  console.log(props.data.allWpPost.edges);
  return (
    <Layout>
      <h2>Lista</h2>
    <Wrapper>
      {/* <BreadCrumb
        parent={{
          uri: "/blog/all-posts",
          title: "blog",
        }}
      /> */}
      <ContentWrapper>
        
        <div>
          {props.data.allWpPost.edges.map(item => <div>{item.node.title}</div>)}
        </div>
        {/* <PostSidebar
          date={data.post.date}
          author={data.post.author.node.name}
          categories={data.post.categories.nodes}
        /> */}
        <PostContent>
          {/* <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.post.content }} /> */}
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
  ) 
}

//.data.fields.sku + props.params.name
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


// export const querySpektakle = graphql`query MyQuery {
//   allWpPost(filter: {categories: {nodes: {elemMatch: {name: {eq: "Spektakle"}}}}}) {
//     edges {
//       node {
//         id
//         title
//         uri
//       }
//     }
//   }
// }
// `


export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      title
      content
      author {
        node {
          name
        }
      }
      date(formatString: "DD MM YYYY")
      categories {
        nodes {
          id
          name
          uri
          slug
        }
      }
    }
    allWpPost(
      filter: { categories: { nodes: { elemMatch: { id: { eq: $id } } } } }
      sort: { fields: date, order: DESC }
    ) {
      edges {
        node {
          title
          id
          date(formatString: "MMMM DD, YYYY")
          content
          featuredImage {
            node {
              mediaDetails {
                sizes {
                  name
                  sourceUrl
                }
              }
            }
          }
        }
      }
    }
  }
`

// const PostTemplate = (props) => (
//   <div>{props}</div>
// )

// export default PostTemplate

// export const pageQuery = graphql`
//   query($id: String!) {
//     post: wpPost(id: { eq: $id }) {
//       title
//       content
//       author {
//         node {
//           name
//         }
//       }
//       date(formatString: "DD MM YYYY")
//       categories {
//         nodes {
//           id
//           name
//           uri
//           slug
//         }
//       }
//     }
//   }
// `