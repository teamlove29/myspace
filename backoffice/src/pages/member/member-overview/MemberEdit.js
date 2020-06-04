import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toAbsoluteUrl, checkIsActive } from "../../../_helpers";
import axios from 'axios';
export default function MemberEdit() {

  const [loading, setLoading] = useState(false);
  const initialValues = {
    FirstName: "",
    LastName: "",
    Country:""
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

  const MemberSchema = Yup.object().shape({
    FirstName: Yup.string()
      // .email("Invalid email")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
      LastName: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required('Required'),
      Country:Yup.string()
      .required('Required'),
  });


  const formik = useFormik({
    initialValues,
    validationSchema: MemberSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
      axios.post('https://us-central1-myspace-dev-1ae9e.cloudfunctions.net/test', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then( response => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
       setTimeout(() => {
         disableLoading();
         setSubmitting(false);
       }, 1000)
    }
  })

  

  // ดึงค่าจาก /xxx?user:1234
  // const search = new URLSearchParams(props.locations.search)
  // console.log(props.match.params.id)
  // console.log(search)

  // ดึงค่าไอดีจาก http /:id
  return (
    <>
  {/*begin::Profile Personal Information*/}
  <div className="d-flex flex-row">
    {/*begin::Content*/}
    <div className="flex-row-fluid ml-lg-8">
    <form onSubmit={formik.handleSubmit} 
    className="form" >
      {/*begin::Form*/}
      {/*begin::Card*/}
      <div className="card card-custom card-stretch">
        {/*begin::Header*/}
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">Personal Information</h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">Update your personal informaiton</span>
          </div>
          <div className="card-toolbar">
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-success font-weight-bold mr-3 px-7 `}
          >
            <span>Save Changes</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
            <button 
            type="reset" 
            className="btn btn-secondary"
            onClick={formik.handleReset}>
              Cancel
              </button>
          </div>
        </div>
        {/*end::Header*/}
          {/*begin::Body*/}
          <div className="card-body">
            <div className="row">
              <label className="col-xl-3" />
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mb-6">Member Info</h5>
              </div>
            </div>
            {/* begin Avatar */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Avatar</label>
              <div className="col-lg-9 col-xl-6">   
                <div className="image-input image-input-outline" id="kt_profile_avatar" style={{backgroundImage: 'url(assets/media/users/blank.png)'}}>
                  <div className="image-input-wrapper" style={{backgroundImage: 'url(assets/media/users/300_21.jpg)'}} />
                  <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title data-original-title="Change avatar">
                    <i className="fa fa-pen icon-sm text-muted" />
                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                    <input type="hidden" name="profile_avatar_remove" />
                  </label>
                  <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                    <i className="ki ki-bold-close icon-xs text-muted" />
                  </span>
                  <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                    <i className="ki ki-bold-close icon-xs text-muted" />
                  </span>
                </div>
                <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
              </div>
            </div> 
                {/* End Avatar
{/* begin cover */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Cover</label>
              <div className="col-lg-9 col-xl-6">
                <div className="image-input image-input-outline" id="kt_profile_avatar" style={{backgroundImage: 'url(assets/media/users/blank.png)'}}>
                  <div className="image-input-wrapper" style={{backgroundImage: 'url(assets/media/users/300_21.jpg)'}} />
                  <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title data-original-title="Change avatar">
                    <i className="fa fa-pen icon-sm text-muted" />
                    <input type="file" name="profile_avatar" accept=".png, .jpg, .jpeg" />
                    <input type="hidden" name="profile_avatar_remove" />
                  </label>
                  <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="cancel" data-toggle="tooltip" title="Cancel avatar">
                    <i className="ki ki-bold-close icon-xs text-muted" />
                  </span>
                  <span className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="remove" data-toggle="tooltip" title="Remove avatar">
                    <i className="ki ki-bold-close icon-xs text-muted" />
                  </span>
                </div>
                <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
              </div>
            </div>
{/* end cover */} 


{/* begin FirstName  */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">First Name</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg form-control-solid" ${getInputClasses("FirstName")}`}
                type="text" 
                name="FirstName"
                {...formik.getFieldProps("FirstName")}
                />
                {formik.touched.FirstName && formik.errors.FirstName ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.FirstName}</div>
            </div>
          ) : null}
              </div>
            </div>
{/* end FirstName */}
{/* begin LastName */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Last Name</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg form-control-solid" ${getInputClasses("LastName")}`}
                type="text"  
                name="LastName"
                {...formik.getFieldProps("LastName")}
                />
                 {formik.touched.LastName && formik.errors.LastName ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.LastName}</div>
            </div>
          ) : null}
              </div>
            </div>
            {/* begin LastName */}
            {/* begin Country */}

            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Country</label>
              <div className="col-lg-9 col-xl-6">
                {/* <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" /> */}
                
                <select class={`form-control form-control-lg form-control-solid" ${getInputClasses("Country")}`}
                name="Country"
                {...formik.getFieldProps("Country")}>
      <option value="" label="Select Country ..." />
        <option value="thailand" label="thailand" />
        <option value="chaina" label="chaina" />
        <option value="usa" label="usa" />
    </select>
              </div>
            </div>
{/* End Country */}

{/* 
         
           
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Website</label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">About You</label>
              <div className="col-lg-9 col-xl-6">
                <textarea rows="3" className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Email Address</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-at" />
                    </span>
                  </div>
                  <input type="text" className="form-control form-control-lg form-control-solid" defaultValue="nick.bold@loop.com" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Status</label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
                <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
              </div>
            </div>
            <div className="row">
              <label className="col-xl-3" />
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mt-10 mb-6">Contact Info</h5>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Contact Phone</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-phone" />
                    </span>
                  </div>
                  <input type="text" className="form-control form-control-lg form-control-solid" defaultValue={+35278953712} placeholder="Phone" />
                </div>
                <span className="form-text text-muted">We'll never share your email with anyone else.</span>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Email Address</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-at" />
                    </span>
                  </div>
                  <input type="text" className="form-control form-control-lg form-control-solid" defaultValue="nick.bold@loop.com" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Company Site</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <input type="text" className="form-control form-control-lg form-control-solid" placeholder="Username" defaultValue="loop" />
                  <div className="input-group-append">
                    <span className="input-group-text">.com</span>
                  </div>
                </div>
              </div>
            </div>
           */}
          </div>
          {/*end::Body*/}
        
        {/*end::Form*/}
      </div>
      </form>
    </div>
    
    {/*end::Content*/}
  </div>
  {/*end::Profile Personal Information*/}
  {/*end::Container*/}
</>


  );
}
