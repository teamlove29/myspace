import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import TestPage2 from "./TestPage2";
const TestPage = () => {
  const initialValues = {
    Avatar: null,
  };

  const MemberSchema = Yup.object().shape({
    Avatar: Yup.mixed().required(),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: MemberSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      alert(
        JSON.stringify(
          {
            fileName: values.Avatar.name,
            type: values.Avatar.type,
            size: `${values.Avatar.size} bytes`,
          },
        )
      );
    },
  });

  console.log(process.env.REACT_APP_API_KEY)
  console.log(process.env.REACT_APP_API_KEY_GO)
  console.log(process.env.REACT_APP_TEST_NUM)


  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label for="Avatar">File upload</label>
          <input
            id="Avatar"
            name="Avatar"
            type="file"
            className="form-control"
            onChange={(event) => {
              formik.setFieldValue("Avatar", event.currentTarget.files[0]);
            }}
          />

          {formik.values.Avatar != null ? (
            <TestPage2 file={formik.values.Avatar} />
          ) : null}

          {formik.touched.Avatar && formik.errors.Avatar ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.Avatar}</div>
            </div>
          ) : null}
        </div>
        <button type="submit" className="btn btn-primary">
          submit
        </button>
      </form>
    </div>
  );
};

export default TestPage;
