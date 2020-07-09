import React, { useContext } from "react";
import { ModalContext } from "../../config/context/ModalProvider";
export default function CoverMember() {
  const { coverMember } = useContext(ModalContext);
  return (
    <>
      <img
        className="container-fluid coverMember"
        src={coverMember != undefined   ? coverMember : '/assets/img/cover/coverMember.png'}
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
              left: 0;
              top: 5%;
            }
          }
        `}
      </style>
    </>
  );
}
