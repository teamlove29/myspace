import React, { useContext, useState, useEffect } from "react";
import { ModalContext } from "../../config/context/ModalProvider";
import { CoverSettingImage } from "./coverSettingStyle";
export default function CoverMember() {
  const { coverMember } = useContext(ModalContext);
  const { height, width } = useWindowDimensions();

  return (
    <>
      <CoverSettingImage
        imgCover={coverMember != undefined ? coverMember : ""}
        width={width < 991 ? 991 : width - 240}
      />
    </>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
