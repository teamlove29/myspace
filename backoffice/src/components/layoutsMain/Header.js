import React,{useLayoutEffect , useEffect} from "react";
import { NavLink } from "react-router-dom";
import { toAbsoluteUrl } from "../../_helpers";
import {useLocation} from "react-router-dom";
import {BreadCrumbs} from "../../_metronic/layout/components/subheader/components/BreadCrumbs";
import {getBreadcrumbsAndTitle, useSubheader} from "../../_metronic/layout/_core/MetronicSubheader";

function Header() {

  const location = useLocation();
  const subheader = useSubheader();

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    subheader.setBreadcrumbs(aside.breadcrumbs || header.breadcrumbs);
    subheader.setTitle(aside.title || header.title);
    // eslint-disable-next-line
    console.log(location)
  }, [location.pathname]);

  useEffect(() => {}, [subheader]);



  return (
    <>
      <div
        id="kt_header_mobile"
        className="header-mobile align-items-center header-mobile-fixed"
      >
        {/*begin::Header Mobile*/}
        {/*begin::Logo*/}
        <a href="index.html">
          <img
            alt="Logo"
            src={toAbsoluteUrl("/assets/media/logos/logo-light.png")}
          />
        </a>
        {/*end::Logo*/}
        {/*begin::Toolbar*/}
        <div className="d-flex align-items-center">
          {/*begin::Aside Mobile Toggle*/}
          <button
            className="btn p-0 burger-icon burger-icon-left"
            id="kt_aside_mobile_toggle"
          >
            <span />
          </button>
          {/*end::Aside Mobile Toggle*/}
          {/*begin::Header Menu Mobile Toggle*/}
          {/* <button className="btn p-0 burger-icon ml-4" id="kt_header_mobile_toggle">
      <span />
    </button> */}
          {/*end::Header Menu Mobile Toggle*/}
          {/*begin::Topbar Mobile Toggle*/}
          <button
            className="btn btn-hover-text-primary p-0 ml-2"
            id="kt_header_mobile_topbar_toggle"
          >
            <span className="svg-icon svg-icon-xl">
              {/*begin::Svg Icon | path:assets/media/svg/icons/General/User.svg*/}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                version="1.1"
              >
                <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
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
              {/*end::Svg Icon*/}
            </span>
          </button>
          {/*end::Topbar Mobile Toggle*/}
        </div>
        {/*end::Toolbar*/}

        {/*end::Header Mobile*/}
      </div>
      {/*begin::Header*/}
      <div id="kt_header" className="header header-fixed">
        {/*begin::Container*/}
        <div className="container-fluid d-flex align-items-stretch justify-content-between">
          {/*begin::Header Menu Wrapper*/}
          <div
            className="header-menu-wrapper header-menu-wrapper-left"
            id="kt_header_menu_wrapper"
          >
            {/*begin::Header Menu*/}
            <div
              id="kt_header_menu"
              className="header-menu header-menu-mobile header-menu-layout-default"
            >
              {/*begin::Header Nav*/}
              <ul className="menu-nav">
                <li
                  className="menu-item menu-item-open menu-item-here menu-item-submenu menu-item-rel menu-item-open menu-item-here menu-item-active"
                  data-menu-toggle="click"
                  aria-haspopup="true"
                >
                  <a href="javascript:;" className="menu-link menu-toggle">
                    <span className="menu-text">Pages</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                      <li
                        className="menu-item menu-item-active"
                        aria-haspopup="true"
                      >
                        <NavLink to="/dashboard" className="menu-link">
                          <span className="svg-icon menu-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Clothes/Briefcase.svg*/}
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
                                  d="M5.84026576,8 L18.1597342,8 C19.1999115,8 20.0664437,8.79732479 20.1528258,9.83390904 L20.8194924,17.833909 C20.9112219,18.9346631 20.0932459,19.901362 18.9924919,19.9930915 C18.9372479,19.9976952 18.8818364,20 18.8264009,20 L5.1735991,20 C4.0690296,20 3.1735991,19.1045695 3.1735991,18 C3.1735991,17.9445645 3.17590391,17.889153 3.18050758,17.833909 L3.84717425,9.83390904 C3.93355627,8.79732479 4.80008849,8 5.84026576,8 Z M10.5,10 C10.2238576,10 10,10.2238576 10,10.5 L10,11.5 C10,11.7761424 10.2238576,12 10.5,12 L13.5,12 C13.7761424,12 14,11.7761424 14,11.5 L14,10.5 C14,10.2238576 13.7761424,10 13.5,10 L10.5,10 Z"
                                  fill="#000000"
                                />
                                <path
                                  d="M10,8 L8,8 L8,7 C8,5.34314575 9.34314575,4 11,4 L13,4 C14.6568542,4 16,5.34314575 16,7 L16,8 L14,8 L14,7 C14,6.44771525 13.5522847,6 13,6 L11,6 C10.4477153,6 10,6.44771525 10,7 L10,8 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  opacity="0.3"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <span className="menu-text">My Account</span>
                        </NavLink>
                      </li>
                      <li className="menu-item" aria-haspopup="true">
                        <a href="javascript:;" className="menu-link">
                          <span className="svg-icon menu-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Code/Compiling.svg*/}
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
                                  d="M2.56066017,10.6819805 L4.68198052,8.56066017 C5.26776695,7.97487373 6.21751442,7.97487373 6.80330086,8.56066017 L8.9246212,10.6819805 C9.51040764,11.267767 9.51040764,12.2175144 8.9246212,12.8033009 L6.80330086,14.9246212 C6.21751442,15.5104076 5.26776695,15.5104076 4.68198052,14.9246212 L2.56066017,12.8033009 C1.97487373,12.2175144 1.97487373,11.267767 2.56066017,10.6819805 Z M14.5606602,10.6819805 L16.6819805,8.56066017 C17.267767,7.97487373 18.2175144,7.97487373 18.8033009,8.56066017 L20.9246212,10.6819805 C21.5104076,11.267767 21.5104076,12.2175144 20.9246212,12.8033009 L18.8033009,14.9246212 C18.2175144,15.5104076 17.267767,15.5104076 16.6819805,14.9246212 L14.5606602,12.8033009 C13.9748737,12.2175144 13.9748737,11.267767 14.5606602,10.6819805 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                />
                                <path
                                  d="M8.56066017,16.6819805 L10.6819805,14.5606602 C11.267767,13.9748737 12.2175144,13.9748737 12.8033009,14.5606602 L14.9246212,16.6819805 C15.5104076,17.267767 15.5104076,18.2175144 14.9246212,18.8033009 L12.8033009,20.9246212 C12.2175144,21.5104076 11.267767,21.5104076 10.6819805,20.9246212 L8.56066017,18.8033009 C7.97487373,18.2175144 7.97487373,17.267767 8.56066017,16.6819805 Z M8.56066017,4.68198052 L10.6819805,2.56066017 C11.267767,1.97487373 12.2175144,1.97487373 12.8033009,2.56066017 L14.9246212,4.68198052 C15.5104076,5.26776695 15.5104076,6.21751442 14.9246212,6.80330086 L12.8033009,8.9246212 C12.2175144,9.51040764 11.267767,9.51040764 10.6819805,8.9246212 L8.56066017,6.80330086 C7.97487373,6.21751442 7.97487373,5.26776695 8.56066017,4.68198052 Z"
                                  fill="#000000"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <span className="menu-text">Task Manager</span>
                          <span className="menu-label">
                            <span className="label label-success label-rounded">
                              2
                            </span>
                          </span>
                        </a>
                      </li>
                      <li
                        className="menu-item menu-item-submenu"
                        data-menu-toggle="hover"
                        aria-haspopup="true"
                      >
                        <a
                          href="javascript:;"
                          className="menu-link menu-toggle"
                        >
                          <span className="svg-icon menu-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Code/CMD.svg*/}
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
                                  d="M9,15 L7.5,15 C6.67157288,15 6,15.6715729 6,16.5 C6,17.3284271 6.67157288,18 7.5,18 C8.32842712,18 9,17.3284271 9,16.5 L9,15 Z M9,15 L9,9 L15,9 L15,15 L9,15 Z M15,16.5 C15,17.3284271 15.6715729,18 16.5,18 C17.3284271,18 18,17.3284271 18,16.5 C18,15.6715729 17.3284271,15 16.5,15 L15,15 L15,16.5 Z M16.5,9 C17.3284271,9 18,8.32842712 18,7.5 C18,6.67157288 17.3284271,6 16.5,6 C15.6715729,6 15,6.67157288 15,7.5 L15,9 L16.5,9 Z M9,7.5 C9,6.67157288 8.32842712,6 7.5,6 C6.67157288,6 6,6.67157288 6,7.5 C6,8.32842712 6.67157288,9 7.5,9 L9,9 L9,7.5 Z M11,13 L13,13 L13,11 L11,11 L11,13 Z M13,11 L13,7.5 C13,5.56700338 14.5670034,4 16.5,4 C18.4329966,4 20,5.56700338 20,7.5 C20,9.43299662 18.4329966,11 16.5,11 L13,11 Z M16.5,13 C18.4329966,13 20,14.5670034 20,16.5 C20,18.4329966 18.4329966,20 16.5,20 C14.5670034,20 13,18.4329966 13,16.5 L13,13 L16.5,13 Z M11,16.5 C11,18.4329966 9.43299662,20 7.5,20 C5.56700338,20 4,18.4329966 4,16.5 C4,14.5670034 5.56700338,13 7.5,13 L11,13 L11,16.5 Z M7.5,11 C5.56700338,11 4,9.43299662 4,7.5 C4,5.56700338 5.56700338,4 7.5,4 C9.43299662,4 11,5.56700338 11,7.5 L11,11 L7.5,11 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <span className="menu-text">Team Manager</span>
                          <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                          <ul className="menu-subnav">
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Add Team Member
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Edit Team Member
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Delete Team Member
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Team Member Reports
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">Assign Tasks</span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-dot">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Promote Team Member
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li
                        className="menu-item menu-item-submenu"
                        data-menu-toggle="hover"
                        aria-haspopup="true"
                      >
                        <a href="#" className="menu-link menu-toggle">
                          <span className="svg-icon menu-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Mail-box.svg*/}
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
                                  d="M22,15 L22,19 C22,20.1045695 21.1045695,21 20,21 L4,21 C2.8954305,21 2,20.1045695 2,19 L2,15 L6.27924078,15 L6.82339262,16.6324555 C7.09562072,17.4491398 7.8598984,18 8.72075922,18 L15.381966,18 C16.1395101,18 16.8320364,17.5719952 17.1708204,16.8944272 L18.118034,15 L22,15 Z"
                                  fill="#000000"
                                />
                                <path
                                  d="M2.5625,13 L5.92654389,7.01947752 C6.2807805,6.38972356 6.94714834,6 7.66969497,6 L16.330305,6 C17.0528517,6 17.7192195,6.38972356 18.0734561,7.01947752 L21.4375,13 L18.118034,13 C17.3604899,13 16.6679636,13.4280048 16.3291796,14.1055728 L15.381966,16 L8.72075922,16 L8.17660738,14.3675445 C7.90437928,13.5508602 7.1401016,13 6.27924078,13 L2.5625,13 Z"
                                  fill="#000000"
                                  opacity="0.3"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <span className="menu-text">Projects Manager</span>
                          <i className="menu-arrow" />
                        </a>
                        <div className="menu-submenu menu-submenu-classic menu-submenu-right">
                          <ul className="menu-subnav">
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Latest Projects
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Ongoing Projects
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Urgent Projects
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Completed Projects
                                </span>
                              </a>
                            </li>
                            <li className="menu-item" aria-haspopup="true">
                              <a href="javascript:;" className="menu-link">
                                <i className="menu-bullet menu-bullet-line">
                                  <span />
                                </i>
                                <span className="menu-text">
                                  Dropped Projects
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className="menu-item" aria-haspopup="true">
                        <a href="javascript:;" className="menu-link">
                          <span className="svg-icon menu-icon">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/Communication/Spam.svg*/}
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
                                  d="M4.5,3 L19.5,3 C20.3284271,3 21,3.67157288 21,4.5 L21,19.5 C21,20.3284271 20.3284271,21 19.5,21 L4.5,21 C3.67157288,21 3,20.3284271 3,19.5 L3,4.5 C3,3.67157288 3.67157288,3 4.5,3 Z M8,5 C7.44771525,5 7,5.44771525 7,6 C7,6.55228475 7.44771525,7 8,7 L16,7 C16.5522847,7 17,6.55228475 17,6 C17,5.44771525 16.5522847,5 16,5 L8,5 Z M10.5857864,14 L9.17157288,15.4142136 C8.78104858,15.8047379 8.78104858,16.4379028 9.17157288,16.8284271 C9.56209717,17.2189514 10.1952621,17.2189514 10.5857864,16.8284271 L12,15.4142136 L13.4142136,16.8284271 C13.8047379,17.2189514 14.4379028,17.2189514 14.8284271,16.8284271 C15.2189514,16.4379028 15.2189514,15.8047379 14.8284271,15.4142136 L13.4142136,14 L14.8284271,12.5857864 C15.2189514,12.1952621 15.2189514,11.5620972 14.8284271,11.1715729 C14.4379028,10.7810486 13.8047379,10.7810486 13.4142136,11.1715729 L12,12.5857864 L10.5857864,11.1715729 C10.1952621,10.7810486 9.56209717,10.7810486 9.17157288,11.1715729 C8.78104858,11.5620972 8.78104858,12.1952621 9.17157288,12.5857864 L10.5857864,14 Z"
                                  fill="#000000"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                          <span className="menu-text">Create New Project</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
              {/*end::Header Nav*/}
            </div>
            {/*end::Header Menu*/}
          </div>
          {/*end::Header Menu Wrapper*/}
          {/*begin::Topbar*/}
          <div className="topbar">
            {/*begin::Search*/}
            <div className="dropdown" id="kt_quick_search_toggle">
              {/*begin::Toggle*/}
              <div
                className="topbar-item"
                data-toggle="dropdown"
                data-offset="10px,0px"
              >
                <div className="btn btn-icon btn-clean btn-lg btn-dropdown mr-1">
                  <span className="svg-icon svg-icon-xl svg-icon-primary">
                    {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
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
                          d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                          fill="#000000"
                          fillRule="nonzero"
                          opacity="0.3"
                        />
                        <path
                          d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                          fill="#000000"
                          fillRule="nonzero"
                        />
                      </g>
                    </svg>
                    {/*end::Svg Icon*/}
                  </span>
                </div>
              </div>
              {/*end::Toggle*/}
              {/*begin::Dropdown*/}
              <div className="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg">
                <div
                  className="quick-search quick-search-dropdown"
                  id="kt_quick_search_dropdown"
                >
                  {/*begin:Form*/}
                  <form method="get" className="quick-search-form">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <span className="svg-icon svg-icon-lg">
                            {/*begin::Svg Icon | path:assets/media/svg/icons/General/Search.svg*/}
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
                                  d="M14.2928932,16.7071068 C13.9023689,16.3165825 13.9023689,15.6834175 14.2928932,15.2928932 C14.6834175,14.9023689 15.3165825,14.9023689 15.7071068,15.2928932 L19.7071068,19.2928932 C20.0976311,19.6834175 20.0976311,20.3165825 19.7071068,20.7071068 C19.3165825,21.0976311 18.6834175,21.0976311 18.2928932,20.7071068 L14.2928932,16.7071068 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                  opacity="0.3"
                                />
                                <path
                                  d="M11,16 C13.7614237,16 16,13.7614237 16,11 C16,8.23857625 13.7614237,6 11,6 C8.23857625,6 6,8.23857625 6,11 C6,13.7614237 8.23857625,16 11,16 Z M11,18 C7.13400675,18 4,14.8659932 4,11 C4,7.13400675 7.13400675,4 11,4 C14.8659932,4 18,7.13400675 18,11 C18,14.8659932 14.8659932,18 11,18 Z"
                                  fill="#000000"
                                  fillRule="nonzero"
                                />
                              </g>
                            </svg>
                            {/*end::Svg Icon*/}
                          </span>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">
                          <i className="quick-search-close ki ki-close icon-sm text-muted" />
                        </span>
                      </div>
                    </div>
                  </form>
                  {/*end::Form*/}
                  {/*begin::Scroll*/}
                  <div
                    className="quick-search-wrapper scroll"
                    data-scroll="true"
                    data-height={325}
                    data-mobile-height={200}
                  />
                  {/*end::Scroll*/}
                </div>
              </div>
              {/*end::Dropdown*/}
            </div>
            {/*end::Search*/}

            {/*begin::User*/}
            <div className="topbar-item">
              <div
                className="btn btn-icon w-auto btn-clean d-flex align-items-center btn-lg px-2"
                id="kt_quick_user_toggle"
              >
                <span className="text-muted font-weight-bold font-size-base d-none d-md-inline mr-1">
                  Hi,
                </span>
                <span className="text-dark-50 font-weight-bolder font-size-base d-none d-md-inline mr-3">
                  Sean
                </span>
                <span className="symbol symbol-35 symbol-light-success">
                  <span className="symbol-label font-size-h5 font-weight-bold">
                    S
                  </span>
                </span>
              </div>
            </div>
            {/*end::User*/}
          </div>
          {/*end::Topbar*/}
        </div>
        {/*end::Container*/}
      </div>

      {/*begin::Subheader*/}
      <div
        className="subheader py-2 py-lg-4 subheader-transparent header header-static"
        id="kt_subheader"
      >
        <div className="container-fluid d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap">
          {/*begin::Info*/}
          <div className="d-flex align-items-center flex-wrap mr-1">
            {/*begin::Page Heading*/}
            <div className="d-flex align-items-baseline mr-5">
              {/*begin::Breadcrumb*/}
              <BreadCrumbs items={subheader.breadcrumbs} />
              {/*end::Breadcrumb*/}
            </div>
            {/*end::Page Heading*/}
          </div>
          {/*end::Info*/}
        </div>
      </div>
      {/*end::Subheader*/}

      {/*end::Header*/}
    </>
  );
}

export default Header;
