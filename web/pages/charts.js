import React, { useEffect, useContext } from "react";
import { Cover } from "../component/cover/cover";
import { ModalContext } from "../config/context/ModalProvider";
export default function Charts() {
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/charts");
  }, []);
  return (
    <div>
      <Cover text={"CHARTS"} img={"https://source.unsplash.com/NYrVisodQ2M"} />

      <div className="container-fluid  justify-content-center">
        <p>charts</p>
      </div>
    </div>
  );
}
