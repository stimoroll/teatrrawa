import React from "react"
import styled from "styled-components";
import { StyledImg } from "./PageHero.styles"

const PageHero = ({ img }) => <StyledImg image={img} alt="Page Hero" />

export default PageHero

export const PanelWrapper = styled.div`
/*! CSS Used from: https://website61990.nicepage.io/nicepage.css?version=2c80f7f1-49fe-4fa6-b716-400262722067 ; media=screen */
@media screen{
section{display:block;}
a{background-color:transparent;-webkit-text-decoration-skip:objects;}
a:active,a:hover{outline-width:0;}
b{font-weight:inherit;font-weight:bold;}
h1{font-size:2em;margin:0.67em 0;}
::-webkit-input-placeholder{color:inherit;opacity:0.54;}
.u-btn{display:table;cursor:pointer;color:inherit;font-style:inherit;font-size:inherit;font-weight:inherit;font-family:inherit;line-height:inherit;letter-spacing:inherit;text-transform:inherit;text-decoration:none;border:0 none transparent;outline-width:0;background-color:transparent;margin:0;-webkit-text-decoration-skip:objects;font-style:initial;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;text-align:center;padding:10px 30px;border-radius:0;align-self:flex-start;}
.u-btn:focus,.u-btn:active:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
.u-btn:hover,.u-btn:focus{text-decoration:none;}
.u-btn:active{outline:0;background-image:none;}
a{border-top-width:0;border-left-width:0;border-right-width:0;}
*,*:before,*:after{box-sizing:border-box;}
section{position:relative;}
section > *,.u-sheet > *{position:relative;}
a{color:#259bca;text-decoration:none;}
a:hover{color:#0676a4;}
a:focus{outline:thin dotted;outline:5px auto -webkit-focus-ring-color;outline-offset:-2px;}
.u-clearfix:before,.u-clearfix:after{content:'';display:table;}
.u-image{object-fit:cover;display:block;vertical-align:middle;background-size:cover;background-position:50% 50%;background-repeat:no-repeat;}
section.u-image{overflow:visible;}
.u-sheet{position:relative;width:1140px;margin:0 auto;}
@media (min-width: 1200px){
.u-sheet{width:1140px;}
}
@media (min-width: 992px) and (max-width: 1199px){
.u-sheet{width:940px;}
}
@media (min-width: 768px) and (max-width: 991px){
.u-sheet{width:720px;}
}
@media (min-width: 576px) and (max-width: 767px){
.u-sheet{width:540px;}
}
@media (max-width: 575px){
.u-sheet{width:340px;}
}
.u-valign-bottom{display:flex;flex-direction:column;}
.u-valign-bottom{justify-content:flex-end;}
.u-sheet:not(.u-image):not(.u-video){pointer-events:none;}
.u-sheet:not(.u-image):not(.u-video) > *{pointer-events:auto;pointer-events:initial;}
h1,h3{margin-top:0;margin-bottom:0.5rem;line-height:1.2;font-weight:500;color:inherit;padding:0;}
h1{font-size:2.25rem;}
h3{font-size:1.25rem;}
p{margin-top:0;padding:0;margin-bottom:0.5rem;}
.u-align-right{text-align:right;}
.u-text{word-wrap:break-word;position:relative;}
.u-font-ubuntu.u-custom-font{font-family:Ubuntu, sans-serif!important;}
.u-button-style.u-black{border-width:0;}
h1,h3{font-family:Roboto,sans-serif;}
.u-image{color:#111111;}
.u-black{color:#ffffff;background-color:#000000;}
.u-button-style.u-black{color:#ffffff!important;background-color:#000000!important;}
.u-button-style.u-black:hover,.u-button-style.u-button-style.u-black:active{color:#ffffff!important;background-color:#000000!important;}
h1.u-title{font-weight:400;font-size:4.5rem;line-height:1.1;margin-top:20px;margin-bottom:20px;}
h3{font-weight:400;font-size:1.875rem;line-height:1.2;margin-top:20px;margin-bottom:20px;}
p:not(.u-text-variant){margin-top:20px;margin-bottom:20px;}
.u-btn{margin-top:20px;margin-bottom:20px;}
a{color:#478ac9;}
a:hover{color:#387cbd;}
.u-btn{background-color:#478ac9;color:#ffffff;}
.u-btn:hover{background-color:#387cbd;color:#e6e6e6;}
.u-btn:active{background-color:#387cbd;color:#e6e6e6;}
}
/*! CSS Used from: Embedded */
.u-section-2{background-image:url(//images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/d0a63d69d3f6573ca1dcae0b/2.png);background-position:50% 50%;}
.u-section-2 .u-sheet-1{min-height:864px;}
.u-section-2 .u-text-1{text-transform:uppercase;letter-spacing:10px;font-size:1.25rem;margin:427px 0 0 591px;}
.u-section-2 .u-text-2{font-size:4.5rem;margin:33px 0 0 591px;}
.u-section-2 .u-text-3{margin:21px 0 0 591px;}
.u-section-2 .u-btn-1{background-image:none;text-transform:uppercase;letter-spacing:3px;font-size:0.875rem;margin:50px 0 60px auto;}
@media (max-width: 1199px){
.u-section-2 .u-sheet-1{min-height:712px;}
.u-section-2 .u-text-1{margin-top:60px;margin-left:391px;}
.u-section-2 .u-text-2{margin-left:391px;}
.u-section-2 .u-text-3{margin-left:391px;}
}
@media (max-width: 991px){
.u-section-2 .u-sheet-1{min-height:545px;}
.u-section-2 .u-text-1{margin-left:171px;}
.u-section-2 .u-text-2{margin-left:171px;}
.u-section-2 .u-text-3{margin-left:171px;}
}
@media (max-width: 767px){
.u-section-2 .u-sheet-1{min-height:653px;}
.u-section-2 .u-text-1{margin-left:366px;}
.u-section-2 .u-text-2{margin-left:auto;}
.u-section-2 .u-text-3{margin-left:auto;}
}
@media (max-width: 575px){
.u-section-2 .u-sheet-1{min-height:701px;}
.u-section-2 .u-text-1{margin-left:166px;}
.u-section-2 .u-text-2{font-size:3rem;}
}
`

export const Panel = () => (
  <PanelWrapper>
    <section className="u-align-right u-clearfix u-image u-section-2" id="carousel_519d">
      <div className="u-clearfix u-sheet u-valign-bottom u-sheet-1">
        <h3 className="u-text u-text-1">about us</h3>
        <h1 className="u-custom-font u-font-ubuntu u-text u-title u-text-2">Branding 
          <b>36</b>
        </h1>
        <p className="u-text u-text-3">We create and execute strategies, aligning with stakeholders to achieve objectives. Honed at hundreds of technology companies, our innovative, capital-efficient model is field-tested and, quite simply, works.</p>
        <a href="#" className="u-black u-btn u-button-style u-btn-1">read more</a>
      </div>
    </section>
  </PanelWrapper>
)