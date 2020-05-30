import React, { useState } from "react";
import { withRouter } from "react-router";
import {
    BrowserRouter as Router,
    Switch,
    useLocation
} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function Example() {
    const [name, setName] = useState("");
    const location = useLocation()
    // console.log(location.pathname);
    const [loading, setLoading] = useState(false);

    const initialValues = {
        email: "",
        password: "",
        // email: "admin@demo.com",
        // password: "demo",
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


      const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Wrong email format")
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required('Required'),
        //   .required(
        //     intl.formatMessage({
        //       id: "AUTH.VALIDATION.REQUIRED_FIELD",
        //     })
        //   ),
        password: Yup.string()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required('Required'),
        //   .required(
        //     intl.formatMessage({
        //       id: "AUTH.VALIDATION.REQUIRED_FIELD",
        //     })
        //   ),
      });
    

      
    const formik = useFormik({
        initialValues,
        validationSchema:LoginSchema,
        onSubmit:(value => {
            console.log(value)
        })
    })

    return (
        <div className="login-form login-signin" id="kt_login_signin_form">
            {/* begin::Head */}
            <div className="text-center mb-10 mb-lg-20">
                <h3 className="font-size-h1">
                    Login Account
                </h3>
                <p className="text-muted font-weight-bold">
                    Enter your username and password
        </p>
            </div>
            {/* end::Head */}

            {/*begin::Form*/}
            <form
                onSubmit={formik.handleSubmit}
                className="form fv-plugins-bootstrap fv-plugins-framework">

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
                        placeholder="password"
                        type="password"
                        className={`form-control form-control-solid h-auto py-5 px-6 password `}
                        name="password"
                        />
                </div>

                <button
                    // id="kt_login_signin_submit"
                    id="testSubmit"
                    type="submit"
                    className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
                    >
                    <span>Sign In</span>
                    {/* <span className="ml-3 spinner spinner-white"></span> */}
                </button>

            </form>
            {/*end::Form*/}


        </div>
    )
}

export default Example

