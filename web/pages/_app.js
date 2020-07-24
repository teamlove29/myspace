import React, { useEffect, useState } from "react";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Router from "next/router";
import JWT from "jsonwebtoken";
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

  // const test =true
  // if (loading === true) {
  //   return  <WaveLoading color="orange" size="large" />;
  // }

  // firebase.auth().onAuthStateChanged(async (user) => {
  //   if (user) {
  //     const uid = await user.uid;
  //     let token = await JWT.sign({ uid: uid }, process.env.SECRET_KEY);
  //     const checksocialLogin = await Axios.post(
  //       process.env.API_URL + "/login-member",
  //       { uid: uid }
  //     );
  //     if (checksocialLogin.status === 200) {
       
  //       try {
  //         const verifyMember = await Axios.get(process.env.API_URL_EDITFRONT, {
  //           headers: { authorization: token },
  //         });
  //         // { expiresIn: '1d' }
  //         const tokenJWT = JWT.sign(
  //           verifyMember.data[0],
  //           process.env.SECRET_KEY
  //         );
  //         localStorage.setItem("token_myspace", token);
  //         localStorage.setItem("profile_myspace", tokenJWT);

  //       } catch (error) {

  //         console.log(error);
  //       }

  //     }
  //   }
  // });

  return (
    <>
      <Header />
      <body id="page-top">
        <ModalProvider>
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
        </ModalProvider>
      </body>
    </>
  );
};

export default MyApp;
