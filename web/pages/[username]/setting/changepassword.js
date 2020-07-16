import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import MenuSetting from "../../../component/menuSetting";
import { ModalContext } from "../../../config/context/ModalProvider";
import firebase from "../../../config/config";
import { Alert, Button } from "../../../component/modal/style";
import LoadPage from "../../../container/loadPage";
export default function changpassword() {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember,dataMember } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;
  const [passwordShown, setPasswordShown] = useState(false);
  var user = firebase.auth().currentUser;

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  const initialValues = {
    currentpassword: "",
    newpassword: "",
    confirmpassword: "",
  };

  const Schema = Yup.object().shape({
    currentpassword: Yup.string().required(""),
    newpassword: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    // .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmpassword: Yup.string()
      .oneOf(
        [Yup.ref("newpassword"), null],
        "Confirm password must same as password"
      )
      .required("password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setStatus("")
      var user = firebase.auth().currentUser;
      var cred = firebase.auth.EmailAuthProvider.credential(
        user.email,
        value.currentpassword
      );
   
   setTimeout(() => {
    try {
      user
        .reauthenticateWithCredential(cred)
        .then((res) => {
          user
            .updatePassword(value.newpassword)
            .then((res) => {
              formik.resetForm();
              setStatus("เปลี่ยนรหัสผ่านสำเร็จ");
            })
            .catch((error) => {
              formik.resetForm();
              if (err.code === "auth/wrong-password")
                setStatus("รหัสผ่านปัจุบันไม่ถูกต้อง");
              console.log("An error happened.", error.code);
            });
            
        })
        .catch((err) => {
          formik.resetForm();
          if (err.code === "auth/wrong-password")
            setStatus("รหัสผ่านปัจุบันไม่ถูกต้อง");
          console.log(err.code);
        });
    } catch (error) {
      formik.resetForm();
      if (err.code === "auth/wrong-password")
        setStatus("รหัสผ่านปัจุบันไม่ถูกต้อง");
      console.log(error.code);
    }
   }, 500)
   

      // Prompt the user to re-provide their sign-in credentials
      // user
      //   .reauthenticateWithCredential(credential)
      //   .then(function () {
      //     // User re-authenticated.
      //   })
      //   .catch(function (error) {
      //     // An error happened.
      //   });

      setTimeout(() => {
        setSubmitting(false);
      }, 1000);
    },
  });

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };


  if (dataMember === undefined) {
    return <LoadPage />;
  }

  return (
    <>
      {verifyMember && (
        <MenuSetting>
          {formik.status ? (
            <Alert
              className={
                formik.status === "เปลี่ยนรหัสผ่านสำเร็จ"
                  ? "bg-success text-light "
                  : "text-dark "
              }
            >
              {formik.status}
            </Alert>
          ) : null}

          <form onSubmit={formik.handleSubmit}>
            <h5 className="font-Regular mt-5">Change Password</h5>

            {/* begin currentpassword*/}
            <div className="form-group row mt-5">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">
                Current Password
              </label>
              <div className=" col-lg-6 col-xl-5">
                <input
                  className={`form-control " ${getInputClasses(
                    "currentpassword"
                  )}`}
                  type={passwordShown ? "text" : "password"}
                  name="currentpassword"
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("currentpassword")}
                />
                {formik.touched.currentpassword &&
                formik.errors.currentpassword ? (
                  <div className="text-danger font-13">
                    {formik.errors.currentpassword}
                  </div>
                ) : null}
              </div>

              {passwordShown && (
                <span
                  onClick={togglePasswordVisiblity}
                  class="material-icons my-auto col-auto col-lg-1 col-xl-1 pointer btn btn-secondary btn-sm"
                >
                  visibility_off
                </span>
              )}

              {passwordShown === false && (
                <span
                  onClick={togglePasswordVisiblity}
                  class="material-icons my-auto col-auto col-lg-1 col-xl-1 pointer btn btn-secondary btn-sm"
                >
                  visibility
                </span>
              )}
            </div>
            {/* End currentpassword */}
            {/* begin newpassword*/}
            <div className="form-group row mt-5">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">
                Enter New Password
              </label>
              <div className="col-lg-6 col-xl-6">
                <input
                  className={`form-control " ${getInputClasses("newpassword")}`}
                  type={passwordShown ? "text" : "password"}
                  name="newpassword"
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("newpassword")}
                />
                {formik.touched.newpassword && formik.errors.newpassword ? (
                  <div className="text-danger font-13">
                    {formik.errors.newpassword}
                  </div>
                ) : null}
              </div>
            </div>
            {/* End newpassword */}
            {/* begin confirmpassword*/}
            <div className="form-group row ">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">
                Confirm Password
              </label>
              <div className="col-lg-6 col-xl-6">
                <input
                  className={`form-control " ${getInputClasses(
                    "confirmpassword"
                  )}`}
                  type={passwordShown ? "text" : "password"}
                  name="confirmpassword"
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("confirmpassword")}
                />
                {formik.touched.confirmpassword &&
                formik.errors.confirmpassword ? (
                  <div className="text-danger font-13">
                    {formik.errors.confirmpassword}
                  </div>
                ) : null}
              </div>
            </div>
            {/* End confirmpassword */}

            <div className="d-flex offset-md-3">
              <Button
                className="btn"
                type="submit"
                disabled={formik.isSubmitting}
              >
                Save changes
              </Button>
            </div>
          </form>
        </MenuSetting>
      )}
    </>
  );
}
