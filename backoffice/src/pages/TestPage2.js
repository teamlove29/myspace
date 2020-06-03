import React from "react";
export default function TestPage2(props) {
  // ดึงค่าจาก /xxx?user:1234
  // const search = new URLSearchParams(props.locations.search)
  // console.log(props.match.params.id)
  // console.log(search)

  // ดึงค่าไอดีจาก http /:id
  const params = props.match.params.id;
  return (
    <div className="container">
      {/* <h1>This id member : {params}</h1> */}
      {/* <button
        className="btn btn-sm font-weight-bold btn-primary"
        onClick={() => {
          props.history.goBack();
        }}
      >
        Back Page
      </button> */}

      {/*begin::Content*/}
      <div className="flex-row-fluid ml-lg-8">
        {/*begin::Card*/}
        <div className="card card-custom card-stretch">
          {/*begin::Header*/}
          <div className="card-header py-3">
            <div className="card-title align-items-start flex-column">
              <h3 className="card-label font-weight-bolder text-dark">
                Member Information
              </h3>
              <span className="text-muted font-weight-bold font-size-sm mt-1">
                Member personal informaiton
              </span>
            </div>
            <div className="card-toolbar">
              <button 
               className="btn btn-sm font-weight-bold btn-primary"
               onClick={() => {
                 props.history.goBack();
               }}
              className="btn btn-secondary">
                Back Page
              </button>
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
                  {/* <h5 className="font-weight-bold mb-6">Customer Info</h5> */}
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
  );
}
