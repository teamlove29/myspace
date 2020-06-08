import React, { useState , useContext } from "react";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ModalBlock from '../Modal/Modal'
import axios from "axios";
import * as Yup from "yup";
import { Router } from "next/router";
import DataSignUp from '../SignUp/SignUp';
import SignUp from "../SignUp/SignUp";

export default function SelectModal(props) {

  const emailpass = useContext(SignUp)

   const [state, setstate] = useState(null)
    return (
        <>
        <ModalBlock {...props}>
        <div className="form-group" align="center">
            <h3> Select the option the best describe you. </h3>
            <span className="text-sm-left txt2" id="describe">
              Select the option the best describe you.
            </span>
            <Formik
              initialValues={{ type: "" }}
              onSubmit={(values) => {
                console.log(values)
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
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <label className="input-title"> Listen to music </label>
                  <Field
                    name="type"
                    type="radio"
                    value="Listener"
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
                    value="Artist"
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
        </ModalBlock>
        </>
    )
}