import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function Aside() {

  const router = useRouter();

  const checkIsActive = (location, url) => {
    const current = getCurrentUrl(location);
    if (!current || !url) {
        return  false;
    }

    if (current === url) {
        return  true;
    }

    if (current.indexOf(url) > -1) {
        return true;
    }

    return false;
}

  const getMenuItemActive = (url) => {
    return checkIsActive(router, url)
      ? " menu-item-active menu-item-open "
      : "";
  };
  return (
    <>
      <style jsx>{`
        .bg-black {
          background-color: black;
        }
        ul li{
          font-family: 'Poppins-Medium', sans-serif;
          line-height: 15pt ;

        }
      `}</style>
      {/* Sidebar */} 

      <ul  style={{zIndex:'1',}}
      className="navbar-nav bg-black sidebar sidebar-dark accordion">
        {/* Sidebar - Brand */}

        <Link href="/" >
          <a 
          className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i className="fas fa-laugh-wink" /> */}
            </div>
            <img width="30px" src="/assets/img/icon/myspace.png" alt=""/>
            <div className="sidebar-brand-text mx-3">My Space</div>
          </a>
        </Link>
        {/* Heading */}
        <div className="sidebar-heading mt-4">DISCOVER</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item mt-2">
          <Link href="/test" >
            <a className="nav-link collapsed">
              <span>HOME</span>
            </a>
          </Link>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item ">
        <Link href="/home/home" as="/" >
            <a className="nav-link collapsed">
              <span>LIVE</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>MUSIC</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>CHARTS</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>EVENT</span>
            </a>
          </Link>
        </li>
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>FEATURES</span>
            </a>
          </Link>
        </li>
        {/* Heading */}
        <div className="sidebar-heading mt-2">YOU</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item mt-2 ">
          <Link href="/">
            <a className="nav-link collapsed">
              <span>MY PROFILE</span>
            </a>
          </Link>
        </li>
        {/* Nav Item - Charts */}
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link">
              <i className="fas fa-fw fa-chart-area" />
              <span>SETTING</span>
            </a>
          </Link>
        </li>
        {/* Nav Item - Tables */}
        <li className="nav-item ">
          <Link href="/">
            <a className="nav-link">
              <i className="fas fa-fw fa-table" />
              <span>LOG OUT</span>
            </a>
          </Link>
        </li>
      </ul>





      {/* End of Sidebar */}
    </>
  );
}
