import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../component/modal/style";
import { ModalContext } from "../../../config/context/ModalProvider";
import MenuSetting from "../../../component/menuSetting";
import PreviewAvatar from "../../../component/previewimage/previewavatar";
import Axios from "axios";
import firebase from "../../../config/config";

const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember, header, dataMember } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;
  const typeMember = dataMember != undefined ? dataMember.mem_type : null;
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

  var initialValues = {
    avatar: null,
    cover: null,
    displayname: "",
    firstname: "",
    lastname: "",
    email: "",
    Country: "",
    website: "",
    aboutyou: "",
    instagram: "",
    twitter: "",
    facebook: "",
  };

  const Schema = Yup.object().shape({
    displayname: Yup.string().required("Required").min(6, "Min length is 6"),
  });

  // alert(
  //   JSON.stringify(
  //     {
  //       fileName: values.file.name,
  //       type: values.file.type,
  //       size: `${values.file.size} bytes`,
  //     },
  //     null,
  //     2
  //   )
  // );

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);

      // try {
      //   Axios.post(process.env.API_URL + "/edit", {
      //     headers: { authorization: header },
      //     first_name : "",
      //     last_name : "",
      //     // display_name : "",
      //     about_you : "",
      //     country : "",
      //     website : "",
      //     avatar : "",
      //     cover : "",
      //   })
      //     .then((res) => {
      //       uploadToFirebase(values);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     });
      // } catch (error) {
      //   console.log(error);
      // }

      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    },
  });

  const uploadToFirebase = (values) => {
    const test = Math.random() * values.file.size;
    console.log(test);
    const storageRef = firebase.storage().ref();
    storageRef
      .child(`avatars/${values.file.name}`)
      .put(values.file)
      .then((snapshot) => {
        console.log("Uploaded a blob or file!");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const test = () => {
    const storageRef = firebase.storage().ref();
    storageRef
      .child("avatars/resizes/toodasddsn.png")
      .getDownloadURL()
      .then((url) => {
        console.log(url);
      })
      .catch((err) => console.log(err.code));
  };

  return (
    <>
      {verifyMember && (
        <>
          <MenuSetting file={formik.values.cover} >
            <form onSubmit={formik.handleSubmit}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  position: "absolute",
                  top: "-10%",
                }}
                className="border p-2 rounded-circle  d-none d-lg-block"
              >
                <label htmlFor="cover">
                  <span className="material-icons text-light">camera_alt</span>
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
                  {formik.values.avatar != null ? (
                    <>
                      <PreviewAvatar file={formik.values.avatar} />
                    </>
                  ) : (
                    <>
                      <div className="image-holder rounded-circle border-0 ">
                        {/* <img
                className="rounded-circle border"
                src=""
                alt=""
              /> */}
                      </div>
                    </>
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
                    name="website"
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
                    rows="3"
                    className={`form-control  " ${getInputClasses("aboutyou")}`}
                    type="text"
                    name="AboutYou"
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

            label[for="cover"]:hover {
              background: #ddd;
            }

            label[for="cover"] {
              border: 0 solid #272727;

              border-radius: 30px;
              cursor: pointer;
              position: absolute;
              z-index: 2;
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

// Index.getInitialProps =  (ctx) => {
//   var user = firebase.auth().currentUser;
//   return {
//     stars: user,
//   };
// };
