import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { getSrc } from "gatsby-plugin-image"

const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
  color: #000;
`
// "mediaItemUrl"

const ComponentName = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>
const ComponentName2 = ({ data }) => (
  <Wrapper>
    <ul>
    {data.allWpPost.edges.map(item => (
      <li>
        <a href={item?.node?.link}>{item?.node?.title}</a>
        {/* <p>{JSON.stringify(item?.node?.featuredImage?.node, null, 4)}</p> */}
      </li>
    ))}
    </ul>
    <ComponentName data={data}/>
  </Wrapper>
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
