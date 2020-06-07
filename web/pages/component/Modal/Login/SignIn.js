import { Modal } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import React , { useState } from 'react'
import Button from "../../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Facebook from "../../../../assets/img/icon/Facebook.png";
import Twitter from "../../../../assets/img/icon/Twitter.png";
import Google from "../../../../assets/img/icon/Google.png";
import Counter from '../../../../api/functions/config/config'
import SignInSuccess from './LoginSuccess'

export default function SignInPage(props) {
  const [show, setShow] = React.useState(true);
  const [successShow, setSuccessShow] = React.useState(false);
  const handleClose = () => Router.push("/")
  
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
      <Modal
      show={show}
      onHide={handleClose}
      aria-labelledby="contained-modal-title-center"
      centered
      >
        <Modal.Header style={{border: 0}} className="header" closeButton></Modal.Header>
        <Modal.Body>
          <div  className="form-group " >
          <div align="center">
            <h3> Sign in </h3>
            <span className="text-sm-left txt2" id="describe">
              Start listening with myspec.
            </span>
            <Link href="../Register/SignUp" ><a>Sign up</a></Link>
            </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) =>
              Counter
              .auth()
                .signInWithEmailAndPassword(values.email, values.password)
                .then(() => {
                  // setShow(false)
                  setSuccessShow(true);
                  console.log("Ok");
                })
                .catch((error) => {
                  console.log(error);
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
                  <Link href="/">
                    <a>
                      <img src={Facebook} />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img src={Twitter} />
                    </a>
                  </Link>
                  <Link href="/">
                    <a>
                      <img src={Google} />
                    </a>
                  </Link>
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
        </Modal.Body>
      </Modal>
      <SignInSuccess show={successShow} onHide={handleClose} />
    </>
  );
}
