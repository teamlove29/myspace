import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import JWT from "jsonwebtoken";
// import CoolPlayer from 'react-cool-music-player'
import "react-cool-music-player/dist/index.css";
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

const MyApp = ({ Component, pageProps, stars }) => {
  const [loading, setLoading] = useState(false);
  const data = [
    {
      src: "http://neroht.com/Adam%20Lambert%20-%20Outlaws%20of%20Love.mp3",
      artist: "Señorita",
      name: "Shawn Mendes",
      img:
        "https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg",
      id: "66575568423123",
    },
    {
      src: "http://audio-cdn/MIKA - Lollipop.mp3",
      artist: "Mika",
      name: "Lollipop",
      img: "http://audio-avatar-cdn/mika.jpg",
      id: "66575568425354321",
    },
  ];
  const onActionsClick = (audio) => {
    console.log(audio); // data[0]
  };
  const actions = [
    (audio) => (
      <div key={"a"} onClick={() => onActionsClick(audio)}>
        <svg
          className="icon pointer"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id={3936}
          style={{
            width: "1.5em",
            height: "1.5em",
            verticalAlign: "middle",
            fill: "currentcolor",
            overflow: "hidden",
            color: "rgb(134, 134, 134)",
          }}
        >
          <path
            d="M711.713554 104.804974c-77.222779 0-151.3388 35.948747-199.713554 92.53451-48.374754-56.585763-122.490775-92.53451-199.713554-92.53451-136.915299 0-244.094344 107.180068-244.094344 244.094344 0 167.537737 150.894685 304.453037 379.456265 511.933485l64.352657 58.361199 64.352657-58.361199C804.913213 653.353378 955.808922 516.438079 955.808922 348.900342 955.808922 211.985042 848.628854 104.804974 711.713554 104.804974zM516.660136 795.149848l-4.660136 4.216022-4.660136-4.216022C296.308543 603.64628 156.952658 477.160517 156.952658 348.900342c0-88.539522 66.793242-155.332764 155.332764-155.332764 68.346621 0 134.917806 44.158732 158.217465 104.738459l82.770122 0c23.521716-60.579727 90.092901-104.738459 158.439522-104.738459 88.539522 0 155.332764 66.793242 155.332764 155.332764C867.046319 477.160517 727.690434 603.64628 516.660136 795.149848z"
            p-id={3937}
          />
        </svg>
      </div>
    ),
  ];
  const DynamicComponentWithNoSSR = dynamic(
    () => import("react-cool-music-player"),
    { ssr: false }
  );

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
              <Footer />
            </div>
          </div>
        </div>
        <div className="wrapper-cooplayer">
          <DynamicComponentWithNoSSR

            data={data}
            primaryColor={"red"}
            volume={0.9}
            actions={actions}
          />
        </div>
        <style jsx>
          {`
            .wrapper-cooplayer {
              position: fixed;
              left: 0;
              bottom: 0;
              width: 100%;
              background-color: red;
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
