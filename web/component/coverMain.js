import React from "react";
import styled from "styled-components";
export default function CoverMember({ children }) {
  const COVERMEMBERIMAGE = styled.div`
  background-image: url("/assets/img/cover/mainCover.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: auto !important;
    height: 650px!important;
    margin: 0 auto 1em auto;
  `;
  return <COVERMEMBERIMAGE>{children}
  
  
  </COVERMEMBERIMAGE>;
}
// background-image: url("https://source.unsplash.com/hgO1wFPXl3I/1600x700");