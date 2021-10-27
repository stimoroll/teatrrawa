import React from "react"
import { getImage } from "gatsby-plugin-image"
import { useHeroQuery } from "../../hooks/useHeroQuery"
import { Wrapper, HeaderWrapper, StyledImg } from "./Hero.styles"
import { IconCalendar, IconClock, IconLocation } from "../IconsV2/IconsV2"
import SliderV2 from "../SliderV2/SliderV2"

const Hero = () => {
  //replace it with page slider
  const {
    wpPage: { ACF_HomePage: data },
  } = useHeroQuery()

  const imageData = getImage(data.heroImage.localFile)

  return (
    <Wrapper>
      {/* <StyledImg image={imageData} alt="Hero Image" /> */}
      <SliderV2 />
      {/* <HeaderWrapper>
        <h4>premiera</h4>
        <h1>{data.heroText}</h1>
        <p><IconCalendar /> 3 września 2051 - <IconClock/> 12:58</p>
        <p><IconLocation />Wrocław Arena</p>
      </HeaderWrapper> */}
    </Wrapper>
  )
}

export default Hero
