import React, { useEffect, useContext } from "react";
import { Cover } from "../component/cover/cover";
import { ModalContext } from "../config/context/ModalProvider";
export default function Event() {
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/event");
  }, []);
  return (
    <div>
      <Cover
        height={"600px"}
        img={
          "https://www.inspirationde.com/media/2019/02/design-inspiration-roundup-from-up-north-1550470895k4gn8.jpg"
        }
      />

      <div
        className="container  justify-content-center"
        style={{
          position: "relative",
          marginTop: "550px",
          marginBottom: "250px",
          color: "white",
        }}
      >
        <p className="pb-5 h5">Events</p>

        <div className="row  col-md-auto  music-hight text-center mx-auto">
          <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4 ">
            <img
              className="rounded card-body-event"

              src="https://source.unsplash.com/hgO1wFPXl3I"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div>

          <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
             
              src="https://source.unsplash.com/9tZhyQskezA"
              alt=""
            />

            <p className="font-13 mt-3">Folk Festival</p>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"

              src="https://source.unsplash.com/ZhQCZjr9fHo"
              alt=""
            />

            <p className="font-13 mt-3">เราร้องคุณโยก</p>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              
              src="https://source.unsplash.com/bn-D2bCvpik"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              
              src="https://source.unsplash.com/uD0W-swVGgE"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .card-body-event {
          width: 210px;
          height: 130px;
          backgroundposition: center;
          backgroundrepeat: no-repeat;
          backgroundsize: cover;
        }

        @media (max-width: 575px) {
            .card-body-event {
          width: 145px;
          height: 100px;

        }
    }
      `}</style>
    </div>
  );
}
