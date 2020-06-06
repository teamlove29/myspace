import { Modal } from "react-bootstrap";
import CorrectIcon from "../../common/img-Correct";
import SuccessModal from "../Success";
export default function SendEmail(props) {
  return (
    <>
      <SuccessModal>
        <h2>
          {" "}
          ระบบได้ส่ง link ไปยัง e-mail ของคุณ <br />{" "}
          กรุณาเข้าไปที่อีเมลเพื่อทำการ Reset Password{" "}
        </h2>
      </SuccessModal>
    </>
  );
}
