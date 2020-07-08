import React, { useState, useEffect } from "react";
import AvatarEditor from "react-avatar-editor";
const CoverSetting = ({ file, hendleCancel, saveCover }) => {
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState();
  const [editing, setEditing] = useState(false);
  const [scale, setScale] = useState(1);
  const [imageBlob, setImageBlob] = useState(1);
  const [allowZoomOut, setAllowZoomOut] = useState(false);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  useEffect(() => {
    handleNewImage(file);
    if(saveCover === true) {
      onCrop() 
    }
    if(hendleCancel === true){
      setImageCrop('')
    }
  }, [saveCover,file,hendleCancel]);

  const setEditorRef = (editors) => setEditor(editors);
  const onCrop = () => {
    if (editor !== null) {
      if (editor) {
        const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
        fetch(canvasScaled)
          .then((res) => res.blob())
          .then((blob) => {
            blob.name = imageURL.name;
            setImageBlob(blob);
            setImageCrop(window.URL.createObjectURL(blob));
            setEditing(false);
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
        setEditing(true);
      }
    }
  };

  return (
    <>
      {hendleCancel != true && saveCover === false ? (
        <AvatarEditor
          ref={setEditorRef}
          image={imageURL}
          height={200}
          width={1200}
          position={position}
          onPositionChange={handlePositionChange}
          color={[120, 120, 120, 0.9]} // RGBA
          border={0}
          scale={scale}
          rotate={0}
          className="coverSetting"
          style={{
            position: "absolute",
            top: "0.2%",
            right: "0",
            left: '10%'
          }}
        />
      ) : (
        <img src={imageCrop || ''} alt="" className="img-thumbnail border-0 coverSetting" />
      )}

      <style jsx>
        {`
          .coverSetting {
            top: 0;
            right: 0;
            left: 10%;
            position: absolute;
            background-color: #252525;
            background-position: center;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            width: 100%;
            height: 205px;
            padding: 0 0;
          }

          @media screen and (max-width: 991px) {
            .coverSetting {
              left: 0;
              top: 5%;
            }
          }
        `}
      </style>
    </>
  );
};

export default CoverSetting;
