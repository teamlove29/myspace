import React, { useState, useEffect, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { Button, Alert } from "./style";
import Auth from "./auth";
import firebase from "../../config/config";
import { ModalContext } from "../../config/context/ModalProvider";
export default function ForgotPass(props) {




  useEffect(() => {
    props.showforgetpass === true ? setShowforgetpass(true) : null;
  }, [props.showforgetpass]);

  

  return (
    <>
    

    </>
  );
}
