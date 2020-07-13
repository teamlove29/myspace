import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../component/modal/style";
import { ModalContext } from "../../../config/context/ModalProvider";
import MenuSetting from "../../../component/menuSetting";
import LoadPage from "../../../container/loadPage";
import Axios from "axios";
import AvatarEditor from "react-avatar-editor";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import firebase from "../../../config/config";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  const {
    nameMember,
    header,
    dataMember,
    imageBlobCover,
    setImageBlobCover,
    setCurrentUser,
    avatarMember,
    coverMember,
  } = useContext(ModalContext);
  const [editor, setEditor] = useState();
  const [imageURL, setImageURL] = useState("");
  const [imageCrop, setImageCrop] = useState();
  const [editing, setEditing] = useState(false);
  const [scale, setScale] = useState(1);
  const [imageBlob, setImageBlob] = useState(null);
  const [allowZoomOut, setAllowZoomOut] = useState(false);
  const [position, setposition] = useState({ x: 0.5, y: 0.5 });
  const verifyMember = username != nameMember ? false : true;
  const typeMember = dataMember != undefined ? dataMember.mem_type : null;
  const setEditorRef = (editor) => setEditor(editor);

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
            setImageBlob(blob);
            setImageCrop(window.URL.createObjectURL(blob));
            setEditing(false);
          });
      }
    }
    setScale(1);
  };

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

  const handleScale = (e) => {
    const scale = parseFloat(e.target.value);
    setScale(scale);
  };

  const handlePositionChange = (position) => {
    setposition(position);
  };

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

  var initialValues = {
    avatar: null,
    cover: null,
    displayname: nameMember,
    firstname: dataMember != undefined ? dataMember.mem_first_name : "",
    lastname: dataMember != undefined ? dataMember.mem_last_name : "",
    email: dataMember != undefined ? dataMember.mem_email : "",
    country: dataMember != undefined ? dataMember.mem_country : "",
    website: dataMember != undefined ? dataMember.mem_website : "",
    aboutyou: dataMember != undefined ? dataMember.mem_about_you : "",
    instagram: dataMember != undefined ? dataMember.artists_instagram : "",
    twitter: dataMember != undefined ? dataMember.artists_twitter : "",
    facebook: dataMember != undefined ? dataMember.artists_facebook : "",
  };

  const Schema = Yup.object().shape({
    displayname: Yup.string().required("Required").min(6, "Min length is 6"),
    aboutyou: Yup.string().max(200, "200 character limit"),
  });

  const mem_avatar = dataMember != undefined ? dataMember.mem_avatar : "";
  const mem_cover = dataMember != undefined ? dataMember.mem_cover : "";
  const formik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      Swal.fire({
        position: "top",
        title: "Are you sure?",
        text: "You won't be edit this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, edit it!",
      }).then((result) => {
        if (result.value) {
          // ok for someting
          const data = {
            first_name: values.firstname,
            last_name: values.lastname,
            email: values.email,
            display_name: values.displayname,
            about_you: values.aboutyou,
            country: values.country,
            website: values.website,
            avatar:
              imageBlob != null
                ? imageBlob.name
                : avatarMember != undefined
                ? mem_avatar
                : null,
            cover:
              imageBlobCover != null
                ? imageBlobCover.name
                : coverMember != undefined
                ? mem_cover
                : null,
            instagram: values.instagram,
            twitter: values.twitter,
            facebook: values.facebook,
          };

          try {
            Axios.post(process.env.API_URL + "/edit_front-profile/edit", data, {
              headers: {
                authorization: header,
              },
            })
              .then(async (res) => {
                if (imageBlob != null) await uploadToFirebase(imageBlob);
                if (imageBlobCover != null)
                  await uploadToFirebase(imageBlobCover);
                if (nameMember != values.displayname) setCurrentUser(true);

                Swal.fire({
                  allowOutsideClick: false,
                  onClose: false,
                  position: "top",
                  icon: "success",
                  title: "Your work has been saved",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setSubmitting(false);
                console.log(res);


                console.log(nameMember != values.displayname);
                setTimeout(() => {       
                    router.push(
                      "/[username]/setting" ,
                      "/" + values.displayname + "/setting"
                    ).then(()=>{
                      router.reload();
                    })
                   
                  

                }, 1500);
              })
              .catch((err) => {
                setSubmitting(false);
                console.log(err);
              });
          } catch (error) {
            setSubmitting(false);
            console.log(error);
          }
        } else {
          setSubmitting(false);
        }
      });
    },
  });

  if (dataMember === undefined) {
    return <LoadPage />;
  }

  return (
    <>
      {verifyMember && (
        <>
          <MenuSetting file={formik.values.cover}>
            <form onSubmit={formik.handleSubmit}>
              <div
              style={{zIndex:"2"}}
              className="camera_circle  d-none d-lg-block mt-2">
                
                <label htmlFor="cover">
                  <span className="material-icons camera_alt">camera_alt</span>
                  <input
                    accept="image/*"
                    type="file"
                    id="cover"
                    name="file"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "cover",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                </label>
              </div>

              <h5 className="font-Regular mt-5">Your Picture</h5>
              <div className="row mt-4">
                {/* image */}
                <div className="col-12 col-sm-12 col-md-3 col-xl-2">
                  {imageURL != "" && editing ? (
                    <div>
                      <AvatarEditor
                        ref={setEditorRef}
                        image={imageURL}
                        width={150}
                        height={150}
                        position={position}
                        onPositionChange={handlePositionChange}
                        color={[120, 120, 120, 0.9]} // RGBA
                        borderRadius={150}
                        border={10}
                        scale={scale}
                        rotate={0}
                        className="editor-canvas "
                      />
                      <div class="form-row mt-3">
                        <span>Zoom : </span>
                        <input
                          name="scale"
                          type="range"
                          onChange={handleScale}
                          min={allowZoomOut ? "0.1" : "1"}
                          max="3"
                          step="0.01"
                          defaultValue="1"
                        />
                      </div>

                      <a
                        className="btn-block btn btn-primary mt-3"
                        onClick={onCrop}
                      >
                        Save
                      </a>
                      <a
                        className="btn-block btn btn-danger mt-2"
                        onClick={() => {
                          setEditing(false);
                          setImageBlob(null);
                          setScale(1);
                        }}
                      >
                        Cancel
                      </a>
                    </div>
                  ) : null}
                  {/* <PreviewAvatar file={formik.values.avatar} />
                   */}

                  {editing === false && (
                    <img
                      width={150}
                      height={150}
                      className="rounded-circle"
                      src={
                        imageCrop != undefined
                          ? imageCrop
                          : avatarMember != process.env.AVATARHOLDER
                          ? avatarMember
                          : process.env.AVATARHOLDER
                      }
                    />
                  )}
                </div>
                {/* Choose file */}
                <div className="col-12  col-sm-12  col-md-8 col-xl-7 ">
                  <p className="text-muted">
                    Uploaded images will be resized and square cropped from the
                    top. In most places, your image will be displayed in a
                    circle, like the example.
                  </p>
                  <label htmlFor="avatar">
                    Choose file
                    <input
                      accept="image/*"
                      type="file"
                      id="avatar"
                      name="file"
                      onChange={(event) => {
                        formik.setFieldValue(
                          "avatar",
                          event.currentTarget.files[0]
                        );
                        handleNewImage(event);
                      }}
                    />
                  </label>
                </div>
              </div>
              <h5 className="font-Regular mt-5">It's All About You, Baby!</h5>
              {/* begin displayname */}
              <div className="form-group row mt-5">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Display Name
                </label>
                <div className="col-lg-6 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses(
                      "displayname"
                    )}`}
                    type="text"
                    name="displayname"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("displayname")}
                  />
                  {formik.touched.displayname && formik.errors.displayname ? (
                    <div className="text-danger font-13">
                      {formik.errors.displayname}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End nameDisplay */}

              {/* begin firstname */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Firstname
                </label>
                <div className="col-lg-6 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses("firstname")}`}
                    type="text"
                    name="firstname"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("firstname")}
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <div className="text-danger font-13">
                      {formik.errors.firstname}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End firstname */}
              {/* begin lastname */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Lastname
                </label>
                <div className="col-lg-6 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses("lastname")}`}
                    type="text"
                    name="lastname"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("lastname")}
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <div className="text-danger font-13">
                      {formik.errors.lastname}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End lastname */}
              {/* begin email */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Email
                </label>
                <div className="col-lg-6 col-xl-6">
                  <input
                    readOnly={true}
                    className={`form-control " ${getInputClasses("email")}`}
                    type="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-danger font-13">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End email */}

              {/* begin Country */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Country
                </label>
                <div className="col-lg-6 col-xl-6">
                  <select
                    className={`form-control " ${getInputClasses("country")}`}
                    name="Country"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("country")}
                  >
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-danger font-13">
                        {formik.errors.country}
                      </div>
                    ) : null}
                    <option value="" label="None" />
                    <option value="thailand" label="Thailand" />
                    <option value="chaina" label="Chaina" />
                    <option value="usa" label="USA" />
                  </select>
                </div>
              </div>
              {/* End Country */}
              {/* begin Website */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Website
                </label>
                <div className="col-lg-6 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses("website")}`}
                    type="text"
                    name="website"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("website")}
                  />
                  {formik.touched.website && formik.errors.website ? (
                    <div className="text-danger font-13">
                      {formik.errors.website}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End Website */}
              {/* begin AboutYou */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  About You
                </label>
                <div className="col-lg-6 col-xl-6">
                  <textarea
                    rows="8"
                    className={`form-control  " ${getInputClasses("aboutyou")}`}
                    type="text"
                    name="aboutyou"
                    disabled={formik.isSubmitting}
                    {...formik.getFieldProps("aboutyou")}
                  />
                  {formik.touched.aboutyou && formik.errors.aboutyou ? (
                    <div className="text-danger font-13">
                      {formik.errors.aboutyou}
                    </div>
                  ) : null}
                  <small className="text-muted">
                    200 character limit, plain text only.
                  </small>
               
                  {formik.values.aboutyou.length > 0 &&
                  <>
                     <br/>
                    <small className="text-muted">
                    {formik.values.aboutyou.length} character now.
                  </small>
                  </>
                  }
                
                </div>
                <br />
              </div>

              {/* End AboutYou */}

              {typeMember === 2 ? (
                <>
                  <hr />

                  <h4 className="font-Regular">Social</h4>
                  {/* begin instagram */}
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right">
                      Instagram
                    </label>
                    <div className="col-lg-6 col-xl-6">
                      <input
                        className={`form-control " ${getInputClasses(
                          "instagram"
                        )}`}
                        type="text"
                        name="instagram"
                        disabled={formik.isSubmitting}
                        {...formik.getFieldProps("instagram")}
                      />
                      {formik.touched.instagram && formik.errors.instagram ? (
                        <div className="text-danger font-13">
                          {formik.errors.instagram}
                        </div>
                      ) : null}
                    </div>
                    <br />
                  </div>

                  {/* End instagram */}

                  {/* begin twitter */}
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right">
                      twitter
                    </label>
                    <div className="col-lg-6 col-xl-6">
                      <input
                        className={`form-control " ${getInputClasses(
                          "twitter"
                        )}`}
                        type="text"
                        name="twitter"
                        disabled={formik.isSubmitting}
                        {...formik.getFieldProps("twitter")}
                      />
                      {formik.touched.twitter && formik.errors.twitter ? (
                        <div className="text-danger font-13">
                          {formik.errors.twitter}
                        </div>
                      ) : null}
                    </div>
                    <br />
                  </div>

                  {/* End twitter */}

                  {/* begin facebook */}
                  <div className="form-group row">
                    <label className="col-xl-3 col-lg-3 col-form-label text-right">
                      facebook
                    </label>
                    <div className="col-lg-6 col-xl-6">
                      <input
                        className={`form-control " ${getInputClasses(
                          "facebook"
                        )}`}
                        type="text"
                        name="facebook"
                        disabled={formik.isSubmitting}
                        {...formik.getFieldProps("facebook")}
                      />
                      {formik.touched.facebook && formik.errors.facebook ? (
                        <div className="text-danger font-13">
                          {formik.errors.facebook}
                        </div>
                      ) : null}
                    </div>
                    <br />
                  </div>

                  {/* End facebook */}
                </>
              ) : null}

              <div className="d-flex offset-md-3">
                <Button
                  className=" btn"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Save changes
                </Button>
              </div>
            </form>
          </MenuSetting>
          <style jsx>{`
            label[for="avatar"] {
              background-color: #252525;
              font-size: 13px;
              border: 0.1px solid #272727;
              border-radius: 30px;
              padding: 10px 25px 10px 25px;
              color: white;
              display: inline-block;
              cursor: pointer;
            }
            label[for="avatar"]:hover {
              background: #ddd;
            }
            label[for="avatar"] input {
              display: none;
            }

            .camera_alt {
              padding: 8px;
              color: white;
              transition: 0.3s;
            }

            .camera_alt:hover {
              font-size: 1.5rem;
            }

            label[for="cover"] {
              border: 0 solid #272727;
              border-radius: 30px;
              cursor: pointer;
              position: absolute;
              z-index: 2;
            }

            .camera_circle {
              border: 1px solid white;

              border-radius: 30px;
              width: 42px;
              height: 42px;
              position: absolute;
              top: -9%;
              transition: 0.4s;
            }
            .camera_circle:hover {
              border-radius: 0px;
            }

            label[for="cover"] input {
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
          `}</style>
        </>
      )}
    </>
  );
};

export default Index;
