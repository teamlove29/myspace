import React, { useState } from "react";
import {
  Button,
  Modal,
  ButtonToolbar,
  Col,
  Container,
  Row,
  Form,
} from "react-bootstrap";
import './style.css'

export default function ModalSuccess(props) {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <img src="" alt="" />
          <h1 className="display-2 text-center">Success</h1>
  
          <div class="checkmark draw"></div>

        </Modal.Body>
      </Modal>
    </>
  );
}
