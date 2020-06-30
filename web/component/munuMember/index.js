import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../../config/context/ModalProvider";
const Index = () => {
  const router = useRouter();
  const { username } = router.query;
  const hideAbout = router.pathname != "/[username]";
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
    <>
      <div className="ml-5 row justify-content-start  justify-content-center ">
        <div className="col-12 col-sm-12 col-md-4 col-xl-2">
          <img
            className="rounded-circle border"
            src="https://source.unsplash.com/hgO1wFPXl3I/150x150"
            alt=""
          />
        </div>
        <div className="col-12  col-sm-12  col-md-12 col-xl-10 text-light ">
          <h3 className="">{username}</h3>
          <p className="text-muted d-none d-xl-block">
            Banana • Joined since 22 May 2020 | Last Login : 19/05/2020
          </p>
          <ul id="list" className="font-Light">
            <li className={`${getMenuItemActive("/[username]")}`}>
              <Link
                href="/[username]"
                as={`/${nameMember}`}
                aria-haspopup="true"
              >
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
            <li className={` ${getMenuItemActive("/[username]/shouts")}`}>
              <Link href="/[username]/shouts" as={`/${nameMember}/shouts`}>
                <a>Shouts</a>
              </Link>
            </li>
          </ul>
          {hideAbout != true ? (
            <>
              <div className="row">
                <div className="col-auto col-xl-6">
                  <p className="mt-4 h6">About me</p>
                  <p className="text-muted">
                    Mraz was engaged to singer/songwriter and long-time close
                    friend Tristan Prettyman. On June 7, 2011, Mraz said in an
                    interview with the Daily Beast that he and Prettyman were no
                    longer engaged. Mraz lives a health-conscious lifestyle and
                    enjoys eating mostly raw vegan foods. He owns an avocado
                    farm in Bonsall in Northern San Diego County.
                  </p>
                </div>
                <div className="col-auto col-xl-6">
                  <p className="mt-5 h6">Born</p>
                  <p className="text-muted">23 June 1992 (age 28)</p>
                  <p className="mt-5 h6">Born in</p>
                  <p className="text-muted">
                    Mechanicsville, Hanover County, Virginia, United States
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <style jsx>
        {`
          .menuActive {
            border-bottom: 3px solid transparent;
            padding-bottom: 5px;
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
