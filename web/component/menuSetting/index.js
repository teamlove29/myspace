import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../../config/context/ModalProvider";
export default function Index({ children }) {
  const router = useRouter();
  const { nameMember } = useContext(ModalContext);
  const getMenuItemActive = (path) => {
    const pathname = router.pathname;
    if (!pathname || !path) {
      return false;
    }
    if (pathname === path) {
      return "font-Medium menuActive";
    }
  };

  return (
    <div>
      <img
        style={{
          top: "0",
          right: "0",
          position: "absolute",
          backgroundColor: "#252525",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "200px ",
          padding: "0 0",
        }}
        className="container-fluid"
        src=""
        alt=""
      />
      <div
        className="container text-light"
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        <h3 className="font-Regular mt-5">Settings</h3>
        <ul id="list" className="mt-4">
          <li className={`${getMenuItemActive("/[username]/setting")}`}>
            <Link href="/[username]/setting" as={`/${nameMember}/setting`}>
              <a>Profile</a>
            </Link>
          </li>
              <li className={`${getMenuItemActive("/[username]/setting/account")}`}>
              <Link href="/[username]/setting/account" as={`/${nameMember}/setting/account`}>
              <a>Account</a>
            </Link>
          </li>
              <li className={`${getMenuItemActive("/[username]/setting/social")}`}>
              <Link href="/[username]/setting/social" as={`/${nameMember}/setting/social`}>
              <a>Social</a>
            </Link>
          </li>
              <li className={`${getMenuItemActive("/[username]/setting/shop")}`}>
              <Link href="/[username]/setting/shop" as={`/${nameMember}/setting/shop`}>
              <a>Shop</a>
            </Link>
          </li>
        </ul>
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
