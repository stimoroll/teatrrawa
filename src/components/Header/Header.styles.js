import styled from 'styled-components';
// border-bottom: 1px solid #e7e7e7;
// background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.7) 100%, #000000 80%);

export const Wrapper = styled.header`
  height: auto;
  position: absolute;
  width: 100vw;
  z-index: 10000;
  mix-blend-mode: normal;
  opacity: 0.9;
  transition: all 0.4s ease;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 90%);

  & > div {
    &.social {
      height: 60px;
    }
    background: rgba(0,0,0,0);
    border-bottom: 1px solid rgba(255,255,255, 0.1);
    & > a svg {
      // width: 140px;
      // height: 140px;
    }
    & > nav {
      justify-content: flex-end;
    }
  }
  &.shrunk {
    position: fixed;
    :before {
      display: none;
    }
    > div {
      transition: all 0.4s ease;
      margin: 0;
      background: rgba(0,0,0,.9);
      height: 60px;
      &.social {
        40px;
      }
      > nav {
        broder: 1px solid  rgba(255,255,255, 0.01);
      }
    }
  }
`;

// border-right: 1px solid #e7e7e7;
export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;
  height: 100%;
  padding: 0 20px;
  margin: 10px auto;
  flex: 1 8;
  > nav {
    display: flex;
    // background: rgba(0,0,0,.5);
    // border: 4 px solid rgba(0,0,0,1);
    width: 100%;
    margin: 0 2px;
  }
  > a {
    display: flex;
    // background: rgba(0,0,0,.5);
    // border: 4 px solid rgba(0,0,0,1);
    padding: 0 5px;
  }
  svg {
    width: 60px;
  }
  svg * {
    fill: #e7e7e7;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  background: rgba(0,0,0,.9);
  position: relative;
  > input {
    background: rgb(0,0,0,0);
    border: none;
    border-bottom: 1px solid #fff;
    margin: 20px 10px;
    min-width: 200px;
    color: #fff;
    oultine: none;
  }
  > button {
    position: absolute;
    right: 0px;
    background: rgb(0,0,0,0);
    border: none;
    display: flex;
    height: 100%;
    align-items: center;    
    span {
      display: none;
    }
  }
`;