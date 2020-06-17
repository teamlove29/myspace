import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import { toAbsoluteUrl, checkIsActive } from "../../_helpers";
export default function Aside(props) {
  const type = props.type;
  const paramsId = props.match.params.id;
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? " active " : "";
  };
  return (
    <>
      {/*begin::Aside*/}
      <div
        className="flex-row-auto offcanvas-mobile w-250px w-xxl-350px"
        id="kt_profile_aside"
      >
        {/*begin::Profile Card*/}
        <div className="card card-custom card-stretch">
          {/*begin::Body*/}
          <div className="card-body pt-4">
            {/*begin::User*/}
            <div className="d-flex align-items-center">
              <div className="symbol symbol-60 symbol-xxl-100 mr-5 align-self-start align-self-xxl-center">
                <div
                  className="symbol-label"
                  style={{
                    backgroundImage: 'url("/assets/media/users/300_21.jpg")',
                  }}
                />
              </div>
              <div>
                <a
                  href="#"
                  className="font-weight-bolder font-size-h5 text-dark-75 text-hover-primary"
                >
                  James Jones
                </a>
                <div className="text-muted">
                  <span class="label label-success  label-pill label-inline ">
                    {type}
                  </span>
                </div>
                <div className="mt-2"></div>
              </div>
            </div>
            {/*end::User*/}
            {/*begin::Contact*/}
            <div className="py-9">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="font-weight-bold mr-2">Email :</span>
                <a href="#" className="text-muted text-hover-primary">
                  demo@demo.com
                </a>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="font-weight-bold mr-2">Phone :</span>
                <span className="text-muted">0882170890</span>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="font-weight-bold mr-2">Create date :</span>
                <span className="text-muted">01/01/2020</span>
              </div>
            </div>
            {/*end::Contact*/}
            {/*begin::Nav*/}
            {/* begin Profile Overview */}
            <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
              <div className="navi-item mb-2">
                <Link
                  to={`/member/overview/${paramsId}`}
                  className={`navi-link py-4 ${getMenuItemActive(
                    "/member/overview/"
                  )}`}
                >
                  <span className="navi-icon mr-2">
                    <span className="svg-icon">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Design/Layers.svg*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M12.9336061,16.072447 L19.36,10.9564761 L19.5181585,10.8312381 C20.1676248,10.3169571 20.2772143,9.3735535 19.7629333,8.72408713 C19.6917232,8.63415859 19.6104327,8.55269514 19.5206557,8.48129411 L12.9336854,3.24257445 C12.3871201,2.80788259 11.6128799,2.80788259 11.0663146,3.24257445 L4.47482784,8.48488609 C3.82645598,9.00054628 3.71887192,9.94418071 4.23453211,10.5925526 C4.30500305,10.6811601 4.38527899,10.7615046 4.47382636,10.8320511 L4.63,10.9564761 L11.0659024,16.0730648 C11.6126744,16.5077525 12.3871218,16.5074963 12.9336061,16.072447 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                          <path
                            d="M11.0563554,18.6706981 L5.33593024,14.122919 C4.94553994,13.8125559 4.37746707,13.8774308 4.06710397,14.2678211 C4.06471678,14.2708238 4.06234874,14.2738418 4.06,14.2768747 L4.06,14.2768747 C3.75257288,14.6738539 3.82516916,15.244888 4.22214834,15.5523151 C4.22358765,15.5534297 4.2250303,15.55454 4.22647627,15.555646 L11.0872776,20.8031356 C11.6250734,21.2144692 12.371757,21.2145375 12.909628,20.8033023 L19.7677785,15.559828 C20.1693192,15.2528257 20.2459576,14.6784381 19.9389553,14.2768974 C19.9376429,14.2751809 19.9363245,14.2734691 19.935,14.2717619 L19.935,14.2717619 C19.6266937,13.8743807 19.0546209,13.8021712 18.6572397,14.1104775 C18.654352,14.112718 18.6514778,14.1149757 18.6486172,14.1172508 L12.9235044,18.6705218 C12.377022,19.1051477 11.6029199,19.1052208 11.0563554,18.6706981 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </span>
                  <span className="navi-text font-size-lg">
                    Profile Overview
                  </span>
                </Link>
              </div>
              {/* end Profile Overview */}
              {/* begin Personal Information */}
              <div className="navi-item mb-2">
                <Link
                  to={`/member/edit/${paramsId}`}
                  className={`navi-link py-4 ${getMenuItemActive(
                    "/member/edit/"
                  )}`}
                >
                  <span className="navi-icon mr-2">
                    <span className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z"
                            fill="#000000"
                            fillRule="nonzero"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="navi-text font-size-lg">
                    Personal Information
                  </span>
                </Link>
              </div>
              {/* end Personal Information */}

              {/* begin Change Password */}
              <div className="navi-item mb-2">
                <a
                  href="#"
                  className={`navi-link py-4 ${getMenuItemActive(
                    "/member/xxx/"
                  )}`}
                >
                  <span className="navi-icon mr-2">
                    <span className="svg-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M4,4 L11.6314229,2.5691082 C11.8750185,2.52343403 12.1249815,2.52343403 12.3685771,2.5691082 L20,4 L20,13.2830094 C20,16.2173861 18.4883464,18.9447835 16,20.5 L12.5299989,22.6687507 C12.2057287,22.8714196 11.7942713,22.8714196 11.4700011,22.6687507 L8,20.5 C5.51165358,18.9447835 4,16.2173861 4,13.2830094 L4,4 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M12,11 C10.8954305,11 10,10.1045695 10,9 C10,7.8954305 10.8954305,7 12,7 C13.1045695,7 14,7.8954305 14,9 C14,10.1045695 13.1045695,11 12,11 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                          <path
                            d="M7.00036205,16.4995035 C7.21569918,13.5165724 9.36772908,12 11.9907452,12 C14.6506758,12 16.8360465,13.4332455 16.9988413,16.5 C17.0053266,16.6221713 16.9988413,17 16.5815,17 C14.5228466,17 11.463736,17 7.4041679,17 C7.26484009,17 6.98863236,16.6619875 7.00036205,16.4995035 Z"
                            fill="#000000"
                            opacity="0.3"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="navi-text font-size-lg">
                    Change Password
                  </span>
                </a>
              </div>
              {/* end Change Password */}
           
             {type === 'artist' ? 
                // begin  Albums 
               <div className="navi-item mb-2">
                <Link
                  to={`/member/albums/${paramsId}`}
                  className={`navi-link py-4 ${getMenuItemActive(
                    "/member/albums"
                  )}`}
                >
                  <span className="navi-icon mr-2">
                    <span className="svg-icon svg-icon-2x">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path
                            d="M5.85714286,2 L13.7364114,2 C14.0910962,2 14.4343066,2.12568431 14.7051108,2.35473959 L19.4686994,6.3839416 C19.8056532,6.66894833 20,7.08787823 20,7.52920201 L20,20.0833333 C20,21.8738751 19.9795521,22 18.1428571,22 L5.85714286,22 C4.02044787,22 4,21.8738751 4,20.0833333 L4,3.91666667 C4,2.12612489 4.02044787,2 5.85714286,2 Z"
                            fill="#000000"
                            fillRule="nonzero"
                            opacity="0.3"
                          />
                          <path
                            d="M9.83333333,17 C8.82081129,17 8,16.3159906 8,15.4722222 C8,14.6284539 8.82081129,13.9444444 9.83333333,13.9444444 C10.0476105,13.9444444 10.2533018,13.9750785 10.4444444,14.0313779 L10.4444444,9.79160113 C10.4444444,9.47824076 10.6398662,9.20124044 10.9268804,9.10777287 L14.4407693,8.0331119 C14.8834716,7.88894376 15.3333333,8.23360047 15.3333333,8.71694016 L15.3333333,9.79160113 C15.3333333,10.1498215 14.9979332,10.3786009 14.7222222,10.4444444 C14.3255297,10.53918 13.3070112,10.7428837 11.6666667,11.0555556 L11.6666667,15.5035214 C11.6666667,15.5583862 11.6622174,15.6091837 11.6535404,15.6559869 C11.5446237,16.4131089 10.771224,17 9.83333333,17 Z"
                            fill="#000000"
                          />
                        </g>
                      </svg>
                    </span>
                  </span>
                  <span className="navi-text font-size-lg">Albums</span>
                </Link>
              </div>
              //  end  Albums 
             : null
            } 

              {/* <div className="navi-item mb-2">
              <a href="#" className={`navi-link py-4 ${getMenuItemActive("/member/xxx/")}`}>
                <span className="navi-icon mr-2">
                  <span className="svg-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z" fill="#000000" opacity="0.3" />
                        <path d="M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z" fill="#000000" />
                      </g>
                    </svg>

                  </span>
                </span>
                <span className="navi-text font-size-lg">Email settings</span>
              </a>
            </div> */}

              <div className="navi-item mb-2 ">
                <a
                  href="#"
                  className="navi-link py-4"
                  onClick={() => {
                    props.history.push("/member");
                  }}
                >
                  <span className="navi-icon  mr-2">
                    <span className="svg-icon  svg-icon-2x">
                      {/*begin::Svg Icon | path:/home/keenthemes/www/metronic/themes/metronic/theme/html/demo1/dist/../src/media/svg/icons/Media/Backward.svg*/}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        version="1.1"
                      >
                        <g
                          stroke="none"
                          strokeWidth={1}
                          fill="none"
                          fillRule="evenodd"
                        >
                          <rect x={0} y={0} width={24} height={24} />
                          <path
                            d="M11.0879549,18.2771971 L17.8286578,12.3976203 C18.0367595,12.2161036 18.0583109,11.9002555 17.8767943,11.6921539 C17.8622027,11.6754252 17.8465132,11.6596867 17.8298301,11.6450431 L11.0891271,5.72838979 C10.8815919,5.54622572 10.5656782,5.56679309 10.3835141,5.7743283 C10.3034433,5.86555116 10.2592899,5.98278612 10.2592899,6.10416552 L10.2592899,17.9003957 C10.2592899,18.1765381 10.4831475,18.4003957 10.7592899,18.4003957 C10.8801329,18.4003957 10.9968872,18.3566309 11.0879549,18.2771971 Z"
                            fill="#000000"
                            opacity="0.3"
                            transform="translate(14.129645, 12.002277) scale(-1, 1) translate(-14.129645, -12.002277) "
                          />
                          <path
                            d="M5.08795487,18.2771971 L11.8286578,12.3976203 C12.0367595,12.2161036 12.0583109,11.9002555 11.8767943,11.6921539 C11.8622027,11.6754252 11.8465132,11.6596867 11.8298301,11.6450431 L5.08912711,5.72838979 C4.8815919,5.54622572 4.56567821,5.56679309 4.38351414,5.7743283 C4.30344325,5.86555116 4.25928988,5.98278612 4.25928988,6.10416552 L4.25928988,17.9003957 C4.25928988,18.1765381 4.48314751,18.4003957 4.75928988,18.4003957 C4.88013293,18.4003957 4.99688719,18.3566309 5.08795487,18.2771971 Z"
                            fill="#000000"
                            transform="translate(8.129645, 12.002277) scale(-1, 1) translate(-8.129645, -12.002277) "
                          />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
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
  );
}
