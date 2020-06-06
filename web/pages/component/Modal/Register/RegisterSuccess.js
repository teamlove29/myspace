import { Modal } from "react-bootstrap";
import CorrectIcon from "../../common/img-Correct";
import SuccessModal from "../Success";
export default function RegisterSuccess(props) {
  return (
    <>
      <SuccessModal>
        <h3> สมัครสามชิกเรียบร้อยแล้ว </h3>
        <span className="text-sm-left txt2" id="describe">
          ระบบได้ส่ง link ไปยัง e-mail ของคุณ
          กรุณาเข้าไปที่อีเมลเพื่อยืนยันตัวตน
        </span>
      </SuccessModal>
    </>
  );
}
