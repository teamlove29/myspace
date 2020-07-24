import React, { useContext } from "react";
import AddButton from "../../component/button/addbutton";
import MemberPage from "./index";
import { ModalContext } from "../../config/context/ModalProvider";
export default function Overview() {
  const { dataMember, dataFriend } = useContext(ModalContext);
  const typeMember = !dataMember ? null : dataMember.mem_type;
  return (
    <MemberPage>
      <hr />
      {/* begin My Playlist */}
      {/* begin typeMember 1 */}
      {typeMember === 1 && (
        <>
          <div className="row container-fluid text-light">
            <h6 className="font-Medium">My Playlist</h6>{" "}
            <p className="ml-auto text-muted">+ Add playlist</p>
          </div>
          <div className="text-center">
            <AddButton />
            <small className="text-light d-block mt-3">
              You haven't liked any albums yet
            </small>
            <small className="text-primary">Browse trending playlists</small>
          </div>
          {/* end My Playlist */}
          <hr />
          {/* begin Loved Tracks */}
          <div className="row container text-light">
            <h6 className="font-Medium">Loved Tracks</h6>
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
          {/* end Loved Tracks */}
          <hr />
        </>
      )}
      {/* end typeMember 1 */}
      {/* begin typeMember 2 */}
      {typeMember === 2 && (
        <>
          {/* My Album */}
          <div className="row container-fluid text-light">
            <h6 className="font-Medium">My Album</h6>{" "}
            <p className="ml-auto text-muted">+ Add albums</p>
          </div>
          <div className="text-center">
            <AddButton />
            <small className="text-light d-block mt-3">
              You haven't liked any albums yet
            </small>
            <small className="text-primary">Browse trending playlists</small>
          </div>
          {/* end My Album */}
          <hr />
          {/* begin My Video */}
          <div className="row container-fluid  text-light">
            <h6 className="font-Medium">My Video</h6>
            <p className="ml-auto text-muted">+ Add albums</p>
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
          {/* endMy Video */}
          <hr />
          {/* begin Top Tracks */}
          <div className="row container text-light">
            <h6 className="font-Medium">Top Tracks</h6>
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
          {/* end Top Tracks */}
          <hr />
        </>
      )}

      {/* end typeMember 2 */}

      {/* begin Shoutbox */}
      <div className="row text-light">
        <div className="col-12 col-md-6">
          <div className="row container ">
            <h6 className="font-Medium col-12 col-md-6">Shoutbox</h6>{" "}
            <p className="ml-auto text-muted col-12 col-md-6">
              Sorted by: Recently Popular
            </p>
            <p className="col-12 p-5 text-center "> You don't have any message.</p>
          </div>
        </div>

        {/* begin Upcoming Events */}
        {typeMember === 2 && (
          <>
             <hr className="col-12 d-md-none "/>
            <div className="col-12 col-md-5 ">
              <h6 className="font-Regular mb-4">Upcoming Events</h6>
              <small className="text-muted /">
                We don’t have any upcoming events for this artist right now.
              </small>
              <p className="mt-3">+ Add event | View all events </p>
              <h6 className="font-Regular mt-5 mb-4">Photos</h6>
              <small className="text-muted">
                We don’t have any upcoming events for this artist right now.
              </small>
              <p className="mt-3">+ Add event | 655 more photos </p>
              <h6 className="font-Regular mt-5 mb-4">Social Links</h6>
              <p>nanthawuth.com</p>
              <p>Twitter ( @ninetez )</p>
              <p>Facebook ( tessser )</p>
              <p>Youtube ( tessser )</p>
            </div>
          </>
        )}
        {/* end Upcoming Events */}
        {typeMember === 1 && (
          <>
                       <hr className="col-12 d-md-none "/>
            {/* begin You may also like */}
            <div className="col-12 col-md-6 col-lg-6 container ">
              <h6 className="font-Medium">You may also like</h6>
              <div className="row mt-5">
                {/* Most Popular This Week */}
                <div className="col-12 ">
                  <ol className="text-light">
                    <li>
                      <div className="row ">
                        <div className="col-1 my-auto">
                          <span className="num">1.</span>{" "}
                        </div>
                        <div className="col-2 my-auto">
                          <span
                            style={{
                              fontSize: "40px",
                            }}
                            className="material-icons "
                          >
                            play_circle_filled
                          </span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/30x30"
                            alt=""
                          />
                        </div>
                        <div className="col-5 my-auto">
                          <span className="text-light ">Novo Amor</span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            className="float-right "
                            src="https://img.icons8.com/ios/24/ffffff/like--v1.png"
                          />
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row">
                        <div className="col-1 my-auto">
                          <span className="num">2.</span>{" "}
                        </div>
                        <div className="col-2 my-auto">
                          <span
                            style={{
                              fontSize: "40px",
                            }}
                            className="material-icons "
                          >
                            play_circle_filled
                          </span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/30x30"
                            alt=""
                          />
                        </div>
                        <div className="col-5 my-auto">
                          <span className="text-light ">Novo Amor</span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            className="float-right "
                            src="https://img.icons8.com/ios/24/ffffff/like--v1.png"
                          />
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row">
                        <div className="col-1 my-auto">
                          <span className="num">3.</span>{" "}
                        </div>
                        <div className="col-2 my-auto">
                          <span
                            style={{
                              fontSize: "40px",
                            }}
                            className="material-icons "
                          >
                            play_circle_filled
                          </span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/30x30"
                            alt=""
                          />
                        </div>
                        <div className="col-5 my-auto">
                          <span className="text-light ">Novo Amor</span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            className="float-right "
                            src="https://img.icons8.com/ios/24/ffffff/like--v1.png"
                          />
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row">
                        <div className="col-1 my-auto">
                          <span className="num">4.</span>{" "}
                        </div>
                        <div className="col-2 my-auto">
                          <span
                            style={{
                              fontSize: "40px",
                            }}
                            className="material-icons "
                          >
                            play_circle_filled
                          </span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/30x30"
                            alt=""
                          />
                        </div>
                        <div className="col-5 my-auto">
                          <span className="text-light ">Novo Amor</span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            className="float-right "
                            src="https://img.icons8.com/ios/24/ffffff/like--v1.png"
                          />
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row">
                        <div className="col-1 my-auto">
                          <span className="num">5.</span>
                        </div>
                        <div className="col-2 my-auto">
                          <span
                            style={{
                              fontSize: "40px",
                            }}
                            className="material-icons "
                          >
                            play_circle_filled
                          </span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/30x30"
                            alt=""
                          />
                        </div>
                        <div className="col-5 my-auto font-13">
                          <span className="text-light ">Novo Amor</span>
                        </div>
                        <div className="col-2 my-auto">
                          <img
                            className="float-right "
                            src="https://img.icons8.com/ios/24/ffffff/like--v1.png"
                          />
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                  </ol>
                </div>
                {/* Most Recommended */}
              </div>
            </div>
          </>
        )}
      </div>

      <style jsx>{`

      li {
            list-style: none;
          }
      hr{
          margin-bottom:50px;
          margin-top:50px;
        background-color:#282828}}
      }

      `}</style>
    </MemberPage>
  );
}
