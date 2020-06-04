import React from 'react'

export default function MemberView(props) {
    return (
        <>
            				{/*begin::Advance Table: Widget 7*/}
<div className="card card-custom gutter-b">
  {/*begin::Header*/}
  <div className="card-header border-0 pt-5">
    <h3 className="card-title align-items-start flex-column">
      <span className="card-label font-weight-bolder text-dark">New Arrivals</span>
      <span className="text-muted mt-3 font-weight-bold font-size-sm">More than 400+ new members</span>
    </h3>
    <div className="card-toolbar">
      <ul className="nav nav-pills nav-pills-sm nav-dark-75">
        <li className="nav-item">
          <a className="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_1">Month</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 px-4" data-toggle="tab" href="#kt_tab_pane_1_2">Week</a>
        </li>
        <li className="nav-item">
          <a className="nav-link py-2 px-4 active" data-toggle="tab" href="#kt_tab_pane_1_3">Day</a>
        </li>
      </ul>
    </div>
  </div>
  {/*end::Header*/}
  {/*begin::Body*/}
  <div className="card-body py-2">
    {/*begin::Table*/}
    <div className="table-responsive">
      <table className="table table-borderless table-vertical-center">
        <thead>
          <tr>
            <th className="p-0" style={{width: 50}} />
            <th className="p-0" style={{minWidth: 200}} />
            <th className="p-0" style={{minWidth: 120}} />
            <th className="p-0" style={{minWidth: 120}} />
            <th className="p-0" style={{minWidth: 120}} />
            <th className="p-0" style={{minWidth: 160}} />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-0 py-4">
              <div className="symbol symbol-50 symbol-light">
                <span className="symbol-label">
                  <img src="assets/media/svg/misc/006-plurk.svg" className="h-50 align-self-center" alt />
                </span>
              </div>
            </td>
            <td className="pl-0">
              <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Sant Outstanding</a>
              <div>
                <span className="font-weight-bolder">Email:</span>
                <a className="text-muted font-weight-bold text-hover-primary" href="#">bprow@bnc.cc</a>
              </div>
            </td>
            <td className="text-right">
              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$2,000,000</span>
              <span className="text-muted font-weight-bold">Paid</span>
            </td>
            <td className="text-right">
              <span className="text-muted font-weight-bold">ReactJs, HTML</span>
            </td>
            <td className="text-right">
              <span className="label label-lg label-light-primary label-inline">Approved</span>
            </td>
            <td className="pr-0 text-right">
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                      <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-0 py-4">
              <div className="symbol symbol-50 symbol-light mr-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/misc/015-telegram.svg" className="h-50 align-self-center" alt />
                </span>
              </div>
            </td>
            <td className="pl-0">
              <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Telegram Mobile</a>
              <span className="text-muted font-weight-bold d-block">
                <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
            </td>
            <td className="text-right">
              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$4,600,000</span>
              <span className="text-muted font-weight-bold">Paid</span>
            </td>
            <td className="text-right">
              <span className="text-muted font-weight-bold">Python, MySQL</span>
            </td>
            <td className="text-right">
              <span className="label label-lg label-light-warning label-inline">In Progress</span>
            </td>
            <td className="p-0 text-right">
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                      <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-0 py-4">
              <div className="symbol symbol-50 symbol-light mr-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/misc/003-puzzle.svg" className="h-50 align-self-center" alt />
                </span>
              </div>
            </td>
            <td className="pl-0">
              <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">Cisco Management</a>
              <span className="text-muted font-weight-bold d-block">
                <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
            </td>
            <td className="text-right">
              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$560,000</span>
              <span className="text-muted font-weight-bold">Paid</span>
            </td>
            <td className="text-right">
              <span className="text-muted font-weight-bold">Laravel, Metronic</span>
            </td>
            <td className="text-right">
              <span className="label label-lg label-light-success label-inline">Success</span>
            </td>
            <td className="p-0 text-right">
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                      <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-0 py-4">
              <div className="symbol symbol-50 symbol-light mr-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/misc/005-bebo.svg" className="h-50 align-self-center" alt />
                </span>
              </div>
            </td>
            <td className="pl-0">
              <a href="#" className="text-dark font-weight-bolder text-hover-primary mb-1 font-size-lg">Beats Studio</a>
              <span className="text-muted font-weight-bold d-block">FTP: bprow@bnc.cc</span>
            </td>
            <td className="text-right pr-0">
              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$57,000</span>
              <span className="text-muted font-weight-bold">Paid</span>
            </td>
            <td className="text-right">
              <span className="text-muted font-weight-bold">AngularJS, C#</span>
            </td>
            <td className="text-right">
              <span className="label label-lg label-light-danger label-inline">Rejected</span>
            </td>
            <td className="pr-0 text-right">
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                      <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
            </td>
          </tr>
          <tr>
            <td className="p-0 py-4">
              <div className="symbol symbol-50 symbol-light mr-5">
                <span className="symbol-label">
                  <img src="assets/media/svg/misc/014-kickstarter.svg" className="h-50 align-self-center" alt />
                </span>
              </div>
            </td>
            <td className="pl-0">
              <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">KTR Application</a>
              <span className="text-muted font-weight-bold d-block">
                <span className="font-weight-bolder text-dark-75">FTP:</span>bprow@bnc.cc</span>
            </td>
            <td className="text-right">
              <span className="text-dark-75 font-weight-bolder d-block font-size-lg">$45,200,000</span>
              <span className="text-muted font-weight-bold">Paid</span>
            </td>
            <td className="text-right">
              <span className="text-muted font-weight-bold">ReactJS, Ruby</span>
            </td>
            <td className="text-right">
              <span className="label label-lg label-light-warning label-inline">In Progress</span>
            </td>
            <td className="p-0 text-right">
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Settings-1.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M7,3 L17,3 C19.209139,3 21,4.790861 21,7 C21,9.209139 19.209139,11 17,11 L7,11 C4.790861,11 3,9.209139 3,7 C3,4.790861 4.790861,3 7,3 Z M7,9 C8.1045695,9 9,8.1045695 9,7 C9,5.8954305 8.1045695,5 7,5 C5.8954305,5 5,5.8954305 5,7 C5,8.1045695 5.8954305,9 7,9 Z" fill="#000000" />
                      <path d="M7,13 L17,13 C19.209139,13 21,14.790861 21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 C3,14.790861 4.790861,13 7,13 Z M17,19 C18.1045695,19 19,18.1045695 19,17 C19,15.8954305 18.1045695,15 17,15 C15.8954305,15 15,15.8954305 15,17 C15,18.1045695 15.8954305,19 17,19 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Write.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M12.2674799,18.2323597 L12.0084872,5.45852451 C12.0004303,5.06114792 12.1504154,4.6768183 12.4255037,4.38993949 L15.0030167,1.70195304 L17.5910752,4.40093695 C17.8599071,4.6812911 18.0095067,5.05499603 18.0083938,5.44341307 L17.9718262,18.2062508 C17.9694575,19.0329966 17.2985816,19.701953 16.4718324,19.701953 L13.7671717,19.701953 C12.9505952,19.701953 12.2840328,19.0487684 12.2674799,18.2323597 Z" fill="#000000" fillRule="nonzero" transform="translate(14.701953, 10.701953) rotate(-135.000000) translate(-14.701953, -10.701953)" />
                      <path d="M12.9,2 C13.4522847,2 13.9,2.44771525 13.9,3 C13.9,3.55228475 13.4522847,4 12.9,4 L6,4 C4.8954305,4 4,4.8954305 4,6 L4,18 C4,19.1045695 4.8954305,20 6,20 L18,20 C19.1045695,20 20,19.1045695 20,18 L20,13 C20,12.4477153 20.4477153,12 21,12 C21.5522847,12 22,12.4477153 22,13 L22,18 C22,20.209139 20.209139,22 18,22 L6,22 C3.790861,22 2,20.209139 2,18 L2,6 C2,3.790861 3.790861,2 6,2 L12.9,2 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
              <a href="#" className="btn btn-icon btn-light btn-hover-primary btn-sm">
                <span className="svg-icon svg-icon-md svg-icon-primary">
                  {/*begin::Svg Icon | path:assets/media/svg/icons/General/Trash.svg*/}
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                      <rect x={0} y={0} width={24} height={24} />
                      <path d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z" fill="#000000" fillRule="nonzero" />
                      <path d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z" fill="#000000" opacity="0.3" />
                    </g>
                  </svg>
                  {/*end::Svg Icon*/}
                </span>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    {/*end::Table*/}
  </div>
  {/*end::Body*/}
</div>
{/*end::Advance Table Widget 7*/}

        </>
    )
}
