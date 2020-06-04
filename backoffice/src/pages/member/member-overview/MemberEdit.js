import React from "react";
import { toAbsoluteUrl, checkIsActive } from "../../../_helpers";
export default function MemberEdit() {
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
      {/*begin::Card*/}
      <div className="card card-custom card-stretch">
        {/*begin::Header*/}
        <div className="card-header py-3">
          <div className="card-title align-items-start flex-column">
            <h3 className="card-label font-weight-bolder text-dark">Personal Information</h3>
            <span className="text-muted font-weight-bold font-size-sm mt-1">Update your personal informaiton</span>
          </div>
          <div className="card-toolbar">
            <button type="submit" className="btn btn-success mr-2">Save Changes</button>
            <button type="reset" className="btn btn-secondary">Cancel</button>
          </div>
        </div>
        {/*end::Header*/}
        {/*begin::Form*/}
        <form className="form">
          {/*begin::Body*/}
          <div className="card-body">
            <div className="row">
              <label className="col-xl-3" />
              <div className="col-lg-9 col-xl-6">
                <h5 className="font-weight-bold mb-6">Customer Info</h5>
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
                {/* End Avatar */}
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
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">First Name</label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Last Name</label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-xl-3 col-lg-3 col-form-label text-right">Country</label>
              <div className="col-lg-9 col-xl-6">
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
              </div>
            </div>
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
                <input className="form-control form-control-lg form-control-solid" type="text" defaultValue="" />
                <span className="form-text text-muted">If you want your invoices addressed to a company. Leave blank to use your full name.</span>
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
          </div>
          {/*end::Body*/}
        </form>
        {/*end::Form*/}
      </div>
    </div>
    {/*end::Content*/}
  </div>
  {/*end::Profile Personal Information*/}
  {/*end::Container*/}
</>


  );
}
