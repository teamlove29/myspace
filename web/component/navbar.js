import React, { useState, useEffect, useContext } from "react";
import Auth from "./modal/auth";
import firebase from "../config/config";
import Axios from "axios";
import JWT from "jsonwebtoken";
import { ModalContext } from "../config/context/ModalProvider";
const Navbar = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const {
    currentUser,
    setCurrentUser,
    nameMember,
    setNameMember,
    dataMember,
    setDataMember,
    header,
    setHeader,
  } = useContext(ModalContext);

  const handleSignIn = () => {
    setShowSignIn(true);
    setTimeout(() => {
      setShowSignIn(false);
    }, 50);
  };
  const handleSignUp = () => {
    setShowSignUp(true);
    setTimeout(() => {
      setShowSignUp(false);
    }, 50);
  };


  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const uid = await user.uid;
        const names = user.email.substring(0, user.email.lastIndexOf("@"));
        setNameMember(names);
        let token = await JWT.sign({ uid: uid }, "O5m01VCHmj3w");
        setHeader({ authorization: token });

        try {
          // await Axios.post(process.env.url + "/login-member", { uid: uid });
          const verifyMember = await Axios.get(
            process.env.url + "/edit_font-profile/",
            {
              headers: header,
            }

          );
          setCurrentUser(true);
          setDataMember(verifyMember.data[0]);
        } catch (error) {
          // console.log(error);
          setNameMember(null);
          setCurrentUser(false);
        }
      } else {
        setNameMember(null);
        setCurrentUser(false);
      }
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChange();
    return () => unsubscribe();
  }, [currentUser]);

  return (
    <>
      <Auth showSignIn={showSignIn} showSignUp={showSignUp} />
      {/* Topbar */}

      <nav
        className="navbar navbar-expand navbar-light topbar mb-4 static-top hidden-md-down"
        style={{ zIndex: "1" }}
      >
        {/* <button
          className="navbar-toggler ml-auto navbar-light"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider" />
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> */}

        {/* Topbar Search */}
        <form className=" d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group w-50">
            <input
              style={{ borderRadius: "100px" }}
              type="text"
              className="form-control  border-0 small"
              placeholder="Search"
            />
          </div>
        </form>
        {/* Topbar Navbar */}
        <ul className="navbar-nav ml-auto">
          {/* Sign in  */}
          {currentUser != true ? (
            <>
              <li className="nav-item no-arrow pointer">
                <a onClick={handleSignIn} className="nav-link">
                  <span className="d-none d-lg-inline text-white ">
                    Sign in
                  </span>
                </a>
              </li>
              {/* register  */}
              <li className="nav-item no-arrow pointer">
                <a onClick={handleSignUp} className="nav-link ">
                  <span className="d-none d-lg-inline text-white ">
                    Register
                  </span>
                </a>
              </li>
              {/* <div className="topbar-divider d-none d-sm-block" /> */}
              {/* Nav Item - User Information */}
            </>
          ) : (
            <>
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span className="mr-2  text-white">{nameMember}</span>
                  <img
                    className="img-profile rounded-circle"
                    src="https://source.unsplash.com/cCvnG-937HE/100x100"
                  />
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                    Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                    Settings
                  </a>
                  <a className="dropdown-item" href="#">
                    <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400" />
                    Activity Log
                  </a>
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* End of Topbar */}
    </>
  );
};

export default Navbar;
