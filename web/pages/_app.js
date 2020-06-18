import React from "react";
import "./font.css";
import Axios from "axios";
const MyApp = ({ Component, pageProps, stars }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

MyApp.getInitialProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const json = await res.json();
  const test = 'test'
  return { stars: test };
}

export default MyApp;
