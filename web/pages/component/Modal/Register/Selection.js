import React, { useState } from "react";
import { Modal, Card } from "react-bootstrap";
import Button from "../../button/loginButton";
import Listener from "../../../../assets/img/option/Listen to music.png";
import Artist from "../../../../assets/img/option/Artits.png";
import RegisterSuccess from "../RegisterSuccess";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { Router } from "next/router";
export default function SelectModal(props) {
  const [registerModalShow, setRegisterSuccessModal] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => Router.push("/");

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        {...props}
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body closeButton>
          <div className="form-group" align="center">
            <h3> Select the option the best describe you. </h3>
            <span className="text-sm-left txt2" id="describe">
              Select the option the best describe you.
            </span>
            <Formik
              initialValues={{ type: "" }}
              onSubmit={(values) => {
                console.log(values)
                setShow(false)
                setRegisterSuccessModal(true)
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
        </Modal.Body>
      </Modal>
      <RegisterSuccess
        show={registerModalShow}
        onHide={() => setRegisterSuccessModal(false)}
      />
    </>
  );
}
