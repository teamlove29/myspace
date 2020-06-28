import React, { useContext } from "react";
import Link from "next/link";
import firebase from "../config/config";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { ModalContext } from "../config/context/ModalProvider";
export default function Aside() {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const { currentUser, setCurrentUser ,nameMember,setNameMember} = useContext(ModalContext);
  const checkIsActive = (location, url) => {

    const current = getCurrentUrl(location);
    if (!current || !url) {
      return false;
    }
    console.log(user)
    if (current === url) {
      return true;
    }

    if (current.indexOf(url) > -1) {
      return true;
    }

    return false;
  };
  const getMenuItemActive = (url) => {
    return checkIsActive(router, url)
      ? " menu-item-active menu-item-open "
      : "";
  };

  const handleSignOut = () => {
    MySwal.fire({
      position: "top",
      icon: "question",
      title: <h1 className="display-5">Are you sure ?</h1>,
      text: "Are you sure to sign out ?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sign out",
    }).then((result) => {
      if (result.isConfirmed === true) {
        firebase.auth().signOut();
      }
    });
  };

  return (
    <>
      <style jsx>{`
        .bg-black {
          background-color: black;
        }
        ul li {
          font-family: "Poppins-Medium", sans-serif;
          line-height: 15pt;
        }
      `}</style>
      {/* Sidebar */}

      <ul
        style={{ zIndex: "1" }}
        className="navbar-nav bg-black sidebar sidebar-dark accordion"
      >
        {/* Sidebar - Brand */}

        <Link href="/">
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i className="fas fa-laugh-wink" /> */}
            </div>
            <img width="30px" src="/assets/img/icon/myspace.png" alt="" />
            <div className="sidebar-brand-text mx-3">My Space</div>
          </a>
        </Link>
        {/* Heading */}
        <div className="sidebar-heading mt-4">DISCOVER</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item mt-2">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>HOME</span>
            </a>
          </Link>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item ">
          <Link href="/live" as="/">
            <a className="nav-link collapsed">
              <span>LIVE</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/music">
            <a className="nav-link collapsed">
              <span>MUSIC</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/charts">
            <a className="nav-link collapsed">
              <span>CHARTS</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/event">
            <a className="nav-link collapsed">
              <span>EVENT</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/features">
            <a className="nav-link collapsed">
              <span>FEATURES</span>
            </a>
          </Link>
        </li>
        {currentUser === true ? (
          <>
            {/* Heading */}
            <div className="sidebar-heading mt-2">YOU</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item mt-2 ">
              <Link href="/[username]" as={`/${nameMember}`}>
                <a className="nav-link collapsed">
                  <span>MY PROFILE</span>
                </a>
              </Link>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item ">
              <Link href="/[username]/setting" as= {`/${nameMember}/setting`}>
                <a className="nav-link">
                  <i className="fas fa-fw fa-chart-area" />
                  <span>SETTING</span>
                </a>
              </Link>
            </li>
            {/* Nav Item - Tables */}
            <li className="nav-item ">
              <a onClick={handleSignOut} className="nav-link btn">
                <i className="fas fa-fw fa-table" />
                <span>LOG OUT</span>
              </a>
            </li>
          </>
        ) : null}
      </ul>

      {/* End of Sidebar */}
    </>
  );
}
