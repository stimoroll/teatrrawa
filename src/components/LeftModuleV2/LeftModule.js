import styled from "styled-components";
import React from "react";
import { MenuButton } from "../IconsV2/IconsV2";

const VerticalPanel = styled.div`
  display: flex;
  widht: 80px;
  height: 100%;
  min-height: 100vh;
`;


export const LeftModule  = () => {
  return (
    <VerticalPanel>
      <MenuButton />
      scroll down
    </VerticalPanel>
  )
}
