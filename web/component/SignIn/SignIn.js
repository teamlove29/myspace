import React, { useState } from "react";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import Link from "next/link";
import SocialLogin from "../socialLogin";
import Counter from "../../api/functions/config/config";
import SignUp from "../SignUp/SignUp";
import Fotgot from "../Forgot/Forgotpass";
import Firebase from "../../api/functions/config/config";
export default function SignInModal(props) {
  const [SignUpShow, setSignUpShow] = useState(false);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Input Your Email."),
    password: Yup.string()
      .min(3, "Please Input less than 3 Letters")
      .required("Please Input Password"),
  });

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-center" centered>
        <Modal.Header style={{ border: 0 }} closeButton></Modal.Header>
        <Modal.Body>
          <div className="form-group ">
            <div align="center">
              <h3> Sign in </h3>
              <span className="text-sm-left txt2" id="describe">
                Start listening with myspec.
              </span>
              <Link href="/">
                <a
                  className="link"
                  onClick={() => {
                    props.onHide(true);
                    setSignUpShow(true);
                  }}
                >
                  Sign up
                </a>
              </Link>
            </div>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={(values) =>
                Firebase.auth()
                  .signInWithEmailAndPassword(values.email, values.password)
                  .then((res) => {
                    console.log(res);
                    if (res.user.emailVerified) {
                      //This will return true or false
                      console.log("email is verified");
                    } else {
                      console.log("email not verified");
                      alert("email not verified")
                    }
                  })
                  .catch(function (error) {})
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
                    <SocialLogin />
                    <Link href="../Forgot/Forgotpass">
                      <a className="link forgot">forgot password</a>
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
        </Modal.Body>
      </Modal>
      <SignUp show={SignUpShow} onHide={() => setSignUpShow(false)} />
    </>
  );
}
