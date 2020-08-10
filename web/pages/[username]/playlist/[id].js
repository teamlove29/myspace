import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { ModalContext } from "../../../config/context/ModalProvider";
import MemberPage from "../../../container/memberPage/index";
import LoadPage from "../../../container/loadPage";
import { Button } from "../../../component/modal/style";
export default ({ posts, test }) => {
  const { dataMember } = useContext(ModalContext);
  const router = useRouter();
  const { id, username } = router.query;
  if (!dataMember) {
    return <LoadPage />;
  }
  console.log(test);
  return (
    <MemberPage>
      {/* <h1>posttest : {test.id} {test.username}</h1> */}
      <div className="row container-fluid text-light mt-5">
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
            <a className="ml-3 text-muted">View all playlist</a>
          </Link>
        </p>
      </div>
      {/* <p>This is blog #{id}</p> */}

      <div>
        <div className="row mt-4">
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

          <div className="col-6 ml-4 align-top">
            <p className="  text-light mb-2 ">
              Listen on the road
              <span
                style={{
                  fontSize: "12px",
                }}
                className="ml-2 material-icons"
              >
                lock
              </span>
              <span
                style={{
                  fontSize: "12px",
                }}
                className="ml-2 material-icons"
              >
                edit
              </span>
            </p>
            <p className="small  text-muted mb-2 ">0 listeners</p>
            <p className="small  text-muted">21 Apr 2017 · 0 tracks</p>
            <div className="d-flex">
              <Button
                style={{ marginTop: "10px", letterSpacing: "4px" }}
                className=" btn pl-5 pr-5 font-regular mr-3"
                type="submit"
              >
                Play all
              </Button>

              <Button
                style={{
                  marginTop: "10px",
                  letterSpacing: "4px",
                  background: "black",
                  color: "white",
                }}
                className=" btn pl-5 pr-5 font-regular border"
                type="submit"
              >
                Shuffle
              </Button>
            </div>
          </div>
        </div>
        {/* begin Shoutbox */}
        <div className="row text-light mt-5">
          {/* begin Upcoming Events */}

          <>
            <hr className="col-12 d-md-none " />
            <div className="col-12 col-md-6 col-lg-6 container ">
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto ">
                          <span className="material-icons text-danger">
                            favorite
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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

          {/* end Upcoming Events */}

          <>
            <hr className="col-12 d-md-none " />
            {/* begin You may also like */}
            <div className="col-12 col-md-6 col-lg-6 container ">
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
                          <span className="material-icons icons-play">
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
                        <div className="col-1 my-auto">
                          <span className="material-icons">
                            favorite_border
                          </span>
                        </div>
                        <div className="col-1 my-auto">
                          <span className="material-icons">more_vert</span>
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
        </div>
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
.icons-play{

      font-size: 40px;
      background-image:linear-gradient(to left, yellow,#f3145e);
      -webkit-background-clip:text;
      -webkit-text-fill-color: transparent;
             
}
    `}</style>
    </MemberPage>
  );
};

export async function getStaticPaths(context) {
  return {
    paths: [
      {
        params: {
          username: "TRAROKINGs",
          id: "1",
        },
      },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { test: params }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps({query}) {
//   return {
//     props: {test:query}, // will be passed to the page component as props
//   }
// }
