import React, { useState } from "react";
import { Modal, Form , Row} from "react-bootstrap";
import { Button } from "./style/style";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ChooseType() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const initialValues = {
    type: "artist",
  };

  const ChooseTypeSchema = Yup.object().shape({
    type: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: ChooseTypeSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setTimeout(() => {
        console.log(value);
        setSubmitting(false)
        // handleedit(value, { setStatus, setSubmitting });
      }, 1000);
    },
  });

  return (
    <div>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body>
          <h2 className="text-center mb-3 mt-5">
            Select the option the best describe you.
          </h2>
          <p
            className="text-center"
            style={{ marginLeft: "3rem", marginRight: "3rem" }}
          >
            Select the option the best describe you.
          </p>

          <div
            style={{
              marginLeft: "7rem",
              marginRight: "7rem",
              marginBottom: "1rem",
            }}
          >
            <Form onSubmit={formik.handleSubmit} className="mt-5">
              <Form.Row  as={Row}>
                <Form.Group>
                  <img src="/assets/img/option/Listen to music.png" alt="" />
                  <p>Listen to music</p>
                  <input
                    type="radio"
                    name="type"
                    value="listen"
                    checked={formik.values.type === 'listen'}
                    {...formik.getFieldProps("type")}
                  />
                </Form.Group>
                <Form.Group>
                  <img src="/assets/img/option/Artits.png" alt="" />
                  <p>Artis</p>
                  <Form.Check 
                  type="radio" 
                   name="type" 
                  value="artist"
                   checked={formik.values.type === 'artist'}
                   {...formik.getFieldProps("type")}
                  />
                </Form.Group>
              </Form.Row>
            
              <div className="text-center">
                <Button 
                disabled={formik.isSubmitting}
                className="pl-5 pr-5" 
                type="submit">
                  Finish
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
