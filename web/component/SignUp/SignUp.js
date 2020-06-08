import React, { useState } from "react";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {Modal} from 'react-bootstrap'
import * as Yup from "yup";
import Link from "next/link";
import SocialIcon from "../socialLogin";
import Select from "../Select/Select";

export default function SignUpModal(props) {
  const [SignInShow, setSignInShow] = useState(false)

  const RegisSchema = Yup.object().shape({
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
          <div className="form-group">
            <h3> Welcome! Let's create your profile </h3>
            <span className="text-sm-left txt2" id="describe">
              {" "}
              Getting in is easy. Use one of your social network or start fresh
              with an email address Already have a Myspace account?
              {/* <Link href="/">
                <a className="txt1">Sign in</a>
              </Link> */}
            </span>{" "}
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={RegisSchema}
            onSubmit={(values) => {
              // {           setShow(false)
              //             setSelectShow(true)
              const EmailPass = setState(values);
              Select(EmailPass);
            }}

            // Counter
            // .auth()
            //   .createUserWithEmailAndPassword(values.email, values.password)
            //   .then((values) => {
            //     // props.onHide();
            //     console.log(values);
            //     setState(values);
            //     Counter
            //     .auth()
            //       .currentUser.user.sendEmailVerification()
            //       .then(function () {
            //         // Email sent.
            //       })
            //       .catch(function (error) {
            //         // An error happened.
            //       });
            //     axios
            //       .post(
            //         "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/Add-singup",
            //         {
            //           uid: values.user.uid,
            //           type: 0,
            //         }
            //       )
            //       .then((res) => {
            //         console.log(res);
            //       })
            //       .catch((error) => {
            //         console.log(error);
            //       });
            //   })
            //   .catch((error) => {
            //     var errorCode = error.code;
            //     var errorMessage = error.message;
            //     console.log(errorCode, errorMessage);
            //   })
            // }
          >
            {({ errors, touched }) => (
              <Form>
                <div className="form-group">
                  <label className="input-title"> Email </label>
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
                  <SocialIcon />
                </div>
                <div className="footer">
                  <Button type="submit"> Create account </Button>
                </div>
              </Form>
            )}
          </Formik>
          <br />
        </Modal.Body>
      </Modal>
    </>
  );
}
