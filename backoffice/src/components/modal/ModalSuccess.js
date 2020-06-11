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
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

export const Success = () => {
  MySwal.fire({
    icon: "success",
    title: <h1 className="display-3">success</h1>,
    showConfirmButton: false,
  });
}

export default function ModalSuccess(props) {
  const [modalShow, setModalShow] = useState(false);
  const [show, setShow] = useState(true);

  return (
    <>

    </>
  );
}
