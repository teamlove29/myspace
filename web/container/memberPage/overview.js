import React, { useContext } from "react";
import Link from "next/link";
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
            <h6 className="font-Medium ">My Playlist</h6>{" "}
            <p className="ml-auto text-muted ">
              <Link
                href="/[username]/playlist/addplaylist"
                as={`/${dataMember.mem_display_name}/playlist/addplaylist`}
              >
                <a className="mr-3 text-muted"> + Add playlist</a>
              </Link>
              |
              <Link
                href="/[username]/playlist"
                as={`/${dataMember.mem_display_name}/playlist`}
              >
                <a className="ml-3 text-muted"> View all playlist</a>
              </Link>
            </p>
          </div>
          {/* have data  */}
          <div className="row col-md-auto ">
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-music-album-cover-design-template-3324b2b5c69bb9a3cfaed14c71f24ca8_screen.jpg?ts=1572456482')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('data:image/jpeg;base64,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')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('data:image/jpeg;base64,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')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrji6ssqxiy6PVZzxBlCwLcgmad_Bt4JxYdQ&usqp=CAU')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaiFVEtIIlc5Dbk15SdmAfBv6eolLMLIhqYA&usqp=CAU')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
            <div className="col-auto col-md-3 col-lg-3 col-xl-2">
              <div
                style={{
                  backgroundImage:
                    "url('https://d1csarkz8obe9u.cloudfront.net/posterpreviews/eclipse-mixtape-cover-music-cd-design-template-b6bf8293632bce2ad98c1c4ab6752e1d_screen.jpg?ts=1571589565')",
                  width: "150px",
                  height: "150px",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>
              <span className="small d-block text-light mb-2 mt-3">
                Listen on the road
              </span>
              <span className="small d-block text-muted">0 listeners</span>
              <span className="small d-block text-muted">
                21 Apr 2017 · 0 tracks
              </span>
            </div>
          </div>
          {/* have data  */}
          {/* no data  */}
          {/* <div className="text-center">
            <AddButton />
            <small className="text-light d-block mt-3">
              You haven't liked any albums yet
            </small>
            <small className="text-primary">Browse trending playlists</small>
          </div> */}
          {/* no data  */}
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
            <h6 className="font-Medium ">My Playlist</h6>{" "}
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
            <p className="col-12 p-5 text-center ">
              {" "}
              You don't have any message.
            </p>
          </div>
        </div>

        {/* begin Upcoming Events */}
        {typeMember === 2 && (
          <>
            <hr className="col-12 d-md-none " />
            <div className="col-12 col-md-5 ">
              <h6 className="font-Regular mb-4">Upcoming Events</h6>
              <small className="text-muted ">
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
            <hr className="col-12 d-md-none " />
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
