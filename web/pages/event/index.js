import React, { useEffect, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { Cover } from "../../component/cover/cover";
import { ModalContext } from "../../config/context/ModalProvider";
export default function Event() {
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/event");
  }, []);
  return (
    <div>
      {/* <Cover
        height={"600px"}
        img={
          "https://www.inspirationde.com/media/2019/02/design-inspiration-roundup-from-up-north-1550470895k4gn8.jpg"
        }
      /> */}
      <Carousel
    
        controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container margin-top  justify-content-center">
        <h6 className="text-light mb-5 font-Regular">Events</h6>
        <div className="row  col-md-auto  music-hight  mx-auto">
          <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
            <div
              className="card text-white"
              style={{
                width: "18rem",
                border: "2px solid #252525",
                background: "black",
              }}
            >
              <img
                src="https://source.unsplash.com/hgO1wFPXl3I"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
            <div
              className="card text-white"
              style={{
                width: "18rem",
                border: "2px solid #252525",
                background: "black",
              }}
            >
              <img
                src="https://source.unsplash.com/9tZhyQskezA"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
            <div
              className="card text-white"
              style={{
                width: "18rem",
                border: "2px solid #252525",
                background: "black",
              }}
            >
              <img
                src="https://source.unsplash.com/ZhQCZjr9fHo"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
            <div
              className="card text-white"
              style={{
                width: "18rem",
                border: "2px solid #252525",
                background: "black",
              }}
            >
              <img
                src="https://source.unsplash.com/bn-D2bCvpik"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-4 col-xl-4 mb-4 ">
            <div
              className="card text-white"
              style={{
                width: "18rem",
                border: "2px solid #252525",
                background: "black",
              }}
            >
              <img
                src="https://source.unsplash.com/uD0W-swVGgE"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4 ">
            <img
              className="rounded card-body-event"
              src="https://source.unsplash.com/hgO1wFPXl3I"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div> */}

          {/* <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              src="https://source.unsplash.com/9tZhyQskezA"
              alt=""
            />

            <p className="font-13 mt-3">Folk Festival</p>
          </div> */}
          {/* <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              src="https://source.unsplash.com/ZhQCZjr9fHo"
              alt=""
            />

            <p className="font-13 mt-3">เราร้องคุณโยก</p>
          </div> */}
          {/* <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              src="https://source.unsplash.com/bn-D2bCvpik"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div> */}
          {/* <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
            <img
              className="rounded card-body-event"
              src="https://source.unsplash.com/uD0W-swVGgE"
              alt=""
            />

            <p className="font-13 mt-3">Mini Conceart</p>
          </div> */}
        </div>
      </div>
      <style jsx>{`
        .margin-top {
          margin-top: 37rem;
        }
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
          .even-cover-carousel-item {
            top: 2%;
            height: 400px;
          }
        }

        .even-cover-carousel-item {
          top: 0%;
          opacity: 0.5;
          background-color: #252525;
          background-size: cover;
          background-repeat: no-repeat;
          height: 600px;
        }

        @media (max-width: 991px) {
          .even-cover-carousel-item {
            top: 2%;
          }
        }
      `}</style>
    </div>
  );
}
