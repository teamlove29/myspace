import React , { useState } from 'react'
import { Modal } from "react-bootstrap";
import { Children } from "react";
import Router from 'next/router'
export default function ModalBock(props) {
  return (
    <>
      <Modal
        aria-labelledby="contained-modal-title-center"
        centered
      >
        <Modal.Header style={{border: 0}} closeButton></Modal.Header>
        <Modal.Body>
            {props.children}
        </Modal.Body>
      </Modal>
    </>
  );
}