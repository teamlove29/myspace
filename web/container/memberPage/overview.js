import React, { useContext } from "react";
import AddButton from "../../component/button/addbutton";
import MemberPage from "./index";
import { ModalContext } from "../../config/context/ModalProvider";
export default function Overview() {
  const { dataMember ,setActiveMenu,} = useContext(ModalContext);
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
          </div>
        </div>
        {/* begin Upcoming Events */}
        {typeMember === 2 && (
          <>
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
        </>)}
        {/* end Upcoming Events */}
        {typeMember === 1 && (
          <>
            {/* begin You may also like */}
            <div className="col-12 col-md-6">
              <h6 className="font-Medium">You may also like</h6>
              <div className="row container-fluid mt-5">
                {/* Most Popular This Week */}
                <div className="col-md-12 ">
                  <ol className="text-light">
                    <li>
                      <div className="row ml-3 mr-2">
                        <div className="col-2">
                          <img
                            src="https://source.unsplash.com/cCvnG-937HE/50x50"
                            alt=""
                          />
                        </div>
                        <div className="col-8">
                          <span className="text-light">
                            Where It All Begins - Instrumental
                          </span>
                          <br />
                          <small className="text-muted ">
                            Cinematic,Folk,Indie{" "}
                          </small>
                        </div>
                        <div className="col-2">
                          <h6 className="float-right mr-4 ">03:18</h6>
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row ml-3 mr-2">
                        <div className="col-2">
                          <img
                            src="https://source.unsplash.com/Me5rtdNmIrU/50x50"
                            alt=""
                          />
                        </div>
                        <div className="col-8">
                          <span className="text-light">Varsity</span>
                          <br />
                          <small className="text-muted ">
                            Cinematic,Pop,Rock
                          </small>
                        </div>
                        <div className="col-2">
                          <h6 className="float-right mr-4 ">04:38</h6>
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row ml-3 mr-2">
                        <div className="col-2">
                          <img
                            src="https://source.unsplash.com/bJ2Dm9ZyeIY/50x50"
                            alt=""
                          />
                        </div>
                        <div className="col-8">
                          <span className="text-light">
                            Journey Towards Home
                          </span>
                          <br />
                          <small className="text-muted ">
                            Electronic,Pop,Soul
                          </small>
                        </div>
                        <div className="col-2">
                          <h6 className="float-right mr-4 ">04:38</h6>
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row ml-3 mr-2">
                        <div className="col-2">
                          <img
                            src="https://source.unsplash.com/kWnLO5B-X2s/50x50"
                            alt=""
                          />
                        </div>
                        <div className="col-8">
                          <span className="text-light">
                            Rococo (Call Waiting)
                          </span>
                          <br />
                          <small className="text-muted ">
                            Cinematic,Classical
                          </small>
                        </div>
                        <div className="col-2">
                          <h6 className="float-right mr-4 ">04:38</h6>
                        </div>
                      </div>
                    </li>
                    <hr style={{ marginTop: "20px", marginBottom: "20px" }} />
                    <li>
                      <div className="row ml-3 mr-2">
                        <div className="col-2">
                          <img
                            src="https://source.unsplash.com/_DWe0OW4pFg/50x50"
                            alt=""
                          />
                        </div>
                        <div className="col-8">
                          <span className="text-light">
                            Feel Like This Forever
                          </span>
                          <br />
                          <small className="text-muted ">Indie,Pop</small>
                        </div>
                        <div className="col-2">
                          <h6 className="float-right mr-4 ">04:38</h6>
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

      hr{
          margin-bottom:50px;
          margin-top:50px;
        background-color:#282828}}
      }

      `}</style>
    </MemberPage>
  );
}
