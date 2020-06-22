import React from "react";
import styled from "styled-components";
export default function CoverMember({ children }) {
  const COVERMEMBERIMAGE = styled.div`
    background-image: url("https://source.unsplash.com/hgO1wFPXl3I/1600x700");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 180px;
  `;
  return <COVERMEMBERIMAGE>{children}</COVERMEMBERIMAGE>;
}
