import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Modal, Button } from "react-bootstrap";
import { useHistory, Redirect } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import firebase from "../../config/config";

export default function AddUser(props) {
  const history = useHistory()
  const MySwal = withReactContent(Swal);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false)
    setTimeout(() => {
      history.goBack()
    }, 100)
};
  const handleShow = () => setShow(true);

  useEffect(() => {
    handleShow()
  }, [props.show])
  

  const initialValues = {
    username: "Marutthep",
    email: "TeemMarutthep@gmail.com",
    role:'admin'
  };

  const enableLoading = () => {
    setLoading(true);
  };
  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };




  

  const handleEdit = (value, { setStatus, setSubmitting }) => {
    console.log(value);
    // var auth = firebase.auth();
    // const emailAddress ='test@test.com'
    // auth.sendPasswordResetEmail(emailAddress)
    // .then(() => {
    //   console.log('good')
    // }).catch(function(error) {
    //  console.log(error)
    // });
    // firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
    // .then((reslut) => {
    //   console.log(reslut)
    // })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorMessage)
    // });

    MySwal.fire({
      position:'top',
      icon: "question",
      title: <h1 className="display-5">Are you sure ?</h1>,
      text: "Are you sure you want to edit data ?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, edit it!",
    }).then((result) => {
      // Result.value after click yes
      if (result.value) {
        Swal.fire({
          position:'top',
          icon: "success",
          title: "Edited",
          text: "Your file has been edited.",
          showConfirmButton: false,
        });
        disableLoading();
        setSubmitting(false);
        formik.handleReset();
        handleClose();
      }
    });
  };

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const Userchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Minimum 6 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Userchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        handleEdit(value, { setStatus, setSubmitting });
        disableLoading();
        setSubmitting(false);
        formik.handleReset();
        //  setStatus(errorMessage);
      }, 1000);
    },
  });

  return (
    <>
          <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header >
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row justify-content-center ">
              <div className="col-xl-12 col-xxl-12">
                {/*begin::Form Wizard*/}
                <form onSubmit={formik.handleSubmit} className="form">
                  {/*begin::Step 1*/}
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Username
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className={`form-control  ${getInputClasses(
                                "username"
                              )}`}
                              name="username"
                              type="text"
                              placeholder="username"
                              {...formik.getFieldProps("username")}
                            />
                            {formik.touched.username &&
                            formik.errors.username ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                  {formik.errors.username}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Email Address
                          </label>
                          <div className="col-lg-9 col-xl-9">
                              <input
                                name="email"
                                type="email"
                                className={`form-control  ${getInputClasses(
                                  "email"
                                )}`}
                                readOnly="true"
                                placeholder="Email"
                                {...formik.getFieldProps("email")}
                              />
                              {formik.touched.email && formik.errors.email ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">
                                    {formik.errors.email}
                                  </div>
                                </div>
                              ) : null}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Reset Password
                          </label>
                          <div className="col-lg-9 col-xl-9">
                              <button className="btn btn-sm btn-primary">Reset Password</button>
                          </div>
                        </div>
                        <div className="form-group row">
                      <label className="col-xl-3 col-lg-3 col-form-label">
                        Role
                          </label>
                      <div className="col-lg-9 col-xl-9">
                        <select
                          name="role"
                          class={`form-control  ${getInputClasses(
                            "role"
                          )}`}
                          {...formik.getFieldProps("role")} >
                          <option value="admin">Admin</option>
                          <option value="editor">Editor</option>
                        </select>
                        {formik.touched.role && formik.errors.role ? (
                          <div className="fv-plugins-message-container">
                            <div className="fv-help-block">
                              {formik.errors.role}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                      </div>
                    </div>
                  {/*end::Step 1*/}
                </form>
                {/*end::Form Wizard*/}
              </div>
            </div>

      </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => handleClose()}
            variant="secondary"
            className="btn font-weight-bold px-9 py-4 mr-3">
            cancel
          </Button>

          <Button
            id="kt_login_signin_submit"
            type="submit"
            className={`btn  font-weight-bold px-9 py-4 my-3`}
            disabled={formik.isSubmitting}
            variant="success"
            onClick={formik.handleSubmit}>
            edit
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
