import React, { useState, useEffect, useContext } from "react";
import AvatarEditor from "react-avatar-editor";
import { ModalContext } from "../../config/context/ModalProvider";
import { CoverSettingImage } from "./coverSettingStyle";
const CoverSetting = ({ file, hendleCancel, saveCover }) => {
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState("");
  const [scale, setScale] = useState(1);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  const { height, width } = useWindowDimensions();
  const {
    setImageBlobCover,
    coverMember,
    setXposition,
    setYposition,
  } = useContext(ModalContext);

  useEffect(() => {
    handleNewImage(file);
    if (saveCover === true) {
      onCrop();
    }
    if (hendleCancel === true) {
      setImageCrop("");
      setImageBlobCover(null);
    }
  }, [saveCover, file, hendleCancel]);

  const setEditorRef = (editors) => setEditor(editors);
  const onCrop = () => {
    if (editor !== null) {
      if (editor) {
        const positionX = position.x * 100;
        const positionY = position.y * 100;
        setXposition(positionX.toFixed(0) + "%");
        setYposition(positionY.toFixed(0) + "%");

        var cdate = Date.now(); // วันที่สร้าง
        var ext = file.name.split(".").slice(-1)[0]; //นามสกุลไฟล์็
        var ext2 = file.name.split("." + ext).slice(0)[0]; // ชื่อไฟล์
        var fileNames = ext2 + cdate + "." + ext;
        setImageBlobCover(fileNames);
        const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
        fetch(canvasScaled)
          .then((res) => res.blob())
          .then((blob) => {
            setImageCrop(window.URL.createObjectURL(blob));
          });
      }
    }
  };
  const handlePositionChange = (position) => {
    setposition(position);
  };

  const handleNewImage = (file) => {
    if (file != null) {
      const fileSize = file.size / 1024 / 1024; // in MB
      if (fileSize > 10) {
        alert("File size exceeds 10 MB");
      } else {
        setImageURL(file);
      }
    }
  };
  return (
    <>
      {file != null && hendleCancel != true && saveCover != true ? (
        <>
          <AvatarEditor
            ref={setEditorRef}
            image={file}
            height={200}
            width={width < 991 ? 991 : width - 240}
            position={position}
            onPositionChange={handlePositionChange}
            color={[120, 120, 120, 0.9]} // RGBA
            border={0}
            scale={scale}
            rotate={0}
            className="border-0 coverSetting "
            style={{
              zIndex: "0",
            }}
          />
        </>
      ) : (
        <>
          <CoverSettingImage
            imgCover={
              imageCrop != ""
                ? imageCrop
                : coverMember != undefined
                ? coverMember
                : ""
            }
            width={width < 991 ? 991 : width - 240}
          />
        </>
      )}
    </>
  );
};

export default CoverSetting;

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;

  return {
    width,
    height,
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}
