import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "../../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Facebook from "../../../../assets/img/icon/Facebook.png";
import Twitter from "../../../../assets/img/icon/Twitter.png";
import Google from "../../../../assets/img/icon/Google.png";
import firebase from "firebase";
import Router from "next/router";
import Counter from "../../../../api/functions/config/config";
import SelectModal from "./Selection";
import axios from "axios";

export default function SignUpPage(props) {
  const [show, setShow] = useState(true);
  const [SelectShow, setSelectShow] = useState(false);
  const handleClose = () => Router.push("/");
  const [state, setState] = useState(null);

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
      <Modal
        {...props}
        onHide={handleClose}
        show={show}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header
          style={{ border: 0 }}
          className="header"
          closeButton
        ></Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <h3> Welcome! Let's create your profile </h3>
            <span className="text-sm-left txt2" id="describe">
              {" "}
              Getting in is easy. Use one of your social network or start fresh
              with an email address Already have a Myspace account?
              <Link href="../Login/SignIn">
                <a className="txt1">Sign in</a>
              </Link>
            </span>{" "}
          </div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={RegisSchema}
            onSubmit={(values) =>
              // {           setShow(false)
              //             setSelectShow(true)
              //             console.log(values)}
              Counter.auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then((values) => {
                  // props.onHide();
                  console.log(values);
                  setState(values);
                  axios
                    .post(
                      "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/Add-singup",
                      {
                        uid: values.user.uid,
                        type: 0,
                      }
                    )
                    .then((res) => {
                      console.log(res);
                      setShow(false);
                      setSelectShow(true);
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                })
                .catch((error) => {
                  var errorCode = error.code;
                  var errorMessage = error.message;
                  console.log(errorCode, errorMessage);
                })
            }
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
                  <Link href="#">
                    <a>
                      <img src={Facebook} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <img src={Twitter} />
                    </a>
                  </Link>
                  <Link href="#">
                    <a>
                      <img src={Google} />
                    </a>
                  </Link>
                </div>
                <div className="footer">
                  <Button type="submit"> Create account </Button>
                </div>
              </Form>
            )}
          </Formik>
          <br />
        </Modal.Body>
        <style jsx>{`
          h3 {
            font-weight: 750;
            font-size: 25px;
            align-items: center;
            padding-left: 5px;
          }

          a {
            font-size: 12px;
            color: rgb(224, 139, 28);
            padding-left: 5px;
          }

          img {
            width: 18px;
            height: 18px;
          }

          .txt2 {
            font-size: 11px;
            color: #b6b6b6;
          }

          .input-title {
            font-size: 13px;
          }

          .input-frm {
            border-color: #e7e7e7;
            font-size: 13px;
          }

          .header {
            border: 0;
          }

          .footer {
            align-items: center;
            margin-left: 150px;
          }
        `}</style>
      </Modal>
      <SelectModal show={SelectShow} onHide={() => setSelectShow(false)} />
    </>
  );
}
