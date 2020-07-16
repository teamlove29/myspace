import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import MenuSetting from "../../../component/menuSetting";
import { ModalContext } from "../../../config/context/ModalProvider";
import AvatarEditor from "react-avatar-editor";
import firebase from "../../../config/config";
export default function MyAddress() {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember } = useContext(ModalContext);
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState();
  const [editing, setEditing] = useState(false);
  const [scale, setScale] = useState(1);
  const [allowZoomOut, setAllowZoomOut] = useState(false);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  const verifyMember = username != nameMember ? false : true;

  const setEditorRef = (editor) => setEditor(editor);
  const onCrop = () => {
    if (editor !== null) {
      if (editor) {
        const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
        fetch(canvasScaled)
          .then((res) => res.blob())
          .then((blob) => {
            blob.name = imageURL.name;
            uploadToFirebase(blob); //อัพขึ้น firebase
            setImageCrop(window.URL.createObjectURL(blob));
            setEditing(false);
          });
        //   setImageCrop(window.URL.createObjectURL(blob)
      }
    }
  };

  const handleNewImage = (e) => {
    if (e.target.files[0] != "") {
      const fileSize = e.target.files[0].size / 1024 / 1024; // in MB
      if (fileSize > 10) {
        alert("File size exceeds 10 MB");
      } else {
        setImageURL(e.target.files[0]);
        setEditing(true);
      }
    }
  };

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };

  const handlePositionChange = (position) => {
    setposition(position);
  };

  const uploadToFirebase = (values) => {
    // อัพรูป
    const storageRef = firebase.storage().ref();
    storageRef
      .child(`avatars/${values.name}`)
      .put(values)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {verifyMember && (
        <MenuSetting>
          <h1>Page Account myAddress</h1>
          {imageURL != "" && editing ? (
            <>
              <AvatarEditor
                ref={setEditorRef}
                image={imageURL}
                width={300}
                height={300}
                position={position}
                onPositionChange={handlePositionChange}
                color={[255, 255, 255, 0.6]}  // RGBA
                borderRadius={150}
                border={10}
                scale={scale}
                rotate={0}
                className="editor-canvas "
              />
              <br />
              <p>Zoom:</p>
              <input
                name="scale"
                type="range"
                onChange={handleScale}
                min={allowZoomOut ? "0.1" : "1"}
                max="2"
                step="0.01"
                defaultValue="1"
              />
              <button classNam="btn-block btn" onClick={onCrop}>
                save
              </button>
            </>
          ) : null}

          {editing === false && (
            <img
              width={150}
              height={150}
              className="rounded-circle mt-5 mb-5"
              src={
                imageCrop ||
                "https://firebasestorage.googleapis.com/v0/b/myspace-dev-1ae9e.appspot.com/o/avatars%2Fresizes%2Fplaceholder-human-300x300_300x300.jpg?alt=media&token=13dcd961-f22c-4523-9bd1-9bd54b25a3fa"
              }
            />
          )}

          <br />
          <input
            name="newImage"
            type="file"
            onChange={handleNewImage}
            accept="image/jpeg, image/png,image/jpg"
          />
        </MenuSetting>
      )}
    </>
  );
}
