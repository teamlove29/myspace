import { Modal } from "react-bootstrap";
import React, { useState } from "react";
import Button from "../../../button/loginButton";
import { Formik, Form, Filed, ErrorMessage } from "formik";
import * as Yup from "yup";
import ForgotSuccessModal from "./sendEmail";
export default function forgotPass(props) {
  const [forgotSuccess, setForgotSuccess] = React.useState(false);

  const Forgot = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Please Input Your Email."),
  });

  const SendEmailClick = () => {
    props.onHide();
    setForgotSuccess(true);
  };

  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-center"
        centered
        closeButton
      >
        <Modal.Header className="header" closeButton></Modal.Header>
        <Modal.Body>
          <div className="form-group" align="center">
            <h3> Forgot password </h3>
            <span className="text-sm-left txt2" id="describe">
              ป้อนชื่อผู้ใช้ในการลงทะเบียน <br />{" "}
              เราจะส่งอีเมลแจ้งชื่อผู้ใข้ของคุณพร้อมลิงค์สำหรับรีเซ็ตรหัสผ่าน
            </span>
          </div>
          <div className="form-group">
            <label className="input-title">E-mail / Username</label>
            <input
              className="form-control input-frm"
              type="text"
              name="email"
              id="email"
            />
          </div>
          <br />
          <div className=" row footer">
            <div>
              <button type="button" className="btn btn-light prev-btn">
                Back
              </button>
            </div>
            <Button type="submit">Send</Button>
          </div>
        </Modal.Body>
        <style jsx>{`
          h3 {
            font-weight: 750;
            font-size: 25px;
            align-items: center;
            padding-left: 5px;
          }

          .txt2 {
            font-size: 13px;
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
            margin-left: 80px;
          }

          .text-title {
            font-size: 11px;
            align-items: center;
            margin-left: 30px;
          }

          .prev-btn {
            width: 150px;
            font-weight: 500;
            font-size: 13px;
            border-radius: 25px;
          }
        `}</style>
      </Modal>
    </>
  );
}
