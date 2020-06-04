import {Modal} from 'react-bootstrap'
import CorrectIcon from '../common/img-Correct'
export default function SendEmail(props) {
    return(
        <>
        <Modal
      {...props}
      aria-labelledby="contained-modal-title-center"
      centered
      closeButton >
      <Modal.Header
      className="header"
      closeButton></Modal.Header>
      <Modal.Body>
      <div className="form-group" align="center">
      <CorrectIcon />
      <h2> ระบบได้ส่ง link ไปยัง e-mail ของคุณ <br /> กรุณาเข้าไปที่อีเมลเพื่อทำการ Reset Password </h2>
      </div>
      </Modal.Body>
  <style jsx>{`
  h2 {
    font-weight: 750;
    font-size: 18px;
    align-items: center;
    padding-left: 5px ;
  }
    `}</style>
    </Modal>
        </>
    )
}