import React from 'react'
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { toAbsoluteUrl, checkIsActive } from "../../_helpers";
export default function Aside(props) {
    const type = props.type
    const paramsId = props.match.params.id;
    const location = useLocation();
    const getMenuItemActive = (url) => {
      return checkIsActive(location, url)
        ? " active "
        : "";
    };
    return (
        <>
             {/*begin::Aside*/}
    <div className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px" id="kt_profile_aside">
      {/*begin::Profile Card*/}
      <div className="card card-custom card-stretch">
        {/*begin::Body*/}
        <div className="card-body pt-4">
      
          {/*begin::User*/}
          <div className="d-flex align-items-center">
            <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
              <div className="symbol-label" style={{backgroundImage: 'url("assets/media/users/300_21.jpg")'}} />
              <i className="symbol-badge bg-success" />
            </div>
            <div>
              <a href="#" className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
    <div className="text-muted"><span class="label label-success  label-pill label-inline ">{type}</span></div>
              <div className="mt-2">
              </div>
            </div>
          </div>
          {/*end::User*/}
          {/*begin::Contact*/}
          <div className="py-9">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="font-weight-bold mr-2">Email :</span>
              <a href="#" className="text-muted text-hover-primary">demo@demo.com</a>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <span className="font-weight-bold mr-2">Phone :</span>
              <span className="text-muted">(66)34254578</span>
            </div>
            <div className="d-flex align-items-center justify-content-between">
              <span className="font-weight-bold mr-2">Create date :</span>
              <span className="text-muted">01/01/2020</span>
            </div>
          </div>
          {/*end::Contact*/}
          {/*begin::Nav*/}
          <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
            <div className="navi-item mb-2">
              <Link to={`/member/overview/${paramsId}`} className={`navi-link py-4 ${getMenuItemActive("/member/overview/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z" fill="#000000" fillRule="nonzero" />
                        <path d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z" fill="#000000" opacity="0.3" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span className="navi-text font-size-lg">Profile Overview</span>
              </Link>
            </div>
            <div className="navi-item mb-2">
              <Link to={`/member/edit/${paramsId}`} className={`navi-link py-4 ${getMenuItemActive("/member/edit/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span className="navi-text font-size-lg">Personal Information</span>
              </Link>
            </div>
            <div className="navi-item mb-2">
              <a href="#" className={`navi-link py-4 ${getMenuItemActive("/member/xxx/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z" fill="#000000" opacity="0.3" />
                        <path d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z" fill="#000000" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span className="navi-text font-size-lg">Account Information</span>
              </a>
            </div>
            <div className="navi-item mb-2">
              <a href="#" className={`navi-link py-4 ${getMenuItemActive("/member/xxx/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Shield-user.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z" fill="#000000" opacity="0.3" />
                        <path d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z" fill="#000000" opacity="0.3" />
                        <path d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z" fill="#000000" opacity="0.3" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span className="navi-text font-size-lg">Change Passwort</span>
                <span className="navi-label">
                  <span className="label label-light-danger label-rounded font-weight-bold">5</span>
                </span>
              </a>
            </div>
            <div className="navi-item mb-2">
              <a href="#" className={`navi-link py-4 ${getMenuItemActive("/member/xxx/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-opened.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" fill="#000000" opacity="0.3" />
                        <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </span>
                <span className="navi-text font-size-lg">Email settings</span>
              </a>
            </div>
        
            <div className="navi-item mb-2 ">
              <a href="#" className="navi-link py-4" onClick={() => { props.history.push("/member")}}>
                <span className="navi-icon  mr-2">
<span className="svg-icon  svg-icon-2x">
  {/*begin::Svg Icon | path:/home/keenthemes/www/metronic/themes/metronic/theme/html/demo1/dist/../src/media/svg/icons/Media/Backward.svg*/}
  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
      <rect x={0} y={0} width={24} height={24} />
      <path d="M11.0879549,18.2771971 L17.8286578,12.3976203 C18.0367595,12.2161036 18.0583109,11.9002555 17.8767943,11.6921539 C17.8622027,11.6754252 17.8465132,11.6596867 17.8298301,11.6450431 L11.0891271,5.72838979 C10.8815919,5.54622572 10.5656782,5.56679309 10.3835141,5.7743283 C10.3034433,5.86555116 10.2592899,5.98278612 10.2592899,6.10416552 L10.2592899,17.9003957 C10.2592899,18.1765381 10.4831475,18.4003957 10.7592899,18.4003957 C10.8801329,18.4003957 10.9968872,18.3566309 11.0879549,18.2771971 Z" fill="#000000" opacity="0.3" transform="translate(14.129645, 12.002277) scale(-1, 1) translate(-14.129645, -12.002277) " />
      <path d="M5.08795487,18.2771971 L11.8286578,12.3976203 C12.0367595,12.2161036 12.0583109,11.9002555 11.8767943,11.6921539 C11.8622027,11.6754252 11.8465132,11.6596867 11.8298301,11.6450431 L5.08912711,5.72838979 C4.8815919,5.54622572 4.56567821,5.56679309 4.38351414,5.7743283 C4.30344325,5.86555116 4.25928988,5.98278612 4.25928988,6.10416552 L4.25928988,17.9003957 C4.25928988,18.1765381 4.48314751,18.4003957 4.75928988,18.4003957 C4.88013293,18.4003957 4.99688719,18.3566309 5.08795487,18.2771971 Z" fill="#000000" transform="translate(8.129645, 12.002277) scale(-1, 1) translate(-8.129645, -12.002277) " />
    </g>
  </svg>
  {/*end::Svg Icon*/}</span>


                </span>
                <span className="navi-text font-size-lg">Back Page</span>
              </a>
            </div>


          </div>
          {/*end::Nav*/}
        </div>
        {/*end::Body*/}
      </div>
      {/*end::Profile Card*/}
    </div>
    {/*end::Aside*/}
        </>
    )
}
