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
      {/* <img
       width={width-240}
        className="border-0 coverMember"
        src={coverMember != undefined   ? coverMember : '/assets/img/cover/coverMember.png'}
        alt=""
      /> */}
      {/* <style jsx>
        {`
          .coverMember {
            top: 0;
            position: absolute;
            background-position: 100% 50%;
            background-repeat: no-repeat;
            height: 205px;
            min-width: 991px;
            top: 0%;
          }

          @media screen and (max-width: 991px) {
            .coverMember {
              min-width: 991px;
              top: 2.4%;
              left: 0%;
            }
          }
        `}
      </style> */}
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
