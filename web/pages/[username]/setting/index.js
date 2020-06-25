import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button2525 } from "../../../component/button/addbutton";
import { Button } from "../../../component/modal/style";
import { useRouter } from "next/router";
const index = () => {
  const router = useRouter();
  const { username } = router.query;

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

  const SettingSchema = Yup.object().shape({
    displayname: Yup.string().email("Invalid email").required("Required"),
    // country: Yup.string().min(6, "Minimum 6 symbols").required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: SettingSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      setTimeout(() => {}, 1000);
    },
  });

  return (
    <div>
      <img
        style={{
          top: "0",
          right: "0",
          position: "absolute",
          backgroundColor: "#252525",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "200px ",
          padding: "0 0",
        }}
        className="container-fluid"
        src=""
        alt=""
      />
      <div
        className="container text-light"
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        <h3 className="font-Regular mt-5">Settings</h3>
        <ul id="list" className="mt-4">
          <li
            style={{
              borderBottom: "3px solid #DF004C",
              paddingBottom: "5px",
            }}
          >
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Playlist</a>
          </li>
          <li>Following</li>
          <li>Follower</li>
          <li>Loved Tracks</li>
          <li>Shouts</li>
        </ul>
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
                Uploaded images will be resized and square cropped from the top.
                In most places, your image will be displayed in a circle, like
                the example.
              </p>
              <Button2525 className="btn mt-3">Choose file</Button2525>
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
                className={`form-control " ${getInputClasses("displayname")}`}
                type="text"
                name="displayname"
                placeholder="Jone Doe"
                {...formik.getFieldProps("displayname")}
              />
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
               <small className="text-muted">200 character limit, plain text only.</small>
            </div>
            <br/>
          </div>    
   
          {/* End AboutYou */}

          <div className="d-flex offset-md-3">
            <Button>Save changes</Button>
          </div>
        </form>
      </div>

      <style jsx>{`
        hr {
          margin-bottom: 50px;
          margin-top: 50px;
          background-color: #282828;
        }

        a {
          font-size: 14px;
          color: white;
        }
        #list li {
          display: inline;
          list-style-type: none;
          margin-right: 20px;
          overflow: hidden;
        }

        .image-holder {
          background-color: #252525;
          width: 150px;
          height: 150px;
        }
      `}</style>
    </div>
  );
};

export default index;
