import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../../config/context/ModalProvider";
const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  const hideAbout = router.pathname != "/[username]";
  const {
    nameMember,
    dataMember,
    dataFriend,
    avatarMember,
    setActiveMenu,
  } = useContext(ModalContext);
  const typeMember = !dataMember ? null : dataMember.mem_type;
  setActiveMenu("/[username]");
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
    <>
      <div className=" row mx-auto avatar-resposive">
        <div className="col-12 col-sm-12 col-md-12 col-xl-2">
          <img
            style={{
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="rounded-circle border"
            // src="https://source.unsplash.com/hgO1wFPXl3I/150x150"
            src={avatarMember}
            alt=""
            width={150}
            height={150}
          />
        </div>
        <div className="col-12  col-sm-12  col-md-12 col-xl-10 text-light mt-2">
          <div className="form-inline ">
            <h3 className="my-auto mt-5 name ">
              {username}
              {typeMember === 2 && (
                <img
                  className=" ml-3 "
                  src="/assets/img/icon/crow.png"
                  alt=""
                />
              )}
            </h3>
          </div>
          <p className="text-muted d-none d-xl-block">
            Banana • Joined since 22 May 2020 | Last Login : 19/05/2020
          </p>
          <ul style={{ width: "700px" }} id="list" className="font-Light ">
            <li className={`${getMenuItemActive("/[username]")}`}>
              <Link href="/[username]" as={`/${nameMember}`}>
                <a>Overview</a>
              </Link>
            </li>
            <li className={` ${getMenuItemActive("/[username]/playlist")}`}>
              <Link href="/[username]/playlist" as={`/${nameMember}/playlist`}>
                <a>Playlist</a>
              </Link>
            </li>
            <li className={` ${getMenuItemActive("/[username]/following")}`}>
              <Link
                href="/[username]/following"
                as={`/${nameMember}/following`}
              >
                <a>Following</a>
              </Link>
            </li>
            <li className={` ${getMenuItemActive("/[username]/follower")}`}>
              <Link href="/[username]/follower" as={`/${nameMember}/follower`}>
                <a>Follower</a>
              </Link>
            </li>
            <li className={` ${getMenuItemActive("/[username]/lovedtracks")}`}>
              <Link
                href="/[username]/lovedtracks"
                as={`/${nameMember}/lovedtracks`}
              >
                <a>Loved Tracks</a>
              </Link>
            </li>

            {typeMember === 2 && (
              <>
                <li className={` ${getMenuItemActive("/[username]/events")}`}>
                  <Link href="/[username]/events" as={`/${nameMember}/events`}>
                    <a>Events</a>
                  </Link>
                </li>
              </>
            )}

            <li className={` ${getMenuItemActive("/[username]/shouts")}`}>
              <Link href="/[username]/shouts" as={`/${nameMember}/shouts`}>
                <a>Shouts</a>
              </Link>
            </li>

            {typeMember === 2 && (
              <>
                <li className={` ${getMenuItemActive("/[username]/shop")}`}>
                  <Link href="/[username]/shop" as={`/${nameMember}/shop`}>
                    <a>Shop</a>
                  </Link>
                </li>
              </>
            )}
          </ul>
          {hideAbout != true ? (
            <>
              <div className="row ">
                <div className="col-auto col-md-8  col-lg-8 col-xl-6 ">
                  <p className="mt-4 h6">About me</p>
                  <p className="text-muted">{dataMember.mem_about_you}</p>
                </div>
                <div className="col-auto col-md-4  col-lg-4 col-xl-6">
                  <p className="mt-5 h6">Born</p>
                  <p className="text-muted">23 June 1992 (age 28)</p>
                  <p className="mt-5 h6">Born in</p>
                  <p className="text-muted">
                    Lampang, {dataMember.mem_country}
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <style jsx>
        {`
          @media screen and (max-width: 1200px) {
            .form-inline {
              display: block;
            }
            .name {
              padding-top: 15px;
              padding-bottom: 20px;
              display: block;
              text-align: center;
            }
          }

          @media screen and (max-width: 991px) {
            .avatar-resposive {
              margin-top: 6rem;
            }
          }

          .menuActive {
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;
            border-image: -webkit-linear-gradient(to left, #f3145e, yellow);
            border-image: -o-linear-gradient(to left, #f3145e, yellow);
            border-image: -moz-linear-gradient(to left, #f3145e, yellow);
            border-image: linear-gradient(to left, #f3145e, yellow);
            border-image-slice: 1;
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
        `}
      </style>
    </>
  );
};

export default Index;
