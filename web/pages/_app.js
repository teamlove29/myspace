import React, { useEffect, useState } from "react";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import { ModalProvider } from "../config/context/ModalProvider";
import Navbar from "../component/navbar";
import Aside from "../component/Aside";
import Footer from "../component/Footer";
import Header from "../component/Header";
import LoadPage from "../container/loadPage";

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
  useEffect(() => {
    const start = () => {
      console.log("start");
      setLoading(true);
    };
    const end = () => {
      console.log("findished");
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
      <Header />
      <body id="page-top">
        <ModalProvider>
          <div id="wrapper">
            <Aside />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <Navbar />
                {loading ? <LoadPage /> : <Component {...pageProps} />}
              </div>
              <Footer />
            </div>
          </div>
        </ModalProvider>
      </body>
    </>
  );
};

// MyApp.getInitialProps = async () => {
//   const res = await fetch("https://api.github.com/repos/vercel/next.js");
//   const json = await res.json();
//   const test = json;
//   return { stars: test };
// };

export default MyApp;
