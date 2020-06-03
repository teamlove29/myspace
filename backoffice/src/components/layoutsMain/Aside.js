import React from 'react'
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import { toAbsoluteUrl, checkIsActive } from "../../_helpers";

function Aside() {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url)
      ? " menu-item-active menu-item-open "
      : "";
  };
  return (
    <div>



      {/*begin::Aside*/}
      <div className="aside aside-left aside-fixed d-flex flex-column flex-row-auto" id="kt_aside">
        {/*begin::Brand*/}
        <div className="brand flex-column-auto" id="kt_brand">
          {/*begin::Logo*/}
          <a href="/" className="brand-logo">
          
            <img alt="Logo" src={toAbsoluteUrl("/assets/media/logos/logo-light.png")} />
          </a>
          {/*end::Logo*/}
          {/*begin::Toggle*/}
          <button className="brand-toggle btn btn-sm px-0" id="kt_aside_toggle">
            <span className="svg-icon svg-icon svg-icon-xl">
              {/*begin::Svg Icon | path:assets/media/svg/icons/Navigation/Angle-double-left.svg*/}
              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                  <polygon points="0 0 24 0 24 24 0 24" />
                  <path d="M5.29288961,6.70710318 C4.90236532,6.31657888 4.90236532,5.68341391 5.29288961,5.29288961 C5.68341391,4.90236532 6.31657888,4.90236532 6.70710318,5.29288961 L12.7071032,11.2928896 C13.0856821,11.6714686 13.0989277,12.281055 12.7371505,12.675721 L7.23715054,18.675721 C6.86395813,19.08284 6.23139076,19.1103429 5.82427177,18.7371505 C5.41715278,18.3639581 5.38964985,17.7313908 5.76284226,17.3242718 L10.6158586,12.0300721 L5.29288961,6.70710318 Z" fill="#000000" fillRule="nonzero" transform="translate(8.999997, 11.999999) scale(-1, 1) translate(-8.999997, -11.999999)" />
                  <path d="M10.7071009,15.7071068 C10.3165766,16.0976311 9.68341162,16.0976311 9.29288733,15.7071068 C8.90236304,15.3165825 8.90236304,14.6834175 9.29288733,14.2928932 L15.2928873,8.29289322 C15.6714663,7.91431428 16.2810527,7.90106866 16.6757187,8.26284586 L22.6757187,13.7628459 C23.0828377,14.1360383 23.1103407,14.7686056 22.7371482,15.1757246 C22.3639558,15.5828436 21.7313885,15.6103465 21.3242695,15.2371541 L16.0300699,10.3841378 L10.7071009,15.7071068 Z" fill="#000000" fillRule="nonzero" opacity="0.3" transform="translate(15.999997, 11.999999) scale(-1, 1) rotate(-270.000000) translate(-15.999997, -11.999999)" />
                </g>
              </svg>
              {/*end::Svg Icon*/}
            </span>
          </button>
          {/*end::Toolbar*/}
        </div>
        {/*end::Brand*/}
        {/*begin::Aside Menu*/}
        <div className="aside-menu-wrapper flex-column-fluid" id="kt_aside_menu_wrapper">
          {/*begin::Menu Container*/}
          <div id="kt_aside_menu" className="aside-menu my-4" data-menu-vertical={1} data-menu-scroll={1} data-menu-dropdown-timeout={500}>
            {/*begin::Menu Nav*/}
            <ul className="menu-nav">
              <li
                className={`menu-item ${getMenuItemActive("/dashboard")}`} aria-haspopup="true">
                <NavLink to="/dashboard" className="menu-link">
                  <span className="svg-icon menu-icon">
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
                  <span className="menu-text">Dashboard</span>
                </NavLink>
              </li>

              <li className={`menu-item ${getMenuItemActive("/member")}`} aria-haspopup="true">
                <NavLink to="/member" className="menu-link">
                  <span className="svg-icon menu-icon">
                    {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\General\User.svg*/}
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <polygon points="0 0 24 0 24 24 0 24" />
                        <path d="M12,11 C9.790861,11 8,9.209139 8,7 C8,4.790861 9.790861,3 12,3 C14.209139,3 16,4.790861 16,7 C16,9.209139 14.209139,11 12,11 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                        <path d="M3.00065168,20.1992055 C3.38825852,15.4265159 7.26191235,13 11.9833413,13 C16.7712164,13 20.7048837,15.2931929 20.9979143,20.2 C21.0095879,20.3954741 20.9979143,21 20.2466999,21 C16.541124,21 11.0347247,21 3.72750223,21 C3.47671215,21 2.97953825,20.45918 3.00065168,20.1992055 Z" fill="#000000" fillRule="nonzero" />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>

                  <span className="menu-text">Members</span>
                </NavLink>
              </li>


              {/* <li className="menu-section">
                <h4 className="menu-text">Custom</h4>
                <i className="menu-icon ki ki-bold-more-hor icon-md" />
              </li> */}
              
              {/* <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                <a href="javascript:;" className="menu-link menu-toggle">
                  <span className="svg-icon menu-icon"> */}
                    {/*begin::Svg Icon | path:assets/media/svg/icons/Layout/Layout-4-blocks.svg*/}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <rect fill="#000000" x={4} y={4} width={7} height={7} rx="1.5" />
                        <path d="M5.5,13 L9.5,13 C10.3284271,13 11,13.6715729 11,14.5 L11,18.5 C11,19.3284271 10.3284271,20 9.5,20 L5.5,20 C4.67157288,20 4,19.3284271 4,18.5 L4,14.5 C4,13.6715729 4.67157288,13 5.5,13 Z M14.5,4 L18.5,4 C19.3284271,4 20,4.67157288 20,5.5 L20,9.5 C20,10.3284271 19.3284271,11 18.5,11 L14.5,11 C13.6715729,11 13,10.3284271 13,9.5 L13,5.5 C13,4.67157288 13.6715729,4 14.5,4 Z M14.5,13 L18.5,13 C19.3284271,13 20,13.6715729 20,14.5 L20,18.5 C20,19.3284271 19.3284271,20 18.5,20 L14.5,20 C13.6715729,20 13,19.3284271 13,18.5 L13,14.5 C13,13.6715729 13.6715729,13 14.5,13 Z" fill="#000000" opacity="0.3" />
                      </g>
                    </svg> */}
                    {/*end::Svg Icon*/}
                  {/* </span>
                  <span className="menu-text">Applications</span>
                  <i className="menu-arrow" />
                </a>
                <div className="menu-submenu">
                  <i className="menu-arrow" />
                  <ul className="menu-subnav">
                    <li className="menu-item menu-item-parent" aria-haspopup="true">
                      <span className="menu-link">
                        <span className="menu-text">Applications</span>
                      </span>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Users</span>
                        <span className="menu-label">
                          <span className="label label-rounded label-primary">6</span>
                        </span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/list-default.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Default</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/list-datatable.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Datatable</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/list-columns-1.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 1</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/list-columns-2.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 2</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/add-user.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Add User</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/user/edit-user.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Edit User</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Profile</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                            <a href="javascript:;" className="menu-link menu-toggle">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Profile 1</span>
                              <i className="menu-arrow" />
                            </a>
                            <div className="menu-submenu">
                              <i className="menu-arrow" />
                              <ul className="menu-subnav">
                                <li className="menu-item" aria-haspopup="true">
                                  <a href="custom/apps/profile/profile-1/overview.html" className="menu-link">
                                    <i className="menu-bullet menu-bullet-line">
                                      <span />
                                    </i>
                                    <span className="menu-text">Overview</span>
                                  </a>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                  <a href="custom/apps/profile/profile-1/personal-information.html" className="menu-link">
                                    <i className="menu-bullet menu-bullet-line">
                                      <span />
                                    </i>
                                    <span className="menu-text">Personal Information</span>
                                  </a>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                  <a href="custom/apps/profile/profile-1/account-information.html" className="menu-link">
                                    <i className="menu-bullet menu-bullet-line">
                                      <span />
                                    </i>
                                    <span className="menu-text">Account Information</span>
                                  </a>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                  <a href="custom/apps/profile/profile-1/change-password.html" className="menu-link">
                                    <i className="menu-bullet menu-bullet-line">
                                      <span />
                                    </i>
                                    <span className="menu-text">Change Password</span>
                                  </a>
                                </li>
                                <li className="menu-item" aria-haspopup="true">
                                  <a href="custom/apps/profile/profile-1/email-settings.html" className="menu-link">
                                    <i className="menu-bullet menu-bullet-line">
                                      <span />
                                    </i>
                                    <span className="menu-text">Email Settings</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/profile/profile-2.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Profile 2</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/profile/profile-3.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Profile 3</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/profile/profile-4.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Profile 4</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Contacts</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/contacts/list-columns.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/contacts/list-datatable.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Datatable</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/contacts/view-contact.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">View Contact</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/contacts/add-contact.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Add Contact</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/contacts/edit-contact.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Edit Contact</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Projects</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/list-columns-1.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 1</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/list-columns-2.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 2</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/list-columns-3.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 3</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/list-columns-4.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Columns 4</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/list-datatable.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">List - Datatable</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/view-project.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">View Project</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/add-project.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Add Project</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/projects/edit-project.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Edit Project</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Support Center</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/home-1.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Home 1</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/home-2.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Home 2</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/faq-1.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">FAQ 1</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/faq-2.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">FAQ 2</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/faq-3.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">FAQ 3</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/feedback.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Feedback</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/support-center/license.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">License</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Chat</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/chat/private.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Private</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/chat/group.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Group</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/chat/popup.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Popup</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item menu-item-submenu" aria-haspopup="true" data-menu-toggle="hover">
                      <a href="javascript:;" className="menu-link menu-toggle">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Todo</span>
                        <i className="menu-arrow" />
                      </a>
                      <div className="menu-submenu">
                        <i className="menu-arrow" />
                        <ul className="menu-subnav">
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/todo/tasks.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Tasks</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/todo/docs.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Docs</span>
                            </a>
                          </li>
                          <li className="menu-item" aria-haspopup="true">
                            <a href="custom/apps/todo/files.html" className="menu-link">
                              <i className="menu-bullet menu-bullet-dot">
                                <span />
                              </i>
                              <span className="menu-text">Files</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="menu-item" aria-haspopup="true">
                      <a href="custom/apps/inbox.html" className="menu-link">
                        <i className="menu-bullet menu-bullet-line">
                          <span />
                        </i>
                        <span className="menu-text">Inbox</span>
                        <span className="menu-label">
                          <span className="label label-danger label-inline">new</span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li> */}

              <li className="menu-section">
                <h4 className="menu-text">Example</h4>
                <i className="menu-icon ki ki-bold-more-hor icon-md" />
              </li>

              <li className={`menu-item ${getMenuItemActive("/testPage")}`} aria-haspopup="true">
                <NavLink to="/testPage" className="menu-link">
                  <span className="svg-icon menu-icon">
                    {/*begin::Svg Icon | path:C:\wamp64\www\keenthemes\themes\metronic\theme\html\demo1\dist/../src/media/svg/icons\Code\Code.svg*/}<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                      <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                        <rect x={0} y={0} width={24} height={24} />
                        <path d="M17.2718029,8.68536757 C16.8932864,8.28319382 16.9124644,7.65031935 17.3146382,7.27180288 C17.7168119,6.89328641 18.3496864,6.91246442 18.7282029,7.31463817 L22.7282029,11.5646382 C23.0906029,11.9496882 23.0906029,12.5503176 22.7282029,12.9353676 L18.7282029,17.1853676 C18.3496864,17.5875413 17.7168119,17.6067193 17.3146382,17.2282029 C16.9124644,16.8496864 16.8932864,16.2168119 17.2718029,15.8146382 L20.6267538,12.2500029 L17.2718029,8.68536757 Z M6.72819712,8.6853647 L3.37324625,12.25 L6.72819712,15.8146353 C7.10671359,16.2168091 7.08753558,16.8496835 6.68536183,17.2282 C6.28318808,17.6067165 5.65031361,17.5875384 5.27179713,17.1853647 L1.27179713,12.9353647 C0.909397125,12.5503147 0.909397125,11.9496853 1.27179713,11.5646353 L5.27179713,7.3146353 C5.65031361,6.91246155 6.28318808,6.89328354 6.68536183,7.27180001 C7.08753558,7.65031648 7.10671359,8.28319095 6.72819712,8.6853647 Z" fill="#000000" fillRule="nonzero" />
                        <rect fill="#000000" opacity="0.3" transform="translate(12.000000, 12.000000) rotate(-345.000000) translate(-12.000000, -12.000000) " x={11} y={4} width={2} height={16} rx={1} />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>

                  <span className="menu-text">Test Page</span>
                </NavLink>
              </li>

            </ul>
            {/*end::Menu Nav*/}
          </div>
          {/*end::Menu Container*/}
        </div>
        {/*end::Aside Menu*/}
      </div>


      {/*end::Aside*/}
      {/*begin::Wrapper*/}





      {/*end::Wrapper*/}
      {/*end::Page*/}
      {/*end::Main*/}
      {/* begin::User Panel*/}
      <div id="kt_quick_user" className="offcanvas offcanvas-right p-10">
        {/*begin::Header*/}
        <div className="offcanvas-header d-flex align-items-center justify-content-between pb-5">
          <h3 className="font-weight-bold m-0">User Profile
        <small className="text-muted font-size-sm ml-2">12 messages</small></h3>
          <a href="#" className="btn btn-xs btn-icon btn-light btn-hover-primary" id="kt_quick_user_close">
            <i className="ki ki-close icon-xs text-muted" />
          </a>
        </div>
        {/*end::Header*/}
        {/*begin::Content*/}
        <div className="offcanvas-content pr-5 mr-n5">
          {/*begin::Header*/}
          <div className="d-flex align-items-center mt-5">
            <div className="symbol symbol-100 mr-5">
              <div className="symbol-label" style={{ backgroundImage: 'url("assets/media/users/300_21.jpg")' }} />
              <i className="symbol-badge bg-success" />
            </div>
            <div className="d-flex flex-column">
              <a href="#" className="font-weight-bold font-size-h5 text-dark-75 text-hover-primary">James Jones</a>
              <div className="text-muted mt-1">Application Developer</div>
              <div className="navi mt-2">
                <a href="#" className="navi-item">
                  <span className="navi-link p-0 pb-2">
                    <span className="navi-icon mr-1">
                      <span className="svg-icon svg-icon-lg svg-icon-primary">
                        {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-notification.svg*/}
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                          <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                            <rect x={0} y={0} width={24} height={24} />
                            <path d="M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z" fill="#000000" />
                            <circle fill="#000000" opacity="0.3" cx="19.5" cy="17.5" r="2.5" />
                          </g>
                        </svg>
                        {/*end::Svg Icon*/}
                      </span>
                    </span>
                    <span className="navi-text text-muted text-hover-primary">jm@softplus.com</span>
                  </span>
                </a>
                <a href="/Logout" className="btn btn-sm btn-light-primary font-weight-bolder py-2 px-5">Sign Out</a>
              </div>
            </div>
          </div>
          {/*end::Header*/}
          {/*begin::Separator*/}
          <div className="separator separator-dashed mt-8 mb-5" />
          {/*end::Separator*/}
          {/*begin::Nav*/}
          <div className="navi navi-spacer-x-0 p-0">
            {/*begin::Item*/}
            <a href="custom/apps/user/profile-1/personal-information.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-success">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/General/Notification2.svg*/}
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect x={0} y={0} width={24} height={24} />
                          <path d="M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z" fill="#000000" />
                          <circle fill="#000000" opacity="0.3" cx="18.5" cy="5.5" r="2.5" />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Profile</div>
                  <div className="text-muted">Account settings and more
                <span className="label label-light-danger label-inline font-weight-bold">update</span></div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a href="custom/apps/user/profile-3.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-warning">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Shopping/Chart-bar1.svg*/}
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <rect x={0} y={0} width={24} height={24} />
                          <rect fill="#000000" opacity="0.3" x={12} y={4} width={3} height={13} rx="1.5" />
                          <rect fill="#000000" opacity="0.3" x={7} y={9} width={3} height={8} rx="1.5" />
                          <path d="M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z" fill="#000000" fillRule="nonzero" />
                          <rect fill="#000000" opacity="0.3" x={17} y={11} width={3} height={6} rx="1.5" />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Messages</div>
                  <div className="text-muted">Inbox and tasks</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a href="custom/apps/user/profile-2.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-danger">
                      {/*begin::Svg Icon | path:assets/media/svg/icons/Files/Selected-file.svg*/}
                      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
                        <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                          <polygon points="0 0 24 0 24 24 0 24" />
                          <path d="M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero" opacity="0.3" />
                          <path d="M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z" fill="#000000" fillRule="nonzero" />
                        </g>
                      </svg>
                      {/*end::Svg Icon*/}
                    </span>
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Activities</div>
                  <div className="text-muted">Logs and notifications</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
            {/*begin::Item*/}
            <a href="custom/apps/userprofile-1/overview.html" className="navi-item">
              <div className="navi-link">
                <div className="symbol symbol-40 bg-light mr-3">
                  <div className="symbol-label">
                    <span className="svg-icon svg-icon-md svg-icon-primary">
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
                  </div>
                </div>
                <div className="navi-text">
                  <div className="font-weight-bold">My Tasks</div>
                  <div className="text-muted">latest tasks and projects</div>
                </div>
              </div>
            </a>
            {/*end:Item*/}
          </div>
          {/*end::Nav*/}
          {/*begin::Separator*/}
          <div className="separator separator-dashed my-7" />
          {/*end::Separator*/}

        </div>
        {/*end::Content*/}
      </div>


      {/* end::User Panel*/}




    </div>
  )
}

export default Aside
