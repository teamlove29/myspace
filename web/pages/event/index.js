import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import useWindowSize from "../../component/useWindowSize";
import { Carousel } from "react-bootstrap";
import { Cover } from "../../component/cover/cover";
import { ModalContext } from "../../config/context/ModalProvider";

export default function Event() {
  const { setActiveMenu } = useContext(ModalContext);
  const [state, setstate] = useState();
  const size = useWindowSize();
  const router = useRouter();
  useEffect(() => {
    setActiveMenu("/event");
    // if (size.width > 600) {
    //   setstate("600px");
    // } else {
    //   setstate(`${size.width}px`);
    // }

    if (size.width <= 1200) {
      // setstate("600px");
      setstate(`${size.width - 600}px`);
      if (size.width <= 991) {
        setstate(`${size.width - 400}px`);
      }
    } else {
      setstate("600px");
      // setstate(`${size.width}px`);
    }
  }, [size]);
  console.log(size.width);
  const handleOnClickEvent = (value) => {
    const url = "/event/[id]";
    const as = `/event/${value}`;
    router.push(url, as);
  };

  return (
    <div>
      {/* <Cover
        height={"600px"}
        img={
          "https://www.inspirationde.com/media/2019/02/design-inspiration-roundup-from-up-north-1550470895k4gn8.jpg"
        }
      /> */}
      <Carousel
        style={{
          top: "0",
          right: "0",
          //   position: "absolute",
          position: "relative",
          width: "100%",
        }}
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
      <div
        style={
          {
            //   marginTop: state,
          }
        }
        className="container  justify-content-center"
      >
        <h6 className="text-light mb-5 font-Regular ml-4 mt-5">Events</h6>
        <div className="row  music-hight col-md-auto mx-auto">
          <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://source.unsplash.com/9tZhyQskezA"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-danger font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ฝนไปเพลงมา</span> <br />
                <small style={{ color: "#353535" }}>Mega Banna</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://source.unsplash.com/ZLdKgqJeERM"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-danger font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ฝนไปเพลงมา</span> <br />
                <small style={{ color: "#353535" }}>Mega Banna</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://source.unsplash.com/Q7wGvnbuwj0"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-danger font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ฝนไปเพลงมา</span> <br />
                <small style={{ color: "#353535" }}>Mega Banna</small>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://source.unsplash.com/MRxD-J9-4ps"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-danger font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ฝนไปเพลงมา</span> <br />
                <small style={{ color: "#353535" }}>Mega Banna</small>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://source.unsplash.com/ZODcBkEohk8"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-danger font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ฝนไปเพลงมา</span> <br />
                <small style={{ color: "#353535" }}>Mega Banna</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`

        .card-body-event-main {
          width: 18rem;
          border: 1px solid #252525;
          background: black;
        }
        .image-rounded {
          border-radius: 15px;
        }
        .margin-top {
          margin-top: size;
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
        @media (max-width: 1199px) {
          .card-body-event-main {
            width: 22rem;
          }
        }

        .even-cover-carousel-item {
             width: "100%",
          top: 0%;
          opacity: 0.5;
          background-color: #252525;
          background-size: cover;
          background-repeat: no-repeat;
          max-height: 600px;
        }

        @media (max-width: 991px) {
          .even-cover-carousel-item {
            top: 2%;
          }
          .card-body-event-main {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
