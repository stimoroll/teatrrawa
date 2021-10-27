import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  img {
    transition: all 0.3s !important;
  }
`

// max-height: 100px;
export const CTAImage = styled.div`
  margin-bottom: 20px;
  max-height: 200px;
  position: relative;
  overflow: hidden;

  :hover img {
    transform: scale(1.1);
    filter: blur(2px);
  }

  @media (min-width: 768px) {
    max-height: 200px;
  }
`

export const CTAImageTextWrapper = styled.div`
  position: absolute;
  color: #fff;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

// text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
// text-transform: uppercase;
// font-weight: 700;
export const CTAImageText = styled.p`
  letter-spacing: 1.5px;
  font-size: 1.3rem;
  margin: 0px;
  padding: 0px;

  @media (min-width: 768px) {
    font-size: 1rem;
  }

  @media (min-width: 992px) {
    font-size: 1.3rem;
  }

  @media (min-width: 1200px) {
    font-size: 1.5rem;
  }
`
