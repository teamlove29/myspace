import React, { useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Cover } from "../cover/cover";
import { ModalContext } from "../../config/context/ModalProvider";

export default function MenuMusic({ children }) {
  const { setActiveMenu } = useContext(ModalContext);
  const router = useRouter();
  useEffect(() => {
    setActiveMenu("/music");
  }, []);

  const getMenuItemActive = (path) => {
    const pathname = router.pathname;
    if (!pathname || !path) {
      return false;
    }
    if (pathname === path) {
      return "text-warning";
    }
    return "text-light";
  };

  return (
    <>
      <Cover text={"MUSIC"} img={"https://source.unsplash.com/NYrVisodQ2M"} />

      <div className="container-fluid menu-top  justify-content-center">
        {/* <ul className="row  menu-hight text-center font-12-Regular">
          <li className="col-3 col-sm-2">
            <Link href="/music">
              <a className={` ${getMenuItemActive("/music")}`}>
                <span className="material-icons mb-3">bubble_chart</span> <br />
                All song
              </a>
            </Link>
          </li>
          <li className="col-3 col-sm-2  ">
            <Link href="/music/pop">
              <a className={` ${getMenuItemActive("/music/pop")}`}>
                <span className="material-icons mb-3">music_note</span> <br />
                Pop
              </a>
            </Link>
          </li>
          <li className="col-3 col-sm-2  ">
            <Link href="/music/jazz">
              <a className={` ${getMenuItemActive("/music/jazz")}`}>
                <span className="material-icons mb-3">album</span> <br />
                Jazz
              </a>
            </Link>
          </li>
          <li className="col-3 col-sm-2  ">
            <Link href="/music/hiphop">
              <a className={` ${getMenuItemActive("/music/hiphop")}`}>
                <span className="material-icons mb-3">headset</span> <br />
                Hip Hop
              </a>
            </Link>
          </li>
          <li className="col-3 col-sm-2 d-none d-sm-block">
            <Link href="/music/rock">
              <a className={` ${getMenuItemActive("/music/rock")}`}>
                <span className="material-icons mb-3">bar_chart</span> <br />
                Rock
              </a>
            </Link>
          </li>
          <li className="col-3 col-sm-2 d-none d-sm-block">
            <Link href="/music/folk">
              <a className={` ${getMenuItemActive("/music/folk")}`}>
                <span className="material-icons mb-3">bar_chart</span> <br />
                Folk
              </a>
            </Link>
          </li>
        </ul> */}

        <div className="scrollmenu text-center  menu-hight ">
          <Link href="/music">
            <a
              style={{
                paddingLeft: "10px",
              }}
              className={` ${getMenuItemActive("/music")}`}
            >
              <span className="material-icons mb-3">bubble_chart</span> <br />
              All song
            </a>
          </Link>
          <Link href="/music/pop">
            <a className={` ${getMenuItemActive("/music/pop")}`}>
              <span className="material-icons mb-3">music_note</span> <br />
              Pop
            </a>
          </Link>
          <Link href="/music/jazz">
            <a className={` ${getMenuItemActive("/music/jazz")}`}>
              <span className="material-icons mb-3">album</span> <br />
              Jazz
            </a>
          </Link>
          <Link href="/music/hiphop">
            <a className={` ${getMenuItemActive("/music/hiphop")}`}>
              <span className="material-icons mb-3">headset</span> <br />
              Hip Hop
            </a>
          </Link>
          <Link href="/music/rock">
            <a className={` ${getMenuItemActive("/music/rock")}`}>
              <span className="material-icons mb-3">bar_chart</span> <br />
              Rock
            </a>
          </Link>
          <Link href="/music/folk">
            <a 
                style={{
                  paddingRight: '10px'
                }}
            className={` ${getMenuItemActive("/music/folk")}`}>
              <span className="material-icons mb-3">bar_chart</span> <br />
              Folk
            </a>
          </Link>
        </div>

        <div className="row  col-md-auto  music-hight text-center mx-auto">
          {children}
        </div>
        <style jsx>
          {`
            .scrollmenu {
              overflow: auto;
              white-space: nowrap;
            }

            .scrollmenu a {
              display: inline-block;
              text-align: center;
              padding-right: 50px;
              padding-left: 50px;
              padding-bottom: 10px;
              text-decoration: none;
            }

            #list li {
              display: inline;
              list-style-type: none;
              margin-right: 20px;
              overflow: auto;
              white-space: nowrap;
              overflow-x: auto;
              cursor: pointer;
            }
            ul li {
              list-style-type: none;
            }
            a {
              text-decoration: none;
            }
            .menu-top {
              position: relative;
              margin-top: 250px;
              margin-bottom: 250px;
              color: white;
            }
            .music-hight {
              padding-top: 50px;
            }
            .menu-hight {
              margin-left: 50px;
              margin-right: 50px;
            }

            @media (max-width: 1115px) {

              .scrollmenu a {
              padding-right: 30px;
              padding-left: 30px;
            }
            }

            @media (max-width: 991px) {
              .music-hight {
                padding-top: 50px;
              }
              .menu-top {
                margin-top: 300px;
              }
              .scrollmenu a {
              padding-right: 40px;
              padding-left: 40px;
            }
            }
            @media (max-width: 575px) {
              .music-hight {
                padding-top: 20px;
              }
              .menu-hight {
                padding-top: 120px;
              }
            }

            @media (max-width: 500px) {
              .menu-hight {
                margin-left: 10px;
                margin-right: 10px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
}
