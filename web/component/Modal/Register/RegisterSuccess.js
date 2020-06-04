import {Modal} from 'react-bootstrap'
import CorrectIcon from '../../common/img-Correct'
export default function RegisterSuccess(props) {
    return (
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
      <h3> สมัครสามชิกเรียบร้อยแล้ว </h3>
      <span className="text-sm-left txt2" id="describe">
      ระบบได้ส่ง link ไปยัง e-mail ของคุณ กรุณาเข้าไปที่อีเมลเพื่อยืนยันตัวตน
      </span>
      </div>
      </Modal.Body>
  <style jsx>{`
  h3 {
    font-weight: 750;
    font-size: 25px;
    align-items: center;
    padding-left: 5px ;
  }

  .txt2 {
    font-size: 13px;
    color: #b6b6b6;
  }

    `}</style>
    </Modal>
        </>
    )
}