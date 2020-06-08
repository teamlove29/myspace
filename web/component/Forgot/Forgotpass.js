import React from "react";
import { Modal } from "react-bootstrap";
import Button from "../button/loginButton";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import SocialIcon from "../socialLogin";
import axios from "axios";

export default function ForgotPass() {
  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-center" centered>
        <Modal.Header style={{ border: 0 }} closeButton></Modal.Header>
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
          <div className="row" style={{ marginLeft: 80 }}>
            <div>
              <button
                type="button"
                onClick={() => history.back("/")}
                className="btn btn-light prev-btn"
              >
                Back
              </button>
            </div>
            <Button>Send</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
