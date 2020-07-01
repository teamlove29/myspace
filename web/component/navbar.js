import React, { useState, useEffect, useContext } from "react";
import Auth from "./modal/auth";
import firebase from "../config/config";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Axios from "axios";
import JWT from "jsonwebtoken";
import { ModalContext } from "../config/context/ModalProvider";
const Navbar = () => {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
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
        router.push("/");
      }
    });
  };

  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        const uid = await user.uid;
        const names = user.email.substring(0, user.email.lastIndexOf("@"));
        setNameMember(names);
        let token = await JWT.sign({ uid: uid }, process.env.secret_key);
        setHeader({ authorization: token });

        try {
          await Axios.post(process.env.API_URL + "/login-member", { uid: uid });
          const verifyMember = await Axios.get(
            process.env.API_URL + "/edit_font-profile/",
            {
              headers: { authorization: token },
            }
          );

          setCurrentUser(true);
          setDataMember(verifyMember.data[0]);
        } catch (error) {
          console.log(error);
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
        className="navbar navbar-expand navbar-light topbar mb-4 static-top hidden-md-down bg-navbar"
        style={{ zIndex: "1" }}
      >
        <img
          className="d-md-block d-lg-none"
          width="30px"
          src="/assets/img/icon/myspace.png"
          alt=""
        />
        <div className="d-md-block d-lg-none  mx-3 text-light ">My Space</div>
        {currentUser === true ? (
          <>
            <svg
              width="3em"
              height="35px"
              viewBox="0 0 16 16"
              className="btn btn-outline-light bi bi-list d-md-block d-lg-none text-light ml-auto"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>

            <svg
              width="3em"
              height="25px"
              viewBox="0 0 16 16"
              className="bi bi-search d-md-block d-lg-none text-light"
              role="button"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
              />
              <path
                fill-rule="evenodd"
                d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
              />
            </svg>

            <svg
              width="2em"
              height="2em"
              viewBox="0 0 16 16"
              className="bi bi-person-fill d-md-block d-lg-none text-light"
              // className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
          </>
        ) : null}

        {/* Topbar Search */}
        <form className=" form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search d-none d-lg-block">
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

        {/* Sign in  */}
        {currentUser != true ? (
          <>
            <ul className="navbar-nav  ml-auto">
              <li className="nav-item no-arrow pointer ">
                <a onClick={handleSignIn} className="nav-link">
                  {/* d-none d-lg-inline  */}
                  <span className="text-white ">Sign in</span>
                </a>
              </li>
              {/* register  */}
              <li className="nav-item no-arrow pointer">
                <a onClick={handleSignUp} className="nav-link ">
                  <span className=" text-white ">Register</span>
                </a>
              </li>
              {/* <div className="topbar-divider d-none d-sm-block" /> */}
              {/* Nav Item - User Information */}
            </ul>
          </>
        ) : (
          <>
            <ul className="navbar-nav ">
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
                  <span className="mr-2 text-white  d-none d-lg-block">
                    {nameMember}
                  </span>
                  <img
                    className="img-profile rounded-circle d-none d-lg-block"
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
                    onClick={handleSignOut}
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
            </ul>
          </>
        )}
      </nav>
      <style jsx>
        {`
  @media screen and (max-width: 991px) {
            .bg-navbar{
background-color : #151821;

          }
  `}
      </style>
      {/* End of Topbar */}
    </>
  );
};

export default Navbar;
