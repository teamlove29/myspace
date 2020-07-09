import React, { useState, useEffect,useContext } from "react";
import AvatarEditor from "react-avatar-editor";
import { ModalContext } from "../../config/context/ModalProvider";

const CoverSetting = ({ file, hendleCancel, saveCover }) => {
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState('');
  const [scale, setScale] = useState(1);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });

  const { setImageBlobCover,coverMember } = useContext(ModalContext);

  useEffect(() => {
    handleNewImage(file);
    if(saveCover === true) {
      onCrop() 
    }
    if(hendleCancel === true){
      setImageCrop('')
      setImageBlobCover(null)
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
        // coverMember
        
        <img src={
          imageCrop != ''
          ? imageCrop
          : coverMember != undefined
          ? coverMember
          : ''} alt="" className="img-thumbnail border-0 coverSetting" />
      )}

      <style jsx>
        {`
          .coverSetting {
            top: 0;
            right: 0;

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
