import React from 'react'
import ModalBlock from '../component/Modal'
import styled from 'styled-components'
import Button from '../component/button/loginButton'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import SocialLogin from '../component/socialLogin'
export default function TestModal() {

    const LoginSchema = Yup.object().shape({
        email: Yup.string()
          .email("Invalid email")
          .required("Please Input Your Email."),
        password: Yup.string()
          .min(3, "Please Input less than 3 Letters")
          .required("Please Input Password"),
      });

    return(
        <>
        <ModalBlock>
        <div  className="form-group " >
          <div align="center">
            <h3> Sign in </h3>
            <span className="text-sm-left txt2" id="describe">
              Start listening with myspec.
            </span>
            <Link href="/" ><a>Sign up</a></Link>
            </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) =>
              Counter
              .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                  props.onHide();
                  setSuccessShow(true);
                  console.log("Ok")
                })
                .catch(() => {
                  console.log("No");
                })
            }
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label className="input-title">Email / Username </label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-control input-frm ${
                      touched.email
                        ? errors.email
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    id="email"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="invalid-feedback"
                  />
                </div>
                <div>
                  <label className="input-title">Password</label>
                  <Field
                    name="password"
                    type="password"
                    className={`form-control input-frm ${
                      touched.password
                        ? errors.password
                          ? "is-invalid"
                          : "is-valid"
                        : ""
                    }`}
                    id="pass"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="invalid-feedback"
                  />
                </div>
                <br />
                <div className="form-group">
                  <span className="txt2"> or </span>
                  <SocialLogin/>
                  <Link href="../forgotPassword/forgotPassword">
                  <a className="forgot">
                    forgot password
                  </a>
                  </Link>
                </div>
                <br />
                <div className="footer">
                  <Button type="submit">Sign in</Button>
                </div>
              </Form>
            )}
          </Formik>
          </div>
        </ModalBlock>
        </>
    )

}