import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
const SignIn = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(() => {
    if (props.show === true) setShow(true);
  }, [props.show]);

  const initialValues = {
    email: "",
    password: "",
  };

  const enableLoading = () => {
    setLoading(true);
  };
  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }
    return "";
  };

  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Minimum 6 symbols").required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: SignUpSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
      setTimeout(() => {
        console.log(value);
        // handleedit(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} size="lg" keyboard={false}>
        <Modal.Body>
          <div className="text-center">
            <h2 className="text-center mb-3 mt-5">Sign in</h2>
            <p
              className="text-muted"
              style={{ marginLeft: "75px", marginRight: "75px" }}
            >
              start listening with myspace.
              <a href="#"> Sign up</a>
            </p>
          </div>
          <div
            style={{
              marginLeft: "100px",
              marginRight: "100px",
              marginBottom: "50px",
            }}
          >
            <Form onSubmit={formik.handleSubmit} className="mt-5">
              <Form.Group>
                <Form.Label>E-mail / Username</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClasses("email")}`}
                  name="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-danger">{formik.errors.email}</div>
                ) : null}
              </Form.Group>

              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  className={`form-control  ${getInputClasses("password")}`}
                  name="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-danger">{formik.errors.password}</div>
                ) : null}
              </Form.Group>
              or 
              <img src='/assets/img/icon/Facebook.png' alt=""/>
              <img src='/assets/img/icon/Twitter.png' alt=""/>
              <img src='/assets/img/icon/Google.png' alt=""/>
                <a className="float-right" href="#">Forgot password</a>
              <div className="text-center">
                <Button
                  style={{ borderRadius: "25px" }}
                  className="mt-4 pr-5 pl-5"
                  variant="primary"
                  type="submit"
                >
                  Sign in
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .modal-test {
          border-radius: 300px;
        }
        img{
            margin-left : 0.5rem;
            width : 2rem
        }
      `}</style>
    </>
  );
};

export default SignIn;
