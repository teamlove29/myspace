import { Modal } from "react-bootstrap";
import CorrectIcon from "../../common/img-Correct";
import SucessModal from '../../Modal'
import React , {useState} from 'react'
export default function LoginSuccess(props) {
  const [SuccessShow, setSuccessShow] = useState(false);
  return (
    <>
          <Modal
          {...props}
      show={SuccessShow}
      aria-labelledby="contained-modal-title-center"
      centered
      >
        <Modal.Header style={{border: 0}} className="header" closeButton></Modal.Header>
        <Modal.Body>
    <h3> เข้าสู่ระบบเรียบร้อยแล้ว </h3>
    </Modal.Body>
      </Modal>
    </>
  );
}
