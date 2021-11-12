import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { Carousel, Image } from "grommet";
import { HeaderWrapper } from "../Hero/Hero.styles";
import { ButtonV2, IconCalendar, IconClock, IconLocation } from "../IconsV2/IconsV2"

/* 
#hero .carousel-inner .item:before, #content_hero:before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    content: '';
    background-image: -webkit-gradient( linear, right bottom, right top, color-stop(0, rgba(0, 0, 0, 0)), color-stop(1, rgb(0, 0, 0)) );
    background-image: -o-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -moz-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -webkit-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    background-image: -ms-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
    background-image: linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
}

:after, :before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
*/

export const NavBar = styled.div`
  padding: 0 102.57px 0 30px;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #333333;
  ${(props) => props.theme.colors.dimGray};
`;

// const Slider = styled.div`
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    position: "relative",
    "& > .mask": {
      position: "absolute",
      // background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0, 0, 0, 0) 100%)",
      // background-image: -webkit-gradient( linear, right bottom, right top, color-stop(0, rgba(0, 0, 0, 0)), color-stop(1, rgb(0, 0, 0)) );
      // background-image: -o-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
      // background-image: -moz-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
      // background-image: -webkit-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
      // background-image: -ms-linear-gradient(top, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%);
      backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%)",
      bottom: "0",
      width: "100%",
      height: "100%",
    },
    "& video": {
      objectFit: "cover"
    }
  },
  section: {
    width: "100vw",
    heght: "100vh",
    "&> div": {
      width: "100vw",
      heght: "100vh"
    }
  },
  slidePlayer: {
    width: "100%",
    heght: "100%",
  },
  overlay: {
    position: "absolute",
    // top: auto,
    left: 0,
    width: "100%",
    bottom: "30vh",
    top: "auto",
    // height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    paddingBottom: theme.spacing(4)
  }
}));

/*
const SlidePlayer = styled.div`
    width: "100%",
    height: "180vh",
    position: "relative",
    "& video": {
      objectFit: "cover"
    }
  section: {
    width: "100vw",
    heght: "100vh"
  },
  section div {
    width: "100vw",
    heght: "100vh"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  title: {
    paddingBottom: theme.spacing(4)
  }
`; */

const Video = ({ src }) => {
  const player = useRef();
  const [toPlay, setPlay] = useState(false);
  const url =
    src ||
    "https://video-waw1-1.xx.fbcdn.net/v/t39.25447-2/231296676_861355561421899_1095403879547547186_n.mp4?_nc_cat=102&ccb=1-5&_nc_sid=5aebc0&efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHExX2ZyYWdfMl92aWRlbyJ9&_nc_ohc=nik41iPy-EUAX-f6Bfr&_nc_ht=video-waw1-1.xx&oh=48c3625cf16e3ddd0d1ec85d6ad6d4d2&oe=611DE889";
  useEffect(() => {
    console.log(player.current);
    console.log(player.current.getDuration());
    // player.current.player.handlePlay();
    setPlay(true);
    return {
      // setPlay(false);
    };
  }, [src]);
  return (
    <ReactPlayer
      url={url}
      // playing={true}
      className="slidePlayer"
      playing={toPlay}
      loop={true}
      playsinline={true}
      muted={true}
      ref={player}
      controls={false}
      width="100%"
      height="100%"
    />
  );
};

const Player = () => {
  return (
    <video
      playsInline=""
      src="https://video-waw1-1.xx.fbcdn.net/v/t39.25447-2/231296676_861355561421899_1095403879547547186_n.mp4?_nc_cat=102&ccb=1-5&_nc_sid=5aebc0&efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfZ2VuM2Jhc2ljXzVzZWNnb3BfaHExX2ZyYWdfMl92aWRlbyJ9&_nc_ohc=nik41iPy-EUAX-f6Bfr&_nc_ht=video-waw1-1.xx&oh=48c3625cf16e3ddd0d1ec85d6ad6d4d2&oe=611DE889"
    ></video>
  );
};

const Slide = ({ header = "", text = "", src = "", children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Video src={src} />
      <HeaderWrapper className={classes.overlay}>
        {children}
        {/* <h4>premiera</h4>
        <h1>{header}</h1>
        <p><IconCalendar /> 3 września 2051 - <IconClock/> 12:58</p>
        <p><IconLocation />Wrocław Arena</p>
        <ButtonV2>read more</ButtonV2> */}
      </HeaderWrapper>
      {/* <div className={classes.overlay}>
        <h3 className="p">{header}</h3>
        <p>{text}</p>
      </div> */}
    </div>
  );
};

// export SliderWraper = styled.div`
// `;

export default function SliderV2() {
  const [counter, setCounter] = useState(0);
  const classes = useStyles();
  const theme = {
    colors: {
      dimGray: "#cccccc"
    }
  };
  return (
    <div className={classes.root}>
      <section>
        <Carousel play={25000}>
          {/* <Image src="//v2.grommet.io/assets/Wilderpeople_Ricky.jpg" /> */}
          <Slide
            header="Hamlet na Bekonie"
            text="kulinarno-teatralny przepis na sukces"
            src="https://res.cloudinary.com/teatrrawa/video/upload/v1636563963/BANNERY_FILMOWE/Baner_Trawa_team_ds59gw.mp4"
          >
              <h4>premiera miesiąca</h4>
              <h1>Hamlet na Bekonie</h1>
              <p>kulinarno-teatralny przepis na sukces</p>
          </Slide>          
          <Slide
            header="Nagłówek pierwszy"
            text="Lorem ipsum dolor"
            src="https://res.cloudinary.com/teatrrawa/video/upload/v1636563943/BANNERY_FILMOWE/video_baner_w%C3%B3z1_y4ailj.mp4"
          >
              <h4>premiera</h4>
              <h1>Nerwica Natręctfff</h1>
              <p><IconCalendar /> 3 września 2051 - <IconClock/> 12:58</p>
              <p><IconLocation />Wrocław Arena</p>
              <ButtonV2>read more</ButtonV2>
          </Slide>
          {/* <Image src="//v2.grommet.io/assets/IMG_4245.jpg" /> */}
          <Slide
            header="Tytuł zastępczy"
            text="zastępczy opis tymczsowy"
            src="https://res.cloudinary.com/teatrrawa/video/upload/v1636563949/BANNERY_FILMOWE/video_baner_plaza1_mfsdmj.mp4"
          >
              <h4>nowy spektakl</h4>
              <h1>Tytuł zastępczy</h1>
              <p>dramat jakiego nie ma nikt</p>
              <ButtonV2>wyślij zapytanie</ButtonV2>
          </Slide>
          {/* <Image src="//v2.grommet.io/assets/IMG_4210.jpg" /> */}
          {/* <div>TEXT</div> */}
        </Carousel>
      </section>
      {/* <div className="mask" /> */}
    </div>
  );
}
