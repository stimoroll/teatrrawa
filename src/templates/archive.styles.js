import styled from "styled-components"
import { Link } from "gatsby"

export const Wrapper = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px;
  color: rgba(0, 0, 0, 0.8);
`

export const ContentWrapper = styled.div`
  display: block;

  @media (min-width: 992px) {
    display: flex;
  }
`

export const PageContent = styled.article`
  margin: 20px 0 0 0;

  .dot-divider {
    width: 100%;
    height: 5px;
    margin-bottom: 20px;
    border-bottom: 1px solid lightgrey;
  }
`

export const StyledH2 = styled.h2`
  font-weight: 500;
  font-size: 1.8rem;
  :hover {
    color: #9c9c9c
  }
`

export const StyledDate = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
`

export const StyledReadMore = styled(Link)`
  font-size: 1rem;
  font-weight: 800;
  position: relative;
  height: 30px;
  display: block;
  padding: 3px 0 0 10px;
  margin-bottom: 30px;
  margin-top:20px;
  margin-bottom:20px;

  -webkit-text-decoration-skip:objects;
  display:table;
  cursor:pointer;
  vertical-align:middle;
  text-align:center;
  padding:10px 30px;
  align-self:flex-start;
  border-radius:0;
  border-top-width:0;
  border-left-width:0;
  border-right-width:0;
  border-width:0;
  *,*:before,*:after{box-sizing:border-box;}
  & > *{position:relative;}
  text-decoration:none;
  .u-sheet:not(.u-image):not(.u-video) > *{pointer-events:auto;pointer-events:initial;}
  background-color:#000000;
  color:#ffffff;
  &:focus,.u-btn:active:focus{
    outline-width:0;
    outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;
    outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;
    text-decoration:none;}
  &:hover{
    outline-width:0;
    text-decoration:none;
    color:#000;
    background-color: #fff;
    border: 1px solid #000;
  }
  &:active{
    outline:0;
    background-color:#fff;
    color:#e6e6e6;
  }

/*! CSS Used from: Embedded */
text-transform:uppercase;
letter-spacing:3px;
font-size:0.875rem;
margin:50px 0 60px auto;
`
