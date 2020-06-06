import { Modal } from "react-bootstrap";
import { Children } from "react";
import CorrectIcon from '../common/img-Correct'
export default function Success(props) {
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
            <CorrectIcon />
            {Children}
          </div>
        </Modal.Body>
        <style jsx>{`
          h3 {
            font-weight: 750;
            font-size: 25px;
            align-items: center;
            padding-left: 5px;
          }
        `}</style>
      </Modal>
    </>
  );
}
