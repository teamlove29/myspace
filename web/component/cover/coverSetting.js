import React, { useState, useEffect, useContext } from "react";
import AvatarEditor from "react-avatar-editor";
import { ModalContext } from "../../config/context/ModalProvider";

const CoverSetting = ({ file, hendleCancel, saveCover }) => {
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState("");
  const [scale, setScale] = useState(1);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  const { height, width } = useWindowDimensions();
  const { setImageBlobCover, coverMember } = useContext(ModalContext);

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
        const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
        fetch(canvasScaled)
          .then((res) => res.blob())
          .then((blob) => {
            var cdate = Date.now(); // วันที่สร้าง
            var ext = imageURL.name.split(".").slice(-1)[0]; //นามสกุลไฟล์็
            var ext2 = imageURL.name.split("." + ext).slice(0)[0]; // ชื่อไฟล์
            var fileNames = ext2 + cdate + "." + ext;
            blob.name = fileNames;
            setImageBlobCover(blob);
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
            image={imageURL}
            height={200}
            width={width < 991 ? width : width - 240}
            position={position}
            onPositionChange={handlePositionChange}
            color={[120, 120, 120, 0.9]} // RGBA
            border={0}
            scale={scale}
            rotate={0}
            className=""
            style={{
              position: "absolute",
              top: "0%",
            }}
          />
        </>
      ) : (
        // coverMember

        <img
          width={width - 240}
          src={
            imageCrop != ""
              ? imageCrop
              : coverMember != undefined
              ? coverMember
              : ""
          }
          alt=""
          className="border-0 coverSetting"
        />
      )}

      <style jsx>
        {`
          .coverSetting {
            top: 0;
            position: absolute;
            background-color: #252525;
            background-position: center;
            background-repeat: no-repeat;
            height: 205px;
            top: 0%;
            min-width: 991px;
          }

          @media screen and (max-width: 991px) {
            .coverSetting {
              min-width: 991px;
              top: 5%;
            }
          }
        `}
      </style>
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
