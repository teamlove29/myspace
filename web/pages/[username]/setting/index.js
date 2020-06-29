import React, { useContext } from "react";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../../component/modal/style";
import { ModalContext } from "../../../config/context/ModalProvider";
import MenuSetting from "../../../component/menuSetting";
const index = () => {
  const router = useRouter();
  const { username } = router.query;
  const { nameMember } = useContext(ModalContext);
  const verifyMember = username != nameMember ? false : true;

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
    displayname: "",
    country: "",
    website: "",
    aboutyou: "",
  };

  const Schema = Yup.object().shape({
    displayname: Yup.string().required("Required").min(6, "Min length is 6"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: Schema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setTimeout(() => {}, 1000);
    },
  });
  return (
    <>
      {verifyMember && (
        <>
          <MenuSetting>
            <form onSubmit={formik.handleSubmit}>
              <h5 className="font-Regular mt-5">Your Picture</h5>
              <div className="row mt-4">
                {/* image */}
                <div className="col-12 col-sm-12 col-md-4 col-xl-2">
                  <div className="image-holder rounded-circle border-0 ">
                    {/* <img
                className="rounded-circle border"
                src=""
                alt=""
              /> */}
                  </div>
                </div>
                {/* Choose file */}
                <div className="col-12  col-sm-12  col-md-3 col-xl-10 ">
                  <p className="text-muted">
                    Uploaded images will be resized and square cropped from the
                    top. In most places, your image will be displayed in a
                    circle, like the example.
                  </p>

                  <label htmlFor="upload">
                    Choose file
                    <input type="file" id="upload" />
                  </label>
                </div>
              </div>
              <h5 className="font-Regular mt-5">It's All About You, Baby!</h5>

              {/* begin displayname */}
              <div className="form-group row mt-5">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Display Name
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses(
                      "displayname"
                    )}`}
                    type="text"
                    name="displayname"
                    placeholder="Jone Doe"
                    {...formik.getFieldProps("displayname")}
                  />
                  {formik.touched.displayname && formik.errors.displayname ? (
                    <div className="text-danger font-13">
                      {formik.errors.displayname}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End nameDisplay */}

              {/* begin Country */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Country
                </label>
                <div className="col-lg-9 col-xl-6">
                  <select
                    className={`form-control " ${getInputClasses("country")}`}
                    name="Country"
                    {...formik.getFieldProps("country")}
                  >
                    {formik.touched.country && formik.errors.country ? (
                      <div className="text-danger font-13">
                        {formik.errors.country}
                      </div>
                    ) : null}
                    <option value="" label="None" />
                    <option value="thailand" label="Thailand" />
                    <option value="chaina" label="Chaina" />
                    <option value="usa" label="USA" />
                  </select>
                </div>
              </div>
              {/* End Country */}
              {/* begin Website */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  Website
                </label>
                <div className="col-lg-9 col-xl-6">
                  <input
                    className={`form-control " ${getInputClasses("website")}`}
                    type="text"
                    name="Website"
                    name="Website"
                    {...formik.getFieldProps("website")}
                  />
                  {formik.touched.website && formik.errors.website ? (
                    <div className="text-danger font-13">
                      {formik.errors.website}
                    </div>
                  ) : null}
                </div>
              </div>
              {/* End Website */}
              {/* begin AboutYou */}
              <div className="form-group row">
                <label className="col-xl-3 col-lg-3 col-form-label text-right">
                  About You
                </label>
                <div className="col-lg-9 col-xl-6">
                  <textarea
                    rows="3"
                    className={`form-control form-control-lg " ${getInputClasses(
                      "aboutyou"
                    )}`}
                    type="text"
                    name="AboutYou"
                    {...formik.getFieldProps("aboutyou")}
                  />
                  {formik.touched.aboutyou && formik.errors.aboutyou ? (
                    <div className="text-danger font-13">
                      {formik.errors.aboutyou}
                    </div>
                  ) : null}
                  <small className="text-muted">
                    200 character limit, plain text only.
                  </small>
                </div>
                <br />
              </div>

              {/* End AboutYou */}

              <div className="d-flex offset-md-3">
                <Button>Save changes</Button>
              </div>
            </form>
          </MenuSetting>
          <style jsx>{`
            label[for="upload"] {
              background-color: #252525;
              font-size: 13px;
              border: 0.1px solid #272727;
              border-radius: 30px;
              padding: 10px 25px 10px 25px;
              color: white;
              display: inline-block;
              cursor: pointer;
            }
            label[for="upload"]:hover {
              background: #ddd;
            }
            label[for="upload"] input {
              display: none;
            }

            hr {
              margin-bottom: 50px;
              margin-top: 50px;
              background-color: #282828;
            }
            .image-holder {
              background-color: #252525;
              width: 150px;
              height: 150px;
            }
          `}</style>
        </>
      )}
    </>
  );
};

export default index;
