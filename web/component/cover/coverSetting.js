import React from "react";

export default function CoverSetting() {
  return (
    <>
      <img className="container-fluid coverSetting" src="" alt="" />
      <style jsx>
        {`
          .coverSetting {
            top: 0;
            right: 0;
            position: absolute;
            background-color: #252525;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;
            height: 200px;
            padding: 0 0;
          }

          @media screen and (max-width: 991px) {
            .coverSetting {
              top: 5%;
            }
          }
        `}
      </style>
    </>
  );
}
