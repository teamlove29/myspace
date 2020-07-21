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
      return "is-valid";
    }
    return "";
  };

  const initialValues = {
    // email: "",
    // password: "",
    // type: "1",
    // 1 member
    // 2 artist
  };

  const Schema = Yup.object().shape({
    displayname: Yup.string().required("Required").min(6, "Min length is 6"),
    aboutyou: Yup.string().max(200, "200 character limit"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setStatus(null);
      setTimeout(() => {
        console.log(values);
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
          <Modal.Title>เพิ่มที่อยู่</Modal.Title>
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
                  className={`form-control  ${getInputClasses("fullname")}`}
                  name="fullname"
                  type="text"
                  placeholder="ชื่อ-นามสกุล"
                  {...formik.getFieldProps("fullname")}
                />
                {formik.touched.fullname && formik.errors.fullname ? (
                  <div className="text-danger text-font-13">
                    {formik.errors.fullname}
                  </div>
                ) : null}
              </Form.Group>
              {/* end fullname */}
   {/* begin tel */}
              <Form.Group>
                <Form.Control
                  className={`form-control  ${getInputClasses("tel")}`}
                  name="tel"
                  type="tel"
                  placeholder="หมายเลขโทรศัพท์"
                  {...formik.getFieldProps("tel")}
                />
                {formik.touched.tel && formik.errors.tel ? (
                  <div className="text-danger text-font-13">
                    {formik.errors.tel}
                  </div>
                ) : null}
              </Form.Group>
   {/* end tel */}

   {/* begin province */}
   <Form.Group>
   <Form.Control as="select" custom
   name="province"
     className={`form-control  ${getInputClasses("province")}`}
      {...formik.getFieldProps("province")}
   >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    {formik.touched.province && formik.errors.province ? (
                  <div className="text-danger text-font-13">
                    {formik.errors.province}
                  </div>
                ) : null}
</Form.Group>
   {/* end province */}


      {/* begin subprovince */}
      <Form.Group>
   <Form.Control as="select" custom
    name="subprovince"
     className={`form-control  ${getInputClasses("subprovince")}`}
      {...formik.getFieldProps("subprovince")}
   >
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
    {formik.touched.subprovince && formik.errors.subprovince ? (
                  <div className="text-danger text-font-13">
                    {formik.errors.subprovince}
                  </div>
                ) : null}
</Form.Group>
   {/* end subprovince */}

   {/* begin postalcode */}
   <Form.Group>
                <Form.Control
                  className={`form-control  ${getInputClasses("postalcode")}`}
                  name="postalcode"
                  type="number"
                  placeholder="รหัสไปรษณีย์"
                  {...formik.getFieldProps("postalcode")}
                />
                {formik.touched.postalcode && formik.errors.postalcode ? (
                  <div className="text-danger text-font-13">
                    {formik.errors.postalcode}
                  </div>
                ) : null}
              </Form.Group>
   {/* end postalcode */}

              <div className="text-center">
              <button
                  className="pl-5 pr-5 btn mt-5 q"
                  type="reset"
                >
                  ยกเลิก
                </button>
                <Button
                  className="pl-5 pr-5 btn"
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  ยืนยัน
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
