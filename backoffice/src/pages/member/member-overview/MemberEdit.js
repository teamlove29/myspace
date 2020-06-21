import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toAbsoluteUrl, checkIsActive } from "../../../_helpers";
import axios from 'axios';
export default function MemberEdit(props) {
  const type = props.type
  const [loading, setLoading] = useState(false);
  const initialValues = {
    Avatar: null,
    Cover: null,
    FirstName: "Marutthep",
    LastName: "Rompho",
    Email:"TeemMarutthep@gmail.com",
    Tel:"0965913095",
    Country:"thailand",
    AboutYou:"",
    Status:"active",
    displayname:"Loui Vistone",
    Website:"Loui.com",
    Facebook:"Vistone",
    instagram:"Vistone",
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

  const MemberSchema = Yup.object().shape({
    // Avatar:  Yup.string()
    // .required(),
    // Cover:  Yup.string()
    // .required(),
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
      Country:Yup.string()
      .required('Required'),
      Status:Yup.string()
      .required('Required'),
      Tel:Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .max(10, "Maximum 10 symbols")
      .required('Required'),
  });


  const formik = useFormik({
    initialValues,
    validationSchema: MemberSchema,
    onSubmit: (value, { setStatus, setSubmitting }) => {
      enableLoading();
       setTimeout(() => {
         disableLoading();
         setSubmitting(false);
         console.log(value)
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
                <div className="image-input image-input-outline" id="kt_profile_avatar" style={{backgroundImage: `url(${toAbsoluteUrl('/assets/media/users/blank.png')})` }}>
                  {/* <div className="image-input-wrapper" style={{backgroundImage: 'url(assets/media/users/300_21.jpg)'}} /> */}
                  <img 
                  className="img-fluid"
                  src="https://via.placeholder.com/150" alt=""/>
                  <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title data-original-title="Change avatar">
                    <i className="fa fa-pen icon-sm text-muted" />
                    <input 
                    type="file" 
                    name="Avatar" 
                    accept=".png, .jpg, .jpeg" 
                    onChange={(event) => { 
                      formik.setFieldValue("Avatar", event.currentTarget.files[0]);}}
                       />
                  </label>
                </div>
                <span className="form-text text-muted">Allowed file types: png, jpg, jpeg.</span>
              </div>
            </div> 
                 {/* End Avatar */}
{/* begin cover */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Cover</label>
              <div className="col-lg-9 col-xl-6">
                <div className="image-input image-input-outline" id="kt_profile_avatar" style={{backgroundImage: 'url(https://via.placeholder.com/150x300)'}}>
                  {/* <div className="image-input-wrapper" style={{backgroundImage: 'url(assets/media/users/300_21.jpg)', width:"300px"}} /> */}
                  <img 
                  className="img-fluid"
                  src="https://via.placeholder.com/400x150" alt=""/>
                  <label className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow" data-action="change" data-toggle="tooltip" title data-original-title="Change avatar">
                    <i className="fa fa-pen icon-sm text-muted" />
                    <input 
                    type="file" 
                    name="Cover" 
                    accept=".png, .jpg, .jpeg" 
                    onChange={(event) => { 
                      formik.setFieldValue("Cover", event.currentTarget.files[0]);}}
                      />
                  </label>
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
                className={`form-control form-control-lg " ${getInputClasses("FirstName")}`}
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
                className={`form-control form-control-lg " ${getInputClasses("LastName")}`}
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
{/* begin Email */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Email</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("Email")}`}
                type="text"  
                name="LastName"
                {...formik.getFieldProps("Email")}
                />
                 {formik.touched.Email && formik.errors.Email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.Email}</div>
            </div>
          ) : null}
              </div>
            </div>
            {/* begin Email */}
{/* begin tel */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Tel</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("Tel")}`}
                type="text"  
                name="LastName"
                {...formik.getFieldProps("Tel")}
                />
                 {formik.touched.Tel && formik.errors.Tel ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.Tel}</div>
            </div>
          ) : null}
              </div>
            </div>
            {/* begin tel */}

            {/* begin Country */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Country</label>
              <div className="col-lg-9 col-xl-6">
                <select 
                class={`form-control form-control-lg " ${getInputClasses("Country")}`}
                name="Country"
                {...formik.getFieldProps("Country")}>
      <option value="" label="Select Country ..." />
        <option value="thailand" label="Thailand" />
        <option value="chaina" label="Chaina" />
        <option value="usa" label="USA" />
    </select>
              </div>
            </div>
{/* End Country */}
{/* begin AboutYou */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">About You</label>
              <div className="col-lg-9 col-xl-6">
                <textarea 
                rows="3" 
                className={`form-control form-control-lg " ${getInputClasses("AboutYou")}`}
                type="text" 
                name="AboutYou"
                {...formik.getFieldProps("AboutYou")} />
              </div>
            </div>
{/* End AboutYou */} 
{/* begin Status */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Status</label>
              <div className="col-lg-9 col-xl-6">
              <select class={`form-control form-control-lg " ${getInputClasses("Status")}`}
                name="Status"
                {...formik.getFieldProps("Status")}>
      <option value="" label="Select Status ..." />
        <option value="active" label="Active" />
        <option value="deactivate" label="Deactivate" />
    </select>
                <span className="form-text text-muted">
                  If you want your invoices addressed to a company. Leave blank to use your full name.
                  </span>
              </div>
            </div>
{/* End Status */}
{/* begin Artist Info */}
{type === 'artist' ? <> <hr/>
<div className="row">
              <label className="col-xl-3" />
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mb-6">Artist Info</h5>
              </div>
            </div>
{/* begin displayname */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Display Name</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("displayname")}`}
                type="text" 
                name="displayname"
                name="displayname"
                {...formik.getFieldProps("displayname")} />
              </div>
              </div>
{/* End nameDisplay */}
{/* begin Website */}
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Website</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("Website")}`}
                type="text" 
                name="Website"
                name="Website"
                {...formik.getFieldProps("Website")} />
              </div>
              </div>
{/* End Website */}
{/* begin Facebook */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Facebook</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("Facebook")}`}
                type="text" 
                name="Facebook"
                {...formik.getFieldProps("Facebook")} />
              </div>
              </div>
{/* End Facebook */}
{/* begin instagram */}
<div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">instagram</label>
              <div className="col-lg-9 col-xl-6">
                <input 
                className={`form-control form-control-lg " ${getInputClasses("instagram")}`}
                type="text" 
                name="instagram"
                {...formik.getFieldProps("instagram")} />
              </div>
              </div>
{/* End instagram */}

</> : null}

{/* End Artist Info */}


            {/* <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Email Address</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="la la-at" />
                    </span>
                  </div>
                  <input type="text" className="form-control form-control-lg " defaultValue="nick.bold@loop.com" placeholder="Email" />
                </div>
              </div>
            </div> */}



{/* 
         
           
          
            
        
           
               
        
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
                  <input type="text" className="form-control form-control-lg " defaultValue={+35278953712} placeholder="Phone" />
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
                  <input type="text" className="form-control form-control-lg " defaultValue="nick.bold@loop.com" placeholder="Email" />
                </div>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Company Site</label>
              <div className="col-lg-9 col-xl-6">
                <div className="input-group input-group-lg input-group-solid">
                  <input type="text" className="form-control form-control-lg " placeholder="Username" defaultValue="loop" />
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
