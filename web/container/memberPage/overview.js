import React from "react";
import AddButton from "../../component/button/addbutton";
import MemberPage from "./index";
export default function Overview() {
  return (
    <MemberPage>
      <hr />
      <div className="row container text-light">
        <h6 className="font-Medium">My Playlist</h6> <p className="ml-auto">+ Add playlist</p>
      </div>
      <div className="text-center">
        <AddButton />
        <small className="text-light d-block mt-3">
          You haven't liked any albums yet
        </small>
        <small className="text-primary">Browse trending playlists</small>
      </div>
      <hr />

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
      <hr />
      <div className="row text-light">
        <div className="col-6">
          <div className="row container ">
            <h6 className="font-Medium">Shoutbox</h6>{" "}
            <p className="ml-auto text-muted">Sorted by: Recently Popular</p>
          </div>
        </div>

        {/* You may also like */}
        <div className="col-6">
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
                      <small className="text-muted ">Cinematic,Pop,Rock</small>
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
                      <span className="text-light">Journey Towards Home</span>
                      <br />
                      <small className="text-muted ">Electronic,Pop,Soul</small>
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
                      <span className="text-light">Rococo (Call Waiting)</span>
                      <br />
                      <small className="text-muted ">Cinematic,Classical</small>
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
                      <span className="text-light">Feel Like This Forever</span>
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
