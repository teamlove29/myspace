import React, { useState, useEffect, useContext,useMemo } from "react";
import Link from "next/link";
import Auth from "./modal/auth";
import firebase from "../config/config";
import { useRouter } from "next/router";
import Axios from "axios";
import JWT from "jsonwebtoken";
import { ModalContext } from "../config/context/ModalProvider";
import { WaveLoading } from "react-loadingg";
import VerifyMember from "../container/verifyMember";
const Navbar = () => {
  const router = useRouter();
  const { username } = router.query;
  const hideSearch = router.pathname != "/[username]/setting";
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    currentUser,
    setCurrentUser,
    nameMember,
    setNameMember,
    dataMember,
    setDataMember,
    dataFriend,
    setDataFriend,
    header,
    setHeader,
    avatarMember,
    setavatarMember,
    coverMember,
    setcoverMember,
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
    firebase.auth().signOut();
    setavatarMember(process.env.AVATARHOLDER);
    localStorage.removeItem("token_myspace");
    localStorage.removeItem("profile_myspace");
    router.push("/");
  };

  const getImageAvatar = (data) => {
    // ดึงรูป
    if (data != "" && data != undefined) {
      const storageRef = firebase.storage().ref();
      storageRef
        .child("avatars/" + data)
        .getDownloadURL()
        .then((url) => {
          setavatarMember(url);
        })
        .catch((err) => {
          console.log(err.code);
        });
    }
  };
  const getImageCover = (data) => {
    // ดึงรูป
    if (data != "" && data != undefined) {
      const storageRef = firebase.storage().ref();
      storageRef
        .child("avatars/" + data)
        .getDownloadURL()
        .then((url) => {
          setcoverMember(url);
        })
        .catch((err) => {
          console.log(err.code);
        });
    }
  };

  const onAuthStateChange = () => {
    return firebase.auth().onAuthStateChanged(async (user) => {
      const tokenverify = await localStorage.getItem("token_myspace");
      const profile_myspace_verify = await localStorage.getItem(
        "profile_myspace"
      );

      if (tokenverify && profile_myspace_verify) {
        try {
          // var decoded_token = JWT.verify(tokenverify, process.env.SECRET_KEY);
          var decoded_profile = JWT.verify(
            profile_myspace_verify,
            process.env.SECRET_KEY
          );
          setHeader(tokenverify);
          getImageAvatar(decoded_profile.mem_avatar);
          getImageCover(decoded_profile.mem_cover);
          setNameMember(decoded_profile.mem_display_name);
          setDataMember(decoded_profile);
          setCurrentUser(true);
        } catch (err) {
          handleSignOut();
        }
      } else {
        if (user) {
          setLoading(true);
          const uid = await user.uid;
          let token = await JWT.sign({ uid: uid }, process.env.SECRET_KEY);
          const checksocialLogin = await Axios.post(
            process.env.API_URL + "/login-member",
            { uid: uid }
          );
          if (checksocialLogin.status === 200) {
            try {
              const verifyMember = await Axios.get(
                process.env.API_URL_EDITFRONT,
                {
                  headers: { authorization: token },
                }
              );
              // { expiresIn: '1d' }
              const tokenJWT = JWT.sign(
                verifyMember.data[0],
                process.env.SECRET_KEY
              );
              localStorage.setItem("token_myspace", token);
              localStorage.setItem("profile_myspace", tokenJWT);
              setLoading(false);
              setCurrentUser(true);
            } catch (error) {
              setLoading(false);
              setNameMember(null);
              setCurrentUser(false);
            }
          }
        } else {
          setNameMember(null);
          setCurrentUser(false);
        }
      }
    });
  };

  const test = async () => {
 
  };

  useEffect(() => {
    // Axios.post(process.env.API_URL_CHECKDISPLAY, {
    //   display_name: username,
    // })
    //   .then((res) => {
    //     console.log(nameMember )
    //     console.log( res.data[0].mem_display_name )
    //     if (nameMember === res.data[0].mem_display_name) {
    //       setDataFriend(undefined);
    //       console.log('no')
    //     } else {
    //       console.log('good')
    //       setDataFriend(res.data[0]);
    //     }
    //   })
    //   .catch(() => {
    //     setDataFriend(undefined);
    //   });

    // if (friend) {
    //   if (friend.data[0].mem_display_name != nameMember) {
    //     setDataFriend(friend.data[0]);
    //   } else {
    //     setDataFriend(undefined);
    //   }
    // } else {
    //   setDataFriend(undefined);
    // }

    const unsubscribe = onAuthStateChange();
    return () => unsubscribe();
  }, [currentUser]);


  return (
    <>
      {loading && (
        <div
          style={{
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            width: "100%",
            height: "100vh",
            background: "black",
            position: "fixed",
            opacity: "0.8",
            zIndex: "2",
            overflow: "hidden",
          }}
        >
          <WaveLoading color="orange" size="large" />
        </div>
      )}

      <Auth showSignIn={showSignIn} showSignUp={showSignUp} />
      {/* Topbar */}

      <nav
        className="navbar navbar-expand navbar-light topbar mb-4 static-top hidden-md-down bg-navbar"
        style={{ zIndex: "1",
        position: "absolute",
        width: "100%" 
      
      }}
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
            <ul className="navbar-nav  ml-auto  d-lg-none text-light">
              <li
                style={{
                  marginRight: "-10px",
                  marginLeft: "-10px",
                }}
                className="nav-item dropdown no-arrow"
              >
                <a
                  className="nav-link dropdown-toggle"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    className="bi bi-person-fill d-md-block d-lg-none text-light"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                    />
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <Link href="/[username]" as={`/${nameMember}`}>
                    <a className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Profile
                    </a>
                  </Link>
                  <Link
                    href="/[username]/setting"
                    as={`/${nameMember}/setting`}
                  >
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Settings
                    </a>
                  </Link>

                  <div className="dropdown-divider" />
                  <a
                    onClick={() => handleSignOut()}
                    className="dropdown-item"
                    href="#"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout
                  </a>
                </div>
              </li>

              <li className="nav-item  no-arrow my-auto ">
                <svg
                  width="3em"
                  height="20px"
                  viewBox="0 0 16 16"
                  className="bi bi-search d-md-block d-lg-none text-light"
                  role="button"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                  />
                </svg>
              </li>

              <li
                style={{
                  marginRight: "-10px",
                  marginLeft: "-10px",
                }}
                className="nav-item dropdown no-arrow"
              >
                <a
                  className="nav-link dropdown-toggle"
                  id="menuDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <svg
                    width="2em"
                    height="30px"
                    viewBox="0 0 16 16"
                    className="bi bi-list d-md-block d-lg-none text-light pointer"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="menuDropdown"
                >
                  <Link href="/">
                    <a className="dropdown-item">
                      <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                      Home
                    </a>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/music">
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Music
                    </a>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/charts">
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Charts
                    </a>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/event">
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Event
                    </a>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link href="/features">
                    <a className="dropdown-item">
                      <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                      Features
                    </a>
                  </Link>
                </div>
              </li>
            </ul>
          </>
        ) : null}

        {/* Topbar Search */}
        {hideSearch === true ? (
          <>
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
          </>
        ) : (
          <div className=" form-inline mr-auto ml-md-3 my-2  navbar-search d-none d-lg-block pointer"></div>
        )}
        {/* Topbar Navbar */}
        <ul
          className={currentUser != true ? "navbar-nav mobile" : "navbar-nav"}
        >
          {/* Sign in  */}
          {currentUser != true ? (
            <>
              <li className="nav-item no-arrow pointer ">
                <a onClick={() => handleSignIn()} className="nav-link">
                  {/* d-none d-lg-inline  */}
                  <span className="text-white ">Sign in</span>
                </a>
              </li>
              {/* register  */}
              <li className="nav-item no-arrow pointer">
                <a onClick={() => handleSignUp()} className="nav-link ">
                  <span className=" text-white ">Register</span>
                </a>
              </li>
              {/* <div className="topbar-divider d-none d-sm-block" /> */}
              {/* Nav Item - User Information */}
            </>
          ) : (
            <>
              <ul className="navbar-nav  d-none d-lg-block">
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
                      // src="https://source.unsplash.com/cCvnG-937HE/100x100"
                      src={avatarMember}
                    />
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                    aria-labelledby="userDropdown"
                  >
                    <Link href="/[username]" as={`/${nameMember}`}>
                      <a className="dropdown-item">
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400" />
                        Profile
                      </a>
                    </Link>
                    <Link
                      href="/[username]/setting"
                      as={`/${nameMember}/setting`}
                    >
                      <a className="dropdown-item">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400" />
                        Settings
                      </a>
                    </Link>

                    <div className="dropdown-divider" />
                    <a
                      onClick={() => handleSignOut()}
                      className="dropdown-item"
                      href="#"
                    >
                      <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                      Logout
                    </a>
                  </div>
                </li>
              </ul>
            </>
          )}
        </ul>
      </nav>
      <style jsx>
        {`
  @media screen and (max-width: 991px) {
            .bg-navbar{
background-color : #151821;

          }
          .mobile{
           
            margin-left: auto !important;
          }
  `}
      </style>
      {/* End of Topbar */}
    </>
  );
};


{/* Page.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
} */}

Navbar.getInitialProps = async ({ query, ctx }) => {
  const { username } = query;
console.log('tdsadasd')
  return { username: username };
};

export default Navbar;




