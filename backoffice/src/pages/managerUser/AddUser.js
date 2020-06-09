import React, { useState }  from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

export default function AddUser() {
    const [loading, setLoading] = useState(false);
    const initialValues = {
        FirstName: "Marutthep",
        LastName: "Rompho",
        Email:"TeemMarutthep@gmail.com",
        Tel:"0965913095",
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

      const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

      const Userchema = Yup.object().shape({
        FirstName: Yup.string()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required('Required'),
          LastName: Yup.string()
          .min(3, "Minimum 3 symbols")
          .max(50, "Maximum 50 symbols")
          .required('Required'),
          Email:Yup.string()
          .email("Invalid email")
          .required('Required'),
          Tel:Yup.string()
          .matches(phoneRegExp, 'Phone number is not valid')
          .max(10, "Maximum 10 symbols")
          .required('Required'),
      });
    
      const formik = useFormik({
        initialValues,
        validationSchema: Userchema,
        onSubmit: (value, { setStatus, setSubmitting }) => {
          enableLoading();
           setTimeout(() => {
             disableLoading();
             setSubmitting(false);
             console.log(value)
            //  setStatus(errorMessage);
           }, 1000)
        }
      })


    return (
        <>
  {/*begin::Container*/}
  <div className="container">
    {/*begin::Card*/}
    <div className="card ">
      <div className="card-body p-0">
          <div className="row justify-content-center my-10 px-8 my-lg-15 px-lg-10">
            <div className="col-xl-12 col-xxl-7">
              {/*begin::Form Wizard*/}
              {formik.status ? (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        ) : null} 
              <form 
              onSubmit={formik.handleSubmit} 
              className="form">
                {/*begin::Step 1*/}
                <div className="pb-5">
                  <h3 className="mb-10 font-weight-bold text-dark">New User:</h3>
                  <div className="row">
                    <div className="col-xl-12">
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Fist Name</label>
                        <div className="col-lg-9 col-xl-9">
                          <input className="form-control form-control-lg form-control-solid" name="projectowner" type="text"  />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Last Name</label>
                        <div className="col-lg-9 col-xl-9">
                          <input className="form-control form-control-lg form-control-solid" name="customername" type="text"  />
                          <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Contact Phone</label>
                        <div className="col-lg-9 col-xl-9">
                          <div className="input-group input-group-lg input-group-solid">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="la la-phone" />
                              </span>
                            </div>
                            <input type="text" className="form-control form-control-lg form-control-solid" name="phone" placeholder="Phone" />
                          </div>
                          <span className="form-text text-muted">We'll never share your email with anyone else.</span>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label className="col-xl-3 col-lg-3 col-form-label">Email Address</label>
                        <div className="col-lg-9 col-xl-9">
                          <div className="input-group input-group-lg input-group-solid">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <i className="la la-at" />
                              </span>
                            </div>
                            <input type="text" className="form-control form-control-lg form-control-solid" name="email" placeholder="Email" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*end::Step 1*/}
                <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-success font-weight-bold px-9 py-4 my-3`}
          >
            <span>submit</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
              </form>
              {/*end::Form Wizard*/}
            </div>
          </div>
      </div>
    </div>
    {/*end::Card*/}
  </div>
  {/*end::Container*/}
    </>
    )
}
