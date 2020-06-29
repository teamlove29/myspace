import React from "react";
import { Button } from "../component/modal/style";
export default function HomePage() {
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
          maxHeight: "800px ",
          padding: "0 0",
        }}
        className="container-fluid "
        src="/assets/img/cover/mainCover.png"
        alt=""
      />
      <div
        style={{
          marginBottom: "150px",
        }}
      >
        <div
          className="row"
          style={{
            position: "relative",
          }}
        >
          <div className="col-auto mr-auto text-on-home">
            <h1 style={{ fontSize: "4vw" }} className="text-light">
              What is hot this
            </h1>
            <h1 style={{ fontSize: "4vw" }} className="text-light">
              weekend?
            </h1>
            <p
              className="small"
              style={{ maxWidth: "500px", color: "#b6b6b6" }}
            >
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>

            <Button
              className="btn mb-5"
              style={{
                marginTop: "20px",
                letterSpacing: "3px",
                padding: "10px 60px 10px 60px",
                
              }}
            >
              Play
            </Button>
          </div>
        </div>

        {/* Content Row */}
        <div className="row container-fulid ">
          <div className="col-4 col-sm-4 col-md-4 col-xl-2">
            <div className="card shadow mb-4 cardHeight ">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
          <div className="col-4  col-sm-4 col-md-4 col-xl-2">
            <div className="card shadow mb-4 cardHeight">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
          <div className="col-4  col-sm-4 col-md-4 col-xl-2">
            <div className="card shadow mb-4 cardHeight">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
          <div className="col-auto col-xl-2 d-none  d-xl-block">
            <div className="card shadow mb-4 cardHeight">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
          <div className="col-auto col-xl-2 d-none d-xl-block">
            <div className="card shadow mb-4 cardHeight">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
          <div className="col-auto col-xl-2 d-none d-xl-block">
            <div className="card shadow mb-4 cardHeight">
              <div className="card-body row">
                <p className="text-center mx-auto my-auto">comming soon</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5 container-fluid ">
          {/* Most Popular This Week */}
          <div className="col-md-6 ">
            <p className="mb-5 text-light">Most Popular This Week</p>
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
                    <small className="text-muted ">Cinematic,Folk,Indie </small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 ">03:18</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
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
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
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
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
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
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
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
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
            </ol>

            <p className="text-center text-light font-Medium">SHOW MORE</p>
          </div>
          {/* Most Recommended */}
          <div className="col-md-6 ">
            <p className="mb-5 text-light">Most Recommended</p>
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
                    <small className="text-muted ">Cinematic,Folk,Indie </small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 ">03:18</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
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
                    <small className="text-muted ">Cinematic,Folk,Indie </small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 ">03:18</h6>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Popular Artist */}
        <div className="container-fluid text-light mt-5 text-center">
          <p className="font-20 text-left">Popular Artist</p>
          <div className="row mt-5">
            <div className="col-auto col-md-auto col-lg-auto col-xl-2 ">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/aZ3qiq1eTRk/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/lfiFXS9oaeU/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/hTEqivuXpiY/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/1nqlINxFPOc/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/iTOq8vZkVEY/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/IT5-0oM0YH0/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>
          </div>
        </div>

        {/* Popular Moods Mixes */}
        <div className="container-fluid text-light  mt-5">
          <span className="font-20">Moods Mixes</span>
          <div className="row mt-5 ">
            <div className="col-auto  col-md-6 col-xl-3 col-xl-3 mb-4">
              <div
                className="card border-0"
                style={{ backgroundColor: "#222531" }}
              >
                <img
                  className="img-fluid "
                  src="https://source.unsplash.com/MD3rdOB5pxk/300x300"
                  alt=""
                />
                <div className="card-body">
                  <div classname="card-title"> Worm Fuzzy Feeling</div>
                  <small className="card-text text-muted ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic,
                  </small>
                </div>
              </div>
            </div>

            <div className="col-auto  col-md-6 col-xl-3 col-xl-3 mb-4">
              <div
                className="card border-0"
                style={{ backgroundColor: "#222531" }}
              >
                <img
                  className="img-fluid"
                  src="https://source.unsplash.com/szmET3Kja8s/300x300"
                  alt=""
                />
                <div className="card-body">
                  <div classname="card-title"> Acoustic Love</div>
                  <small className="card-text text-muted ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic,
                  </small>
                </div>
              </div>
            </div>

            <div className="col-auto  col-md-6 col-xl-3 col-xl-3 mb-4">
              <div
                className="card border-0"
                style={{ backgroundColor: "#222531" }}
              >
                <img
                  className="img-fluid"
                  src="https://source.unsplash.com/vipa5LR89mU/300x300"
                  alt=""
                />
                <div className="card-body">
                  <div classname="card-title"> Late Night Love</div>
                  <small className="card-text text-muted ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic,
                  </small>
                </div>
              </div>
            </div>

            <div className="col-auto  col-md-6 col-xl-3 col-xl-3 mb-4">
              <div
                className="card border-0"
                style={{ backgroundColor: "#222531" }}
              >
                <img
                  className="img-fluid"
                  src="https://source.unsplash.com/QA-qQfWJM0E/300x300"
                  alt=""
                />
                <div className="card-body">
                  <div classname="card-title"> Romance & Ballads</div>
                  <small className="card-text text-muted ">
                    Lorem ipsum is placeholder text commonly used in the
                    graphic,
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .cardHeight {
            height: 250px;
          }
          .text-on-home{
            margin-top:200px;
            margin-bottom:50px;
          }
          @media screen and (max-width: 1200px) {
          .text-on-home {
            margin-top:10px;
            margin-bottom:0px;
          }
          .cardHeight {
            height: 200px;
          }
          }


        `}
      </style>
    </div>
  );
}
