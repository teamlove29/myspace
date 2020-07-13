import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../../config/context/ModalProvider";
import CoverSetting from "../cover/coverSetting";
export default function Index({ children, file }) {
  const router = useRouter();
  const { nameMember } = useContext(ModalContext);
  const [cancel, setcancel] = useState(false);
  const [saveCover, setsaveCover] = useState(false);
  const getMenuItemActive = (path) => {
    const pathname = router.pathname;
    if (!pathname || !path) {
      return false;
    }
    if (pathname === path) {
      return "font-Medium menuActive";
    }
  };

  useEffect(() => {
    setcancel(false);
    setsaveCover(false);
  }, [file]);

  const hendleCancel = () => {
    setcancel(true);
  };
  const hendleSave = () => {
    setsaveCover(true);
  };

  return (
    <div>
      <CoverSetting file={file} hendleCancel={cancel} saveCover={saveCover} />

      <div
        className="container text-light mt-5"
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        {file != null && cancel != true && saveCover != true ? (
          <div 
      
          
          className="text-center">
            <div 

            className="mt-5">
              <h6
                style={{
                  display: "block",
                  lineHeight: "26px",
                  position: "relative",
                  textAlign: "center",
                  width: "100%",
                  
                }}
              >
                ลากเพื่อย้ายรูปหน้าปก
              </h6>
              <button

                onClick={hendleSave}
                className="btn pr-3 pl-3 btn-sm btn-primary mr-3"
              >
                Save
              </button>
              <button onClick={hendleCancel} className="btn btn-sm btn-danger">
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="font-Regular mt-5">Settings</h3>
            <ul id="list" className="mt-4">
              <li className={`${getMenuItemActive("/[username]/setting")}`}>
                <Link href="/[username]/setting" as={`/${nameMember}/setting`}>
                  <a>Profile</a>
                </Link>
              </li>
              <li
                className={`${getMenuItemActive(
                  "/[username]/setting/myaddress"
                )}`}
              >
                <Link
                  href="/[username]/setting/myaddress"
                  as={`/${nameMember}/setting/myaddress`}
                >
                  <a>My Address</a>
                </Link>
              </li>
              <li
                className={`${getMenuItemActive(
                  "/[username]/setting/changepassword"
                )}`}
              >
                <Link
                  href="/[username]/setting/changepassword"
                  as={`/${nameMember}/setting/changepassword`}
                >
                  <a>Change Password</a>
                </Link>
              </li>
              <li
                className={`${getMenuItemActive("/[username]/setting/social")}`}
              >
                <Link
                  href="/[username]/setting/social"
                  as={`/${nameMember}/setting/social`}
                >
                  <a>Social</a>
                </Link>
              </li>
              <li
                className={`${getMenuItemActive("/[username]/setting/shop")}`}
              >
                <Link
                  href="/[username]/setting/shop"
                  as={`/${nameMember}/setting/shop`}
                >
                  <a>Shop</a>
                </Link>
              </li>
            </ul>
          </>
        )}
        {children}
      </div>

      <style jsx>{`
        .thumb {
          position: relative;
          height: 300px;
          width: 300px;
          overflow: hidden;
          margin: 40px 0;
          cursor: move;
        }

        hr {
          margin-bottom: 50px;
          margin-top: 50px;
          background-color: #282828;
        }

        a {
          font-size: 14px;
          color: white;
          text-decoration: none;
        }
        #list li {
          display: inline;
          list-style-type: none;
          margin-right: 20px;
          overflow: hidden;
        }

        .menuActive {
          border-bottom: 3px solid transparent;
          padding-bottom: 5px;
          border-image: linear-gradient(to left, #f3145e, yellow);

          border-image-slice: 1;
        }
      `}</style>
    </div>
  );
}
