import React from "react";
import "./font.css";
import Axios from "axios";
import { ModalProvider } from '../config/context/ModalProvider'
const MyApp = ({ Component, pageProps, stars }) => {
  return (
    <ModalProvider>
      <Component {...pageProps} />
    </ModalProvider>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  const test = 'test'
  return { stars: test };
}

export default MyApp;
