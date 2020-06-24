import React from "react";
import { useRouter } from "next/router";
import AddButton from "../../component/button/addbutton";
export default function index(props) {
  const { name } = props;
  const router = useRouter();
  const { username } = router.query;
  return (
    <div className="container-fluid">
      <img
        style={{
          top: "0",
          right: "0",
          position: "absolute",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "200px ",
          padding: "0 0",
          opacity: "0.4",
        }}
        className="container-fluid"
        src="https://source.unsplash.com/bn-D2bCvpik/1400x200"
        alt=""
      />

      <div
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        <div className="ml-5 row justify-content-start">
          <div className="col-auto col-md-12 col-lg-3 col-xl-2  ">
            <img
              className="rounded-circle border"
              src="https://source.unsplash.com/EBbjmyCyY1w/150x150"
              alt=""
            />
          </div>
          <div className="col-auto col-md-12 col-lg-9  col-xl-10 text-light">
            <h3>{name}</h3>
            <p>Banana • Joined since 22 May 2020 | Last Login : 19/05/2020</p>
            <ul id="list">
              <li
                style={{
                  borderBottom: "3px solid #DF004C",
                  paddingBottom: "5px",
                }}
              >
                <a href="#">Overview</a>
              </li>
              <li>
                <a href="#">Playlist</a>
              </li>
              <li>Following</li>
              <li>Follower</li>
              <li>Loved Tracks</li>
              <li>Shouts</li>
            </ul>

            <div className="row">
              <div className="col-12 col-md-6">
                <h6 className="mt-5 font-Regular">About me</h6>
                <p className="text-muted mr-5">
                  Mraz was engaged to singer/songwriter and long-time close
                  friend Tristan Prettyman. On June 7, 2011, Mraz said in an
                  interview with the Daily Beast that he and Prettyman were no
                  longer engaged.
                </p>
                <p className="text-muted mr-5">
                  Mraz lives a health-conscious lifestyle and enjoys eating
                  mostly raw vegan foods. He owns an avocado farm in Bonsall in
                  Northern San Diego County.
                  <a className="text-primary" href="#">
                    {" "}
                    Read more
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-6">
                <h6 className="mt-5 font-Regular">Born</h6>
                <p className="text-muted">23 June 1992 (age 28)</p>
                <h6 className="mt-5 font-Regular">Born in</h6>
                <p className="text-muted">
                  Mechanicsville, Hanover County, Virginia, United States
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />
        {/* My Album */}
        <div className="row container text-light">
          <h6 className="font-Regular">My Album</h6>{" "}
          <p className="ml-auto">+ Add albums</p>
        </div>
        <div className="text-center">
          <AddButton />
          <small className="text-light d-block mt-3">
            You haven't liked any albums yet
          </small>
          <small className="text-primary">Browse trending playlists</small>
        </div>
        <hr />
        {/* My Video */}
        <div className="row container text-light">
          <h6 className="font-Regular">My Video</h6>{" "}
          <p className="ml-auto">+ Add albums</p>
        </div>
        <div className="text-center">
          <AddButton />
          <small className="text-light d-block mt-3">
            Seems a little quiet over here
          </small>
          <small className="text-primary">
            Upload a track to share it with your followers.
          </small>
        </div>
        <hr />
        {/* Top Tracks */}
        <div className="row container text-light">
          <h6 className="font-Regular">Top Tracks</h6>
        </div>
        <div className="text-center">
          <AddButton />
          <small className="text-light d-block mt-3">
            Seems a little quiet over here
          </small>
          <small className="text-primary">
            Upload a track to share it with your followers.
          </small>
        </div>

        <hr />

        {/* Shoutbox */}
        <div className="row container-fluid text-light ">
          <div className="col-6 ">
              <div className="row">
              <h6 className="font-Regular ">Shoutbox</h6>
            <p className="ml-auto">Sorted by: Recently Popular</p>
              </div>

            <p className="text-center mt-5">You don’t have any message.</p>
            
          </div>
          <div className="col-5 ml-5">
            <h6 className="font-Regular">Upcoming Events</h6>
            <small>
              We don’t have any upcoming events for this artist right now.
            </small>
            <p>+ Add event | View all events </p>
            <h6 className="font-Regular mt-5">Photos</h6>
            <small>
              We don’t have any upcoming events for this artist right now.
            </small>
            <p>+ Add event | 655 more photos </p>
            <h6 className="font-Regular mt-5">Social Links</h6>
            <p>nanthawuth.com</p>
            <p>Twitter ( @ninetez )</p>
            <p>Facebook ( tessser )</p>
            <p>Youtube ( tessser )</p>
          </div>
        </div>
      </div>

      <style jsx>{`


      hr{
          margin-bottom:50px;
          margin-top:50px;
        background-color:#282828}}
      }
        a {
          font-size: 14px;
          color: white;
        }
        #list li {
          display: inline;
          list-style-type: none;
          margin-right: 20px;
          overflow: hidden;
        }

        .test {
          background: red; /* For browsers that do not support gradients */
          background: -webkit-linear-gradient(
            -90deg,
            #f3145e,
            yellow
          ); /* For Safari 5.1 to 6.0 */
          background: -o-linear-gradient(
            -90deg,
            #f3145e,
            yellow
          ); /* For Opera 11.1 to 12.0 */
          background: -moz-linear-gradient(
            -90deg,
            #f3145e,
            yellow
          ); /* For Firefox 3.6 to 15 */
          background: linear-gradient(
            -90deg,
            #f3145e,
            yellow
          ); /* Standard syntax (must be last) */
        }
      `}</style>
    </div>
  );
}
