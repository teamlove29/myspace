import React, { useState } from "react";
import { Modal, Form, Row } from "react-bootstrap";
import { Button } from "./style/style";
import { useFormik } from "formik";
import * as Yup from "yup";
import StyleJSX from './style/style'

export default function ChooseType() {
  const [showType, setShowType] = useState(true);

  const handleCloseChoose = () => setShowType(false);
  const initialValues = {
    type: "listen",
  };

  const ChooseTypeSchema = Yup.object().shape({
    type: Yup.string().required("Required"),
  });

  const formikChoose = useFormik({
    initialValues,
    validationSchema: ChooseTypeSchema,
    onSubmit: (value, { setSubmitting }) => {
      setTimeout(() => {
        console.log(value);
        setSubmitting(false);
        // handleedit(value, {setSubmitting });
      }, 1000);
    },
  });

  return (
    <>
      <Modal show={showType} onHide={handleCloseChoose} size="lg">
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
              marginLeft: "5rem",
              marginRight: "5rem",
              marginBottom: "1rem",
            }}
          >
            <Form onSubmit={formikChoose.handleSubmit} className="mt-5 text-center">
              <div className="row">
                <div className="col-lg-6">
                  {/* begin Listen */}
                  <Form.Group className="mx-auto">
                    <label htmlFor="listen" className="typeround showText-13">
                      <img
                        src="/assets/img/option/Listen to music.png"
                        alt=""
                      />
                      <p className="text-dark clearMargin">Listen to music</p>
                      <p className="text-13 pr-2 pl-2 showText ">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus delectus debitis esse officiis. amet
                        consectetur
                      </p>
                      <input
                        id="listen"
                        type="radio"
                        name="type"
                        value="listen"
                        checked={formikChoose.values.type === "listen"}
                        onChange={() => formikChoose.setFieldValue("type", "listen")}
                      />
                    </label>
                    {/* end Listen */}
                    {/* begin artist */}
                  </Form.Group>
                </div>
                <div className="col-lg-6 ">
                  <Form.Group className="mx-auto ">
                    <label htmlFor="artist" className="typeround showText-13">
                      <img src="/assets/img/option/Artits.png" alt="" />
                      <p className="text-dark clearMargin">Artis</p>
                      <p className="text-13 pr-2 pl-2 showText">
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Voluptatibus delectus debitis esse officiis. amet
                        consectetur
                      </p>
                      <input
                        id="artist"
                        type="radio"
                        name="type"
                        value="artist"
                        checked={formikChoose.values.type === "artist"}
                        onChange={() => formikChoose.setFieldValue("type", "artist")}
                      />
                    </label>
                  </Form.Group>
                  {/* end artist */}
                </div>
              </div>

              <div className="text-center">
                <Button
                  disabled={formikChoose.isSubmitting}
                  className="pl-5 pr-5"
                  type="submit"
                >
                  Finish
                </Button>
              </div>
            </Form>
          </div>
        </Modal.Body>
      </Modal>

      <style jsx>{`
        .typeround {
          cursor: pointer;
          border: 2px solid #f5f5f5;
          border-radius: 12px;
          padding: 3rem 4rem 1rem 4rem;
        }

        .typeround:hover {
          border: 2px solid red;
          border-radius: 12px;
          padding: 5rem;
          padding: 0.1rem 0.1rem 1rem 0.1rem;
        }

        input[type="radio"]:checked {
          background-color: #e1e1e1;
          color: black;
          width: 19px;
          height: 19px;
          vertical-align: middle;
          cursor: pointer;
        }

        .typeround:hover img {
          margin-top: -1rem;
        }

        .showText {
          display: none;
        }
        .showText-13:hover .showText {
          display: block;
        }
        .text-13 {
          font-size: 11px;
          word-wrap: break-word;
          display: none;
        }

        .clearMargin {
          margin-top: 1rem;
          margin-bottom: 0rem;
        }
      `}</style>


    </>
  );
}
