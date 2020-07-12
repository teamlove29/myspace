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
  const {
    currentUser,
    nameMember,
    dataMember,
    setavatarMember,
    setcoverMember,
  } = useContext(ModalContext);
  const typeMember = !dataMember ? null : dataMember.mem_type;
  const getMenuItemActive = (path) => {
    const pathname = router.pathname;
    if (!pathname || !path) {
      return false;
    }
    if (pathname === path) {
      return "font-Medium menuActive";
    }
    if (pathname.indexOf(path) > -1) {
      return "font-Medium menuActive";
    }
    return false;
  };

  const handleSignOut = () => {
    firebase.auth().signOut();
    setavatarMember(process.env.AVATARHOLDER);
    setcoverMember(undefined);
    router.push("/");
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
        className="navbar-nav bg-black sidebar sidebar-dark accordion d-none d-lg-block"
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
          <Link href="/music" as="/">
            <a className="nav-link collapsed">
              <span>MUSIC</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/charts" as="/">
            <a className="nav-link collapsed">
              <span>CHARTS</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/event" as="/">
            <a className="nav-link collapsed">
              <span>EVENT</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/features" as="/">
            <a className="nav-link collapsed">
              <span>FEATURES</span>
            </a>
          </Link>
        </li>
        {currentUser === true && dataMember != undefined ? (
          <>
            {/* Heading */}
            <div className="sidebar-heading mt-2">YOU</div>
            {/* Nav Item - Pages Collapse Menu */}
            <li className="nav-item mt-2 ">
              <Link href="/[username]" as={`/${nameMember}`}>
                <a className="nav-link collapsed">
                  <span> MY PROFILE</span>
                </a>
              </Link>
            </li>
            {/* Nav Item - Charts */}
            <li className="nav-item ">
              <Link href="/[username]/setting" as={`/${nameMember}/setting`}>
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

            {typeMember === 2 && (
              <>
                <div className="sidebar-heading mt-2">BRAND</div>
                <ul>
                  <li className="nav-item ">
                    <Link href="/features" as="/">
                      <a className="nav-link collapsed">
                        <span>CREATE BRAND</span>
                      </a>
                    </Link>
                  </li>
                </ul>
              </>
            )}
          </>
        ) : null}
      </ul>

      {/* End of Sidebar */}
    </>
  );
}
