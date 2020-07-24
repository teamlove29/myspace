import React, { useState, useEffect, useContext } from "react";
import { Modal, Form } from "react-bootstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, Alert } from "./style";
const NewAddress = (props) => {
  const [showNewAddress, setShowNewAddress] = useState(false);
  useEffect(() => {
    if (props.show === true) setShowNewAddress(true);
  }, [props]);

  const handleClose = () => {
    setShowNewAddress(false);
    formik.resetForm();
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
        return "is-invalid";
    }
    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
        return "";
    }
    return "";
  };



  const initialValues = {
    fullname: "",
    tel: "",
    province: "",
    district: "",
    postalcode: "",
    etc: "",
  }
  

  const Schema = Yup.object().shape({
    fullname: Yup.string().required("Required").min(6, "Min length is 6"),
    tel: Yup.string().required("Required"),
    province: Yup.string().required("Required"),
    district: Yup.string().required("Required"),
    postalcode: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setStatus(null);
      console.log(values);
      setTimeout(() => {
        setSubmitting(false)
      }, 1000);
    },
  });

  return (
    <>
      {/* begin NewAddress */}
      <Modal
        show={showNewAddress}
        onHide={handleClose}
        size="md"
        keyboard={false}
      >
        <Modal.Body>
          {props.editor != "" ? (
            <p className="font-20">Edit Address</p>
          ) : (
            <p className="font-20">Add A New Address</p>
          )}

          <div className="margin-auth">
            <Form onSubmit={formik.handleSubmit} className="mt-5 ">
              {formik.status ? (
                <Alert>
                  <small> {formik.status} </small>
                </Alert>
              ) : null}

              {/* begin fullname */}
              <Form.Group>
                <Form.Control
                  className={`font-13 form-control  ${getInputClasses("fullname")}`}
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-danger font-13">
                    {formik.errors.fullname}
                  </div>
                ) : null}
              </Form.Group>
              {/* end fullname */}
              {/* begin tel */}
              <Form.Group>
                <Form.Control
                  className={`font-13 form-control  ${getInputClasses("tel")}`}
                  name="tel"
                  type="tel"
                  placeholder="Phone Number"
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("tel")}
                />
                {formik.touched.tel && formik.errors.tel ? (
                  <div className="text-danger font-13">
                    {formik.errors.tel}
                  </div>
                ) : null}
              </Form.Group>
              {/* end tel */}

              {/* begin province */}
              <Form.Group>
                <Form.Control
                  as="select"
                  custom
                  name="province"
                  className={`font-13 form-control  ${getInputClasses("province")}`}
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("province")}
                >
                  <option value="">State</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </Form.Control>
                {formik.touched.province && formik.errors.province ? (
                  <div className="text-danger font-13">
                    {formik.errors.province}
                  </div>
                ) : null}
              </Form.Group>
              {/* end province */}

              {/* begin district */}
              <Form.Group>
                <Form.Control
                  as="select"
                  custom
                  name="City"
                  disabled={formik.isSubmitting === true ? true : formik.values.province != '' ? false : true }
                  className={` font-13 form-control  ${getInputClasses("district")}`}
                  {...formik.getFieldProps("district")}
                >
                  <option value="">City</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                  <option>test</option>
                </Form.Control>
                {formik.touched.district && formik.errors.district ? (
                  <div className="text-danger font-13">
                    {formik.errors.district}
                  </div>
                ) : null}
              </Form.Group>
              {/* end district */}

              {/* begin postalcode */}
              <Form.Group>
                <Form.Control
                  as="select"
                  custom
                  name="postalcode"
                  disabled={formik.isSubmitting === true ? true : formik.values.district != '' ? false : true}
                  className={`font-13 form-control  ${getInputClasses("postalcode")}`}
                  {...formik.getFieldProps("postalcode")}
                >
                  <option value="">Postal Code</option>
                  <option>12345</option>
                  <option>12345</option>
                  <option>12345</option>
                  <option>12345</option>
                </Form.Control>
                {formik.touched.postalcode && formik.errors.postalcode ? (
                  <div className="text-danger font-13">
                    {formik.errors.postalcode}
                  </div>
                ) : null}
              </Form.Group>
              {/* end postalcode */}

              {/* begin etc */}
              <Form.Group>
                <Form.Control
                  className={`font-13  form-control  ${getInputClasses("etc")}`}
                  name="etc"
                  type="text"
                  placeholder="Buildung, Street, and etc..."
                  disabled={formik.isSubmitting}
                  {...formik.getFieldProps("etc")}
                />
                {formik.touched.etc && formik.errors.etc ? (
                  <div className="text-danger font-13">
                    {formik.errors.etc}
                  </div>
                ) : null}
              </Form.Group>
              {/* end etc */}

              <div className="text-center">
                <a
                  onClick={handleClose}
                  className="pl-5 pr-5 btn mt-5 mr-3 "
                >
                  CANCEL
                </a>
                <Button
                  className="pl-5 pr-5 btn "
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
      {/* end NewAddress */}
    </>
  );
};

export default NewAddress;
