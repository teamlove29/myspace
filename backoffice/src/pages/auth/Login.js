import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Login() {

  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const initialValues = {
    // email: "",
    // password: "",
    email: "admin@demo.com",
    password: "demo",
  };

  const enableLoading = () => {
    setLoading(true);
  };
  const disableLoading = () => {
    setLoading(false);
  };

  //ถ้ากดช่องอินพุต + formik.errors ให้ invalid
  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
  });



  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        if (value.email === 'admin@demo.com' && value.password === 'demo') {
          disableLoading();
          localStorage.setItem('access-token-test', 'true');
          window.location.href = "/dashboard";
        } else {
          disableLoading()
          setSubmitting(false);
          setStatus(
            'The login detail is incorrect'
          );
        }
        // submit to backend 
        // login(value.email,value.password)
        // .then( ({data: { accessToken }}) => {
        //   disableLoading();
        //   console.log('Sucess')
        // }).catch(() => {
        //   disableLoading();
        //   setSubmitting(false);
        //   console.log('Noo')
        // })
      }, 1000)

    }
  })




  return (
    <div className="login-form login-signin" >
      {/* begin::Head */}
      <div className="text-center mb-10 mb-lg-20">
        <h3 className="font-size-h1">
          {/* <FormattedMessage id="AUTH.LOGIN.TITLE" /> */}
            Login Account
          </h3>
        <p className="text-muted font-weight-bold">
          Enter your email or username and password
          </p>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework"
      >
        {/* โชว์ Use account admin@demo.com and password demo to continue. */}
        {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : null}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            Forgot Password
              {/* <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" /> */}
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
      
    </div>
  )
}

export default (Login)