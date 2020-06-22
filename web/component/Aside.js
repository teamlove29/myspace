import React from "react";
import Link from "next/link";


export default function Aside() {
  return (
    <>
      <style jsx>{`
        .bg-black {
          background-color: black;
        }
      `}</style>
      {/* Sidebar */}

      <ul className="navbar-nav bg-black sidebar sidebar-dark accordion">
        {/* Sidebar - Brand */}
        <Link href="/">
          <a className="sidebar-brand d-flex align-items-center justify-content-center">
            <div className="sidebar-brand-icon rotate-n-15">
              {/* <i className="fas fa-laugh-wink" /> */}
            </div>
            <div className="sidebar-brand-text mx-3">My Space</div>
          </a>
        </Link>
        {/* Heading */}
        <div className="sidebar-heading mt-4">DISCOVER</div>
        {/* Nav Item - Pages Collapse Menu */}
        <li className="nav-item mt-2">
          <Link href="/test">
            <a className="nav-link collapsed">
              <span>HOME</span>
            </a>
          </Link>
        </li>
        {/* Nav Item - Utilities Collapse Menu */}
        <li className="nav-item ">
          <Link href="/">
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
