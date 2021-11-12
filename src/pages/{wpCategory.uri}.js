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
// "mediaItemUrl"

const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`
const PostContent = styled.article`
  margin-top: 20px;
`

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ComponentName2 = ({ data }) => (
  <Layout>
    <h2>Lista</h2>
    <Wrapper>
    <ContentWrapper>
    <ul>
    {data.allWpPost.edges.map(item => (
      <li>
        <a href={item?.node?.link}>{item?.node?.title}</a>
        {/* <p>{JSON.stringify(item?.node?.featuredImage?.node, null, 4)}</p> */}
      </li>
    ))}
    </ul>
    <PostContent>
          {/* <h1 dangerouslySetInnerHTML={{ __html: data.post.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.post.content }} /> */}
        </PostContent>
      </ContentWrapper>
    </Wrapper>
  </Layout>
)
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

export default ComponentName2
