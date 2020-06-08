import React, { useState, Component } from "react";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import * as Yup from "yup";
import Link from "next/link";
import SocialIcon from "../socialLogin";
import Select from "../Select/Select";
import Firebase from "../../api/functions/config/config";

export default function SignUpModal(props) {
  const [SignInShow, setSignInShow] = useState(false);
  const [SelectShow, setSelectShow] = useState(false);
  const [RegisSuccess, setRegisSuccess] = useState(false);

  const [State, setState] = useState({ email: "", password: "" });

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
              with an email address Already have a MySpace Account?
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
              setState({ email: values.email, password: values.password });
              props.onHide();
              setSelectShow(true);
              // Firebase
              // .auth()
              //   .createUserWithEmailAndPassword(values.email, values.password)
              //   .then((values) => {
              //     // props.onHide();
              //     console.log(values);
              //     setState(values);
              //     Firebase
              //     .auth()
              //       .currentUser.sendEmailVerification()
              //       .then(function () {
              //         // Email sent.
              //       })
              //       .catch(function (error) {
              //         // An error happened.
              //       });
              //   });
            }}
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
      <Select
        show={SelectShow}
        onHide={() => setSelectShow(false)}
        data={State}
      />
    </>
  );
}
