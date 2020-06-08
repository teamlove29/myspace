import React from "react";
import {Modal} from 'react-bootstrap'
import Button from '../button/loginButton'
import CorrectIcon from '../common/img-Correct'

export default function LoginSuccess() {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ border: 0 }} closeButton></Modal.Header>
        <Modal.Body>
        <CorrectIcon />
          <h3>Centered Modal</h3>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
