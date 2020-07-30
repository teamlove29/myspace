

import React, { useEffect, useContext } from "react";
import { Cover } from "../component/cover/cover";
import { ModalContext } from "../config/context/ModalProvider";
export default function Features() {
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/features");
  }, []);
  return (
    <div>
      <Cover
        height={"270px"}
        text={"FEATURES"}
        img={"https://source.unsplash.com/hxnBkzz9iL4"}
      />



<div
        className="container-fluid  justify-content-center"
        style={{
          position: "relative",
          marginTop: "300px",
          marginBottom: "250px",
          color: "white",
        }}
      >

<p>features</p>
      </div>

    </div>
  );
}
