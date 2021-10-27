import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const StyledImg = styled(GatsbyImage)`
  max-height: 600px;
  margin-bottom: 60px;
  width: 100%;
`

export const Wrapper = styled.div`
  position: relative;
`

// max-width: 500px;
// margin-left: 10em;
export const HeaderWrapper = styled.div`
  position: absolute;
  top: auto;
  bottom: 10vh;
  left: 0;
  display: flex;
  align-items: left;
  width: 100%;
  max-width: 33vw;
  line-height: .9em;
  background: rgba(0,0,0,.5);
  text-align: left;
  padding: .1em .1em .4em;
  padding: .1em 1em .4em 1em;
  display: flex;
  flex-direction: column;
  text-align: left;

  -webkit-backdrop-filter: saturate(1.8) blur(5px);
  backdrop-filter: saturate(1.8) blur(5px);

  @media screen and (max-width: 1300px) {
    max-width: 66vw;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    max-width: 100vw;
    margin: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    text-transform: none;
    text-align: left;
    line-height: .9em;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding-bottom: 9px;

    @media screen and (min-width: 768px) {
      font-size: 4rem;
    }
  }
  p {
    font-size: .9rem;
    opacity: .7;
    padding: 0;
    margin: 0;
    margin-top: 5px;
  }
  h4 {
    font-weight: 200;
  }
  svg {
    width: 14px;
    height: 14px;
    margin-right: 10px;
  }
  svg * {
    fill: #ffffff;
  }
`
