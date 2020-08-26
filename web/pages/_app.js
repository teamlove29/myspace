import React, { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import JWT from "jsonwebtoken";
import "react-cool-music-player/dist/index.css";
import "../public/assets/css/mystyle.css";
import "../public/assets/css/font.css";
import "../public/assets/css/sb-admin-2.css";

import { ModalProvider } from "../config/context/ModalProvider";
import Navbar from "../component/navbar";
import Aside from "../component/Aside";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LoadPage from "../container/loadPage";
import { WaveLoading } from "react-loadingg";
import firebase from "../config/config";
import Axios from "axios";
NProgress.configure({
  showSpinner: false,
  // minimum: 0.9,
  // easing: "ease",
  // speed: 1000,
});
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
const DynamicComponentWithNoSSR = dynamic(
  () => import("react-cool-music-player"),
  { ssr: false }
);
const MyApp = ({ Component, pageProps, stars }) => {
  const [loading, setLoading] = useState(false);
  const [noActionsShow, setNoActionsShow] = useState(false);
  const [playListShow, setPlayListShow] = useState(false);
  const [data, setData] = useState([
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/myspace-dev-1ae9e.appspot.com/o/test.mp3?alt=media&token=85486291-19f7-40ec-bc6e-d3ace2fdfa4d",
      artist: "Morvasu",
      name: "Melbourne - Morvasu",
      img:
        "https://www.edgemagazineth.com/uploads/6609/images/Entertainment/What%20The%20Duck-Morvasu.jpg",
      id: "66575568423123",
    },
    {
      src:
        "https://firebasestorage.googleapis.com/v0/b/myspace-dev-1ae9e.appspot.com/o/autta_x_blacksheep_x_milli_prod_by_t_biggest_yupp_8629664065392744514.mp3?alt=media&token=aaef7402-12e6-445e-8648-7901b6da286a",
      artist: "Soybad",
      name: "ไหนเล่า - Soybad",
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSW6efdzm2aLKy-fgT0MTu_L6c0gPtwSVAqrA&usqp=CAU",
      id: "66575568425354321",
    },
  ]);

  useEffect(() => {
    const start = () => {
      // console.log("start");
      setLoading(true);
    };

    const end = () => {
      // console.log("findished");
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
      Router.events.on("routeChangeStart", () => NProgress.start());
      Router.events.on("routeChangeComplete", () => NProgress.done());
      Router.events.on("routeChangeError", () => NProgress.done());
    };
  }, []);
  const onDelete = (index, id) => {
    const _data = JSON.parse(JSON.stringify(data));
    _data.splice(index, 1);
    setData(_data);
  };
  const onPlayListShow = () => {
    setPlayListShow(true);
  };
  const onPlayListHide = () => {
    setPlayListShow(false);
  };
  const noActions = () => {
    setNoActionsShow(true);
    setTimeout(() => {
      setNoActionsShow(false);
    }, 2000);
  };

  const actions = [
    (music) => {
      return (
        <div
          style={{ fontSize: 22, marginRight: 8 }}
          key={"a"}
          onClick={noActions}
        >
          <svg
            className="icon pointer"
            style={{
              width: "1em",
              height: "1em",
              verticalAlign: "middle",
              fill: "currentColor",
              overflow: "hidden",
              color: "#868686",
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1279"
          >
            <path
              d="M892.7 896.1H131.3c-18.4 0-33.3-14.9-33.3-33.3V696.4c0-18.4 14.9-33.3 33.3-33.3h30c18.4 0 33.3 14.9 33.3 33.3 0 4.5-0.9 8.9-2.6 12.8l-13 64.9c0 18.4 14.9 33.3 33.3 33.3h599.3c18.4 0 33.3-14.9 33.3-33.3l-13-64.9c-1.7-4-2.6-8.3-2.6-12.8 0-18.4 14.9-33.3 33.3-33.3h30c18.4 0 33.3 14.9 33.3 33.3v166.5c0.1 18.3-14.8 33.2-33.2 33.2zM580 582h1l-1 0.9v-0.9z m247.2-228.6l1.6 0.1-234.7 216.4v-2.3h-0.1c-0.3 3.7-3.4 6.7-7.2 6.7-4 0-7.2-3.2-7.2-7.2 0-0.7 0.1-1.3 0.3-1.9V433.3c-11.4-0.7-23-1.1-34.7-1.1-134.7 0-247.2 95.2-273.7 222.1-12.1-18.3-17.1-49.1-17.1-100 0-154.5 125.2-294.1 279.7-294.1 15.8 0 31.1 0.1 45.8 0.4V136.1c-0.2-0.6-0.3-1.2-0.3-1.9 0-4 3.2-7.2 7.2-7.2 3.8 0 6.9 2.9 7.2 6.7h0.1v-1.8L829.6 339h-2.4v0.1c3.7 0.3 6.7 3.4 6.7 7.2 0 3.7-3 6.8-6.7 7.1z"
              fill=""
              p-id="1280"
            ></path>
          </svg>
        </div>
      );
    },
    (music) => {
      return (
        <div style={{ fontSize: 22 }} key={"b"} onClick={noActions}>
          <svg
            className="icon pointer"
            style={{
              width: "1em",
              height: "1em",
              verticalAlign: "middle",
              fill: "currentColor",
              overflow: "hidden",
              color: "#868686",
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3936"
          >
            <path
              d="M711.713554 104.804974c-77.222779 0-151.3388 35.948747-199.713554 92.53451-48.374754-56.585763-122.490775-92.53451-199.713554-92.53451-136.915299 0-244.094344 107.180068-244.094344 244.094344 0 167.537737 150.894685 304.453037 379.456265 511.933485l64.352657 58.361199 64.352657-58.361199C804.913213 653.353378 955.808922 516.438079 955.808922 348.900342 955.808922 211.985042 848.628854 104.804974 711.713554 104.804974zM516.660136 795.149848l-4.660136 4.216022-4.660136-4.216022C296.308543 603.64628 156.952658 477.160517 156.952658 348.900342c0-88.539522 66.793242-155.332764 155.332764-155.332764 68.346621 0 134.917806 44.158732 158.217465 104.738459l82.770122 0c23.521716-60.579727 90.092901-104.738459 158.439522-104.738459 88.539522 0 155.332764 66.793242 155.332764 155.332764C867.046319 477.160517 727.690434 603.64628 516.660136 795.149848z"
              p-id="3937"
            ></path>
          </svg>
        </div>
      );
    },
  ];
  return (
    <>
      <ModalProvider>
        <Header />

        <div id="page-top">
          {/* {loadingLogin ?   <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            position: "fixed",
            zIndex: "2",
          }}
        >
          <WaveLoading color="orange" size="large" />
        </div>:  null } */}

          <div id="wrapper">
            <Aside />
            <div id="content-wrapper" className="d-flex flex-column">
              <div
                style={{
                  minHeight: "100vh",
                }}
                id="content"
              >
                <Navbar />
                {loading ? <LoadPage /> : <Component {...pageProps} />}
                {/* <Component {...pageProps} /> */}
              </div>
              <Footer
              />
            </div>
          </div>
        </div>
        <div
          className="tip"
          style={noActionsShow ? { display: "block" } : { display: "none" }}
        >
          None Action
        </div>
        <div className="wrapper-cooplayer">
          <DynamicComponentWithNoSSR
            data={data}
            primaryColor={"#f6c23e"}
            volume={0.9}
            playListShow={playListShow}
            onPlayListStatusChange={(status) => {
              setPlayListShow(status);
            }}
            showLyricNormal={false}
            showDetailLyric={false}
            actions={actions}
            onDelete={onDelete}
            playListHeader={{
              headerLeft: "Play List",
              headerRight: (
                <span onClick={onPlayListHide} className="pointer">
                  Close
                </span>
              ),
            }}
            icons={{
              deleteIcon: (
                <svg
                  onClick={(values) => {
                    console.log("dsadas");
                  }}
                  style={{
                    paddingTop: "0px",
                  }}
                  viewBox="0 0 1025 1024"
                  width="26"
                  height="26"
                >
                  <path
                    d="M905.095 208.272c-0.723-13.831-8.416-22.5-21.935-24.964-9.591-1.748-19.427-2.978-29.157-3.003-86.191-0.226-172.383-0.131-258.575-0.132-33.351 0-33.746-0.003-33.526-32.945 0.107-16.082-2.276-30.68-17.72-38.771-18.485-9.684-38.335-9.957-56.659-0.784-17.966 8.993-20.791 26.286-18.357 44.809 0.489 3.722-0.236 7.611 0.315 11.317 1.911 12.864-3.273 16.675-16.211 16.658-65.739-0.088-131.48 0.861-197.221 1.272-33.198 0.208-66.403-0.284-99.596 0.188-17.428 0.248-31.405 5.801-32.05 26.883-0.632 20.665 11.01 30.367 29.789 32.983 8.168 1.138 16.754 1.418 24.885 0.245 18.279-2.637 24.062 3.035 23.817 22.671-1.187 95.25-0.536 190.522-0.536 285.787 0 94.508-0.052 189.017 0.02 283.525 0.042 54.383 27.569 82.889 81.862 83.012 154.237 0.351 308.475 0.311 462.712 0.022 54.345-0.102 81.543-28.003 81.768-82.957 0.262-64.265 0.061-128.531 0.061-192.797 0-125.507 0.497-251.018-0.52-376.517-0.158-19.465 5.267-25.341 23.708-22.741 12.025 1.695 24.391 0.459 35.599-4.637 12.134-5.515 18.229-15.704 17.527-29.124zM703.894 852.013c-127.824 0.459-255.648 1.108-383.472 1.53-42.18 0.139-55.197-13.105-55.226-55.644-0.06-88.514-0.018-177.028-0.018-265.542 0-90.027 0.354-180.056-0.345-270.078-0.118-15.18 2.786-20.515 19.406-20.441 154.329 0.685 308.663 0.647 462.992 0.03 15.437-0.062 18.313 4.852 18.296 19.052-0.212 176.262 0.311 352.525 0.354 528.787 0.012 48.329-14.318 62.135-61.987 62.306zM457.826 551.954c-0.005 62.494 0.248 124.989-0.122 187.48-0.16 27.053-21.176 42.105-41.952 30.851-13.621-7.378-15.183-20.088-15.14-33.959 0.217-70.131 0.1-140.263 0.099-210.395 0-52.078-0.013-104.156 0.005-156.234 0.01-28.205 9.473-41.657 29.029-41.383 19.282 0.27 28.061 13.458 28.076 42.408 0.031 60.412 0.009 120.822 0.005 181.232zM640.505 548.427c0 67.266 0.079 134.531-0.04 201.797-0.046 25.885-12.42 41.664-31.659 41.105-18.649-0.542-30.391-15.588-30.412-40.16-0.114-135.287-0.119-270.574 0.002-405.861 0.023-25.653 10.741-38.957 30.533-39.21 20.326-0.26 31.51 13.901 31.546 40.533 0.091 67.264 0.03 134.53 0.03 201.796z"
                    fill="#2C2C2C"
                  />
                </svg>
              ),
            }}
          />
        </div>
        <style jsx>
          {`
            .tip {
              width: 180px;
              height: 100px;
              line-height: 100px;
              text-align: center;
              position: fixed;
              top: 50%;
              left: 50%;
              margin-left: -90px;
              margin-top: -50px;
              background: #fff;
              color: #252525;
              transition: all 0.3s ease-in-out;
              border-radius: 5px;
              z-index: 9999;
            }

            .wrapper-cooplayer {
              position: fixed;
              left: 0;
              bottom: 0;
              width: 100%;
              color: white;
              text-align: center;
            }
          `}
        </style>
      </ModalProvider>
    </>
  );
};

export default MyApp;
