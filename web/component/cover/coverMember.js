import React from "react";

export default function CoverMember() {
  return (
    <>
      <img
        className="container-fluid coverMember"
        src="/assets/img/cover/coverMember.png"
        alt=""
      />
      <style jsx>
        {`

        .coverMember {
              top: 0;
              right: 0;
              position: absolute;
              backgroundposition: center;
              backgroundrepeat: no-repeat;
              backgroundsize: cover;
              width: 100%;
              height: 200px;
              padding: 0 0;
            }


          @media screen and (max-width: 991px) {
            .coverMember {
              top: 5%;
            }
          }
        `}
      </style>
    </>
  );
}
