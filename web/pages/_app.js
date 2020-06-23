import React from "react";
import { ModalProvider } from "../config/context/ModalProvider";
import Navbar from "../component/navbar";
import Aside from "../component/Aside";
import Footer from "../component/Footer";
import Header from '../component/Header';
import CoverMember from '../component/coverMain';
const MyApp = ({ Component, pageProps, stars }) => {
  return (
    <>
    <Header />
    <body id="page-top">
      <ModalProvider>
          <div id="wrapper">
            <Aside />
            <div id="content-wrapper" className="d-flex flex-column">
              <div id="content">
                <CoverMember >
                <Navbar />
              <Component {...pageProps} />
              <Footer />
              </CoverMember>
              </div>
            </div>
          </div>
        
      </ModalProvider>
    </body>
    </>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  const test = "test";
  return { stars: test };
};

export default MyApp;
