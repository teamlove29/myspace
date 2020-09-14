import React, { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import CarouselFeature from "../../component/carousel/carouselFeature";

import { ModalContext } from "../../config/context/ModalProvider";
export default function Features() {
  const { setActiveMenu } = useContext(ModalContext);
  const router = useRouter();
  useEffect(() => {
    setActiveMenu("/features");
  }, []);

  const handleOnClickEvent = (value) => {
    const url = "/features/[id]";
    const as = `/features/${value}`;
    router.push(url, as);
  };

  return (
    <div>
      <CarouselFeature />
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
                src="https://news-cdn.bectero.com/uploads/pic_news/big_15930566025ef41d5a8e7a0.jpg"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-warning font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">ปล่อยภาพคอนเซ็ปต์ใหม่</span> <br />
                <small style={{ color: "#353535" }}>News Type</small>
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://www.khaosod.co.th/wpapp/uploads/2019/10/4777.jpg"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-warning font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">
                  สุดเศร้า! ซ็อลลีเสียชีวิต
                </span>{" "}
                <br />
                <small style={{ color: "#353535" }}>News Type</small>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB18Zb6f.img?h=350&w=624&m=6&q=60&u=t&o=t&l=f&f=jpg&x=323&y=195"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-warning font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">
                  หนุ่ม ศรราม เปิดใจเคลียร์ทุกประเด็นหย่า
                </span>{" "}
                <br />
                <small style={{ color: "#353535" }}>News Type</small>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://image.tnews.co.th/relate/2020/08/ovjepexTMMwpmwMi_121036.jpg"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-warning font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">11 ธ.ค.นี้ แต่งชัวร์</span> <br />
                <small style={{ color: "#353535" }}>News Type</small>
              </div>
            </div>
          </div>
          <div className=" col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-4 ">
            <div
              onClick={() => handleOnClickEvent("1")}
              className="card text-white pointer card-body-event-main"
            >
              <img
                src="https://medhubnews.com/sites/2320/files/s/articles/o_1cnhpao701rlu1chs194lnv6137j7.jpg?w=300&h=300"
                className="card-img-top p-2 image-rounded"
                alt="..."
              />
              <div className="p-2">
                <small className="text-warning font-11-Regular">
                  ศ.07.01.63 - อา.08.04.63
                </small>{" "}
                <br />
                <span className="card-text">
                  ผมอยากเป็นนัีกสแดงฮอลลีวูด
                </span>{" "}
                <br />
                <small style={{ color: "#353535" }}>News Type</small>
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
        .card-body-event-main img {
          max-height: 170px;
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
        }
        @media (max-width: 1199px) {
          .card-body-event-main {
            width: 22rem;
          }
        }

        @media (max-width: 991px) {
          .card-body-event-main {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
