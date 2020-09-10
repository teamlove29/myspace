import React, { useEffect, useContext, useState } from "react";
import { ModalContext } from "../../../config/context/ModalProvider";
import MemberPage from "../../../container/memberPage/index";
import AvatarEditor from "react-avatar-editor";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../component/modal/style";
export default function AddPlayList() {
  const { setActiveMenu } = useContext(ModalContext);
  const [editor, setEditor] = useState();
  const [editing, setEditing] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState("");
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  const [scale, setScale] = useState(1);
  useEffect(() => {
    setActiveMenu("/[username]");
  }, []);

  const setEditorRef = (editor) => setEditor(editor);

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "";
      // return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "";
      // return "is-valid";
    }
    return "";
  };
  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };
  const handlePositionChange = (position) => {
    setposition(position);
  };

  var initialValues = {
    coverplaylist: null,
    title: "",
    private: false,
  };

  const Schema = Yup.object().shape({
    title: Yup.string().required("Required").min(6, "Min length is 6"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      setSubmitting(false);
    },
  });

  // begin previewCover playlist
  if (editor) {
    const canvasScaled = editor.getImageScaledToCanvas().toDataURL();
    fetch(canvasScaled)
      .then((res) => res.blob())
      .then((blob) => {
        setImageCrop(window.URL.createObjectURL(blob));
        setEditing(false);
      });
  }
  // end previewCover playlist

  const handleNewImage = (e) => {
    if (e.target.files[0] != undefined) {
      const fileSize = e.target.files[0].size / 1024 / 1024; // in MB
      if (fileSize > 10) {
        alert("File size exceeds 10 MB");
      } else {
        setImageURL(e.target.files[0]);
        setEditing(true);
      }
    }
  };

  return (
    <MemberPage>
      <h5 className="mt-5 text-light font-Regular">Playlist cover</h5>
      <div className="row mt-4">
        {/* image */}
        <div className="col-12 col-sm-12 col-md-3 col-xl-2 if-center ">
          <div>
            {imageURL != "" && editing ? (
              <AvatarEditor
                ref={setEditorRef}
                image={imageURL}
                width={150}
                height={150}
                position={position}
                color={[120, 120, 120, 0.9]} // RGBA
                border={0}
                scale={scale}
                rotate={0}
                className="editor-canvas border-primary "
              />
            ) : null}
          </div>

          {editing === false && (
            <img
              style={{
                backgroundColor: "#363636",
              }}
              width={150}
              height={150}
              src={
                !imageCrop
                  ? "https://htmlcolors.com/color-image/363636.png"
                  : imageCrop
              }
            />
          )}
        </div>
        {/* Choose file */}
        <div className="col-12  col-sm-12  col-md-8 col-xl-7">
          <div className="mt-4  d-md-none"></div>
          <p className="text-muted">
            Uploaded images will be resized and square cropped from the top. In
            most places, your image will be displayed in a circle, like the
            example.
          </p>
          <div className=" if-center">
            <label htmlFor="coverplaylist">
              Choose file
              <input
                accept="image/*"
                type="file"
                id="coverplaylist"
                name="file"
                onChange={(event) => {
                  formik.setFieldValue(
                    "coverplaylist",
                    event.currentTarget.files[0]
                  );
                  handleNewImage(event);
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <h5 className="mt-5 text-light font-Regular">Detalis</h5>
      {/* begin Title */}
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group row mt-5 ">
          <label className="col-2 col-md-2 col-xl-2 col-lg-2 col-form-label text-right text-light">
            Title
          </label>
          <div className="col-10 col-md-6 col-lg-6 col-xl-6">
            <input
              className={`form-control " ${getInputClasses("title")}`}
              type="text"
              name="title"
              disabled={formik.isSubmitting}
              {...formik.getFieldProps("title")}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className="text-danger font-13">{formik.errors.title}</div>
            ) : null}
          </div>
        </div>
        {/* End Title */}

        {/* begin Private */}
        <div className="form-group row mt-4">
          <label className="col-2 col-md-2 col-xl-2 col-lg-2 col-form-label text-right text-light ">
            Private
          </label>
          <div className="col-10 col-md-6 col-lg-6 col-xl-6 mt-1">
            <label className="switch">
              <input
                type="checkbox"
                checked={formik.values.private}
                name="private"
                {...formik.getFieldProps("private")}
              />
              <span className="slider round" />
            </label>
          </div>
        </div>
        {/* End Private */}
        <div className=" offset-md-2  if-center ">
          <Button className=" btn" type="submit" disabled={formik.isSubmitting}>
            Create Playlist
          </Button>
        </div>
      </form>
      <style jsx>{`
        label[for="coverplaylist"] {
          background-color: #252525;
          font-size: 13px;
          border: 0.1px solid #272727;
          border-radius: 30px;
          padding: 10px 25px 10px 25px;
          color: white;
          display: inline-block;
          cursor: pointer;
        }
        label[for="coverplaylist"]:hover {
          background: #ddd;
        }
        label[for="coverplaylist"] input {
          display: none;
        }

        hr {
          margin-bottom: 50px;
          margin-top: 50px;
          background-color: #282828;
        }
        .image-holder {
          background-color: #252525;
          width: 150px;
          height: 150px;
        }

        .switch {
          position: relative;
          display: inline-block;
          width: 60px;
          height: 30px;
        }

        .switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #ccc;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 24px;
          width: 26px;
          left: 4px;
          bottom: 3px;
          background-color: white;
          -webkit-transition: 0.4s;
          transition: 0.4s;
        }

        input:checked + .slider {
          background-color: #2acb7a;
        }

        input:focus + .slider {
          box-shadow: 0 0 1px #2196f3;
        }

        input:checked + .slider:before {
          -webkit-transform: translateX(26px);
          -ms-transform: translateX(26px);
          transform: translateX(26px);
        }

        /* Rounded sliders */
        .slider.round {
          border-radius: 34px;
        }

        .slider.round:before {
          border-radius: 50%;
        }

        @media screen and (max-width: 600px) {
          .if-center {
            text-align: center !important;
          }
        }
      `}</style>
    </MemberPage>
  );
}
