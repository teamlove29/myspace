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
    firstName: "Marutthep",
    lastName: "Rompho",
    email: "TeemMarutthep@gmail.com",
    phone: "0965913095",
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
    firstName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
    lastName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    phone: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "min 10 symbols")
      .max(10, "Maximum 10 symbols")
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
                        <div className="form-group row mt-3">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Fist Name
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className={`form-control form-control-lg ${getInputClasses(
                                "firstName"
                              )}`}
                              name="firstName"
                              type="text"
                              placeholder="FirstName"
                              {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName &&
                            formik.errors.firstName ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                  {formik.errors.firstName}
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className={`form-control form-control-lg  ${getInputClasses(
                                "lastName"
                              )}`}
                              name="lastName"
                              type="text"
                              placeholder="LastName"
                              {...formik.getFieldProps("lastName")}
                            />
                            {formik.touched.lastName &&
                            formik.errors.lastName ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">
                                  {formik.errors.lastName}
                                </div>
                              </div>
                            ) : null}
                            <span className="form-text text-muted">
                              If you want your invoices addressed to a company.
                              Leave blank to use your full name.
                            </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Contact Phone
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group input-group-lg ">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="la la-phone" />
                                </span>
                              </div>
                              <input
                                name="tel"
                                type="tel"
                                className={`form-control form-control-lg  ${getInputClasses(
                                  "phone"
                                )}`}
                                name="phone"
                                placeholder="Phone"
                                {...formik.getFieldProps("phone")}
                              />
                              {formik.touched.phone && formik.errors.phone ? (
                                <div className="fv-plugins-message-container">
                                  <div className="fv-help-block">
                                    {formik.errors.phone}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                            <span className="form-text text-muted">
                              We'll never share your email with anyone else.
                            </span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">
                            Email Address
                          </label>
                          <div className="col-lg-9 col-xl-9">
                            <div className="input-group input-group-lg ">
                              <div className="input-group-prepend">
                                <span className="input-group-text">
                                  <i className="la la-at" />
                                </span>
                              </div>
                              <input
                                name="email"
                                type="email"
                                className={`form-control form-control-lg  ${getInputClasses(
                                  "email"
                                )}`}
                                name="email"
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
