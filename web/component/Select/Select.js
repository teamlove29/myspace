import React, { useState } from "react";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Modal } from "react-bootstrap";
import axios from "axios";
import * as Yup from "yup";
import { Router } from "next/router";
import Firebase from "../../api/functions/config/config";
import RegisSuccess from '../Success/RegisSuccess'

export default function SelectModal(props) {
  const [RegisSuccessShow, setRegisSuccessShow] = useState(false)
  return (
    <>
      <Modal {...props}>
        <div className="form-group" align="center">
          <h3> Select the option the best describe you. </h3>
          <span className="text-sm-left txt2" id="describe">
            Select the option the best describe you.
          </span>
          <Formik
            initialValues={{ type: "" }}
            onSubmit={(values) => {
              // console.log(values)
              // console.log(props.data.email, props.data.password)
              Firebase.auth()
                .createUserWithEmailAndPassword(
                  props.data.email,
                  props.data.password
                )
                .then((result) => {
                  Firebase.auth().currentUser.sendEmailVerification().then(function (re) {
                    // Email sent.
                    console.log(re);
                    console.log("Email send!!");
                    setRegisSuccessShow(true)
                    // axios
                    //   .post(
                    //     "https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/Add-singup",
                    //     {
                    //       uid: result.user.uid,
                    //       type: values.type,
                    //     }
                    //   )
                    //   .then((res) => {
                    //     console.log(res)
                    //   })
                    //   .catch((error) => {
                    //     var errorCode = error.code;
                    //     var errorMessage = error.message;
                    //     console.log(errorCode, errorMessage);
                    //   });
                  });
                });
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label className="input-title"> Listen to music </label>
                <Field
                  name="type"
                  type="radio"
                  value="1"
                  className={`input-frm ${
                    touched.Option
                      ? errors.Option
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="email"
                />
                {props.value}
                <label className="input-title">Artist</label>
                <Field
                  name="type"
                  type="radio"
                  value="2"
                  className={`input-frm ${
                    touched.Option
                      ? errors.Option
                        ? "is-invalid"
                        : "is-valid"
                      : ""
                  }`}
                  id="pass"
                />
                <br />
                <div className="footer">
                  <Button type="submit"> Finish </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </Modal>
      <RegisSuccess show={RegisSuccessShow} onHide={() => setRegisSuccessShow(false)} />
    </>
  );
}
