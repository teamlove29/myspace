import { Modal } from "react-bootstrap";
import React , { useState } from 'react'
import CorrectIcon from "../common/img-Correct";
import SuccessModal from "../Modal";
import { Router } from "next/router";
export default function RegisterSuccess(props) {
  const [ModalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);
  const handleClose = () => Router.push("/");
  return (
    <>
      <SuccessModal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-center"
        centered
      >
          <h3> สมัครสมาชิกเรียบร้อยแล้ว </h3>
          <span className="text-sm-left txt2" id="describe">
            ระบบได้ส่ง link ไปยัง e-mail ของคุณ
            กรุณาเข้าไปที่อีเมลเพื่อยืนยันตัวตน
          </span>
      </SuccessModal>
    </>
  );
}
