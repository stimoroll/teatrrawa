import React from "react"
import './index.css'
import styled from "styled-components"



import Seo from "../components/SEO/SEO"
import Layout from "../components/Layout/Layout"
import Hero from "../components/Hero/Hero"
import CtaArea from "../components/CTAArea/CTAArea"
import LatestBlogPost from "../components/LatestBlogPost/LatestBlogPost"
import Quote from "../components/Quote/Quote"
import About from "../components/About/About"

const BackTextWrapper = styled.div`
  postion: relative;
  color: #efefef;
  background: #fff;
  font-size: 3rem;
  font-weigh: 900;
  display: flex:
  align-content: center;
  justify-content: center;
  p {
    position: absolute;
    color: #000;
  }
`

export const BackText = ({children}) => (
  <BackTextWrapper>
    TEXT
    <p>{children}</p>
  </BackTextWrapper>
)

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <CtaArea />
    <LatestBlogPost />
    <Quote />
    <About />
  </Layout>
)

export default IndexPage
