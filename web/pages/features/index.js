import React, { useEffect, useContext } from "react";
import { Cover } from "../../component/cover/cover";
import { Carousel } from "react-bootstrap";
import { ModalContext } from "../../config/context/ModalProvider";
export default function Features() {
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/features");
  }, []);
  return (
    <div>
      {/* <Cover
        height={"270px"}
        text={"FEATURES"}
        img={"https://source.unsplash.com/hxnBkzz9iL4"}
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
            src="https://m.thaiware.com/upload_misc/news/2019_03/728x409/16009_190315094102B8.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://m.thaiware.com/upload_misc/news/2019_03/728x409/16009_190315094102B8.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://m.thaiware.com/upload_misc/news/2019_03/728x409/16009_190315094102B8.jpg"
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
        <h6 className="text-light mb-5 font-Regular ml-4 mt-5">Features</h6>
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
    max-height: 300px;
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
  background-color: #252525;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 600px;
}

@media (max-width: 991px) {
  .even-cover-carousel-item {
    margin-top:65px;
  }
  .card-body-event-main {
    width: 100%;
  }
}
`}</style>
    </div>
  );
}
