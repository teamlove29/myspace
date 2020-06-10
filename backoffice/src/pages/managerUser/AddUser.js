import React, { useState } from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from '../../config/config'

export default function AddUser() {


  const [loading, setLoading] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirmation: "",
    phone: "",
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

const handleedit = (value,{ setStatus, setSubmitting }) => {

  if(value.password != value.passwordConfirmation ){
    setStatus('incorrent verify password')
  }
  else{
    
  }
  disableLoading()
  setSubmitting(false);


  // handleRegis(value)
  // disableLoading();
  // setSubmitting(false);
  // console.log(value)
  //  setStatus(errorMessage);
  
  // firebase.auth().createUserWithEmailAndPassword(value.email, value.password)
  // .then((reslut) => {
  //   console.log(reslut)
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   console.log(errorMessage)
  // });
}


  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

  const Userchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
    lastName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
    email: Yup.string()
      .email("Invalid email")
      .required('Required'),
    password: Yup.string()
    .oneOf([Yup.ref('passwordConfirmation'), null], 'Passwords must match')
      .min(6, "Minimum 6 symbols")
      .required('Required'),
    passwordConfirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .min(6, "Minimum 6 symbols")
      .required('Required'),
    phone: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "min 10 symbols")
      .max(10, "Maximum 10 symbols")
      .required('Required'),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Userchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        handleedit(value,{ setStatus, setSubmitting })
      }, 1000)
    }
  })


  return (
    <>
      {/*begin::Container*/}
      <div className="container">
        {/*begin::Card*/}
        <div className="card ">
          <div className="card-body p-0">
            <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
              <div className="col-xl-12 col-xxl-7">
                {/*begin::Form Wizard*/}
                {formik.status ? (
                  <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
                    <div className="alert-text font-weight-bold">{formik.status}</div>
                  </div>
                ) : null}
                <form
                  onSubmit={formik.handleSubmit}
                  className="form">
                  {/*begin::Step 1*/}
                  <div className="pb-5">
                    <h3 className="mb-10 font-weight-bold text-dark">New User</h3>
                    <hr/>
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="form-group row mt-3">
                          <label className="col-xl-3 col-lg-3 col-form-label">Fist Name</label>
                          <div className="col-lg-9 col-xl-9">
                            <input
                              className={`form-control form-control-lg  ${getInputClasses(
                                "firstName"
                              )}`}
                              name="firstName"
                              type="text"
                              placeholder="FirstName"
                              {...formik.getFieldProps("firstName")}
                            />
                            {formik.touched.firstName && formik.errors.firstName ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.firstName}</div>
                              </div>
                            ) : null}
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
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
                            {formik.touched.lastName && formik.errors.lastName ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.lastName}</div>
                              </div>
                            ) : null}
                            <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
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
                            </div>
                            {formik.touched.phone && formik.errors.phone ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.phone}</div>
                              </div>
                            ) : null}
                            <span className="form-text text-muted">We'll never share your email with anyone else.</span>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
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
                                placeholder="Email"
                                {...formik.getFieldProps("email")}
                              />

                            </div>
                            {formik.touched.email && formik.errors.email ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.email}</div>
                              </div>
                            ) : null}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">Password</label>
                          <div className="col-lg-9 col-xl-9">
                            {/* <div className="input-group input-group-lg input-group-solid"> */}
                              <input
                                name="password"
                                type="password"
                                className={`form-control form-control-lg  ${getInputClasses(
                                  "password"
                                )}`}
                                name="password"
                                placeholder="password"
                                {...formik.getFieldProps("password")}
                              />
                                      {formik.touched.password && formik.errors.password ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.password}</div>
                              </div>
                            ) : null}
                            {/* </div> */}
                          </div>
                        </div>

                        <div className="form-group row">
                          <label className="col-xl-3 col-lg-3 col-form-label">passwordConfirmation</label>
                          <div className="col-lg-9 col-xl-9">
                            {/* <div className="input-group input-group-lg input-group-solid"> */}
                              <input
                                name="passwordConfirmation"
                                type="passwordConfirmation"
                                className={`form-control form-control-lg  ${getInputClasses(
                                  "passwordConfirmation"
                                )}`}
                                name="passwordConfirmation"
                                placeholder="passwordConfirmation"
                                {...formik.getFieldProps("passwordConfirmation")}
                              />
                                      {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (
                              <div className="fv-plugins-message-container">
                                <div className="fv-help-block">{formik.errors.passwordConfirmation}</div>
                              </div>
                            ) : null}
                            {/* </div> */}
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                  {/*end::Step 1*/}
                  <div className="float-right">

                    <button
                      onClick={formik.handleReset}
                      className="btn btn-secondary font-weight-bold px-9 py-4 mr-3"
                    >reset</button>
                    <button
                      id="kt_login_signin_submit"
                      type="submit"
                      disabled={formik.isSubmitting}
                      className={`btn btn-success font-weight-bold px-9 py-4 my-3`}
                    >
                      <span>submit</span>
                      {loading && <span className="ml-3 spinner spinner-white"></span>}
                    </button>
                  </div>


                </form>
                {/*end::Form Wizard*/}
              </div>
            </div>
          </div>
        </div>
        {/*end::Card*/}
      </div>
      {/*end::Container*/}
    </>
  )
}
