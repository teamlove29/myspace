import React, { useContext, useEffect } from "react";
import { Button } from "../component/modal/style";
import { ModalContext } from "../config/context/ModalProvider";
import CarouselHome from "../component/carousel/carouselHome";

export default function HomePage() {
  const { setActiveMenu } = useContext(ModalContext);

  useEffect(() => {
    setActiveMenu("/");
  }, []);

  return (
    <div
      style={{
        padding: "0 0",
      }}
      className="container-fluid "
    >
      <img
        style={{}}
        className="container-fluid covermain"
        src="/assets/img/cover/mainCover.png"
        alt=""
      />
      <div
        style={{
          marginBottom: "150px",
        }}
        className="container"
      >
        <div
          className="row"
          style={{
            position: "relative",
          }}
        >
          <div className="col-auto mr-auto text-on-home">
            <h1 className="text-light">What is hot this</h1>
            <h1 className="text-light">weekend?</h1>
            <p className="small text-near-cover">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>

            <Button
              className="btn"
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
        <div className="card-hr">
          {/* <div className="row col-md-auto text-light mt-4 mb-2">
            <h6 className="font-SemiBold h5 ">Recommended Music</h6>{" "}
            <p className="ml-auto font-20">{" <  > "}</p>
          </div> */}

          <CarouselHome />

          {/* Content Row */}
          {/* justify-content-center */}
        </div>
        <div className="row  container-fluid ">
          {/* Most Popular This Week */}
          <div className="col-md-6 ">
            <p className="mb-5 text-light">Most Popular This Week</p>
            <ol className="text-light">
              <li>
                <div className="row ">
                  <div className="col-2">
                    {" "}
                    <span className="num">1.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/Me5rtdNmIrU/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">Varsity</span>
                    <br />
                    <small className="text-muted ">Cinematic,Pop,Rock</small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-3 text-muted">04:38</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
              <li>
                <div className="row">
                  <div className="col-2">
                    {" "}
                    <span className="num text-light">2.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/Me5rtdNmIrU/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">Varsity</span>
                    <br />
                    <small className="text-muted ">Cinematic,Pop,Rock</small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">04:38</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
              <li>
                <div className="row ">
                  <div className="col-2">
                    {" "}
                    <span className="num text-light">3.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/bJ2Dm9ZyeIY/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">Journey Towards Home</span>
                    <br />
                    <small className="text-muted ">Electronic,Pop,Soul</small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">04:38</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
              <li>
                <div className="row">
                  <div className="col-2">
                    {" "}
                    <span className="num text-light">4.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/kWnLO5B-X2s/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">Rococo (Call Waiting)</span>
                    <br />
                    <small className="text-muted ">Cinematic,Classical</small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">04:38</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
              <li>
                <div className="row">
                  <div className="col-2">
                    {" "}
                    <span className="num text-light">5.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/_DWe0OW4pFg/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">Feel Like This Forever</span>
                    <br />
                    <small className="text-muted ">Indie,Pop</small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">04:38</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
            </ol>

            <p className="text-center text-warning font-Medium ">SHOW MORE</p>
          </div>
          {/* Most Recommended */}
          <div className="col-md-6 ">
            <p className="mb-5 text-light">Most Recommended</p>
            <ol className="text-light">
              <li>
                <div className="row">
                  <div className="col-2">
                    {" "}
                    <span className="num">1.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/cCvnG-937HE/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">
                      Where It All Begins - Instrumental
                    </span>
                    <br />
                    <small className="text-muted ">Cinematic,Folk,Indie </small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">03:18</h6>
                  </div>
                </div>
              </li>
              <hr className="mr-3" style={{ backgroundColor: "#212739" }} />
              <li>
                <div className="row ">
                  <div className="col-2">
                    {" "}
                    <span className="num text-light">2.</span>{" "}
                  </div>
                  <div className="col-2">
                    <img
                      src="https://source.unsplash.com/cCvnG-937HE/50x50"
                      alt=""
                    />
                  </div>
                  <div className="col-6">
                    <span className="text-light">
                      Where It All Begins - Instrumental
                    </span>
                    <br />
                    <small className="text-muted ">Cinematic,Folk,Indie </small>
                  </div>
                  <div className="col-2">
                    <h6 className="float-right mr-4 text-muted">03:18</h6>
                  </div>
                </div>
              </li>
            </ol>
          </div>
        </div>

        {/* Popular Artist */}
        <div className="text-light mt-5 text-center">
          <div className="row col-md-auto text-light mt-4 mb-2">
            <h6 className="font-Medium font-20">Popular Artist</h6>{" "}
            <p className="ml-auto text-warning">View All </p>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-4 col-md-auto col-lg-auto col-xl-2 ">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/aZ3qiq1eTRk/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>
            <div className="col-4  col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/lfiFXS9oaeU/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-4  col-md-auto col-xl-2 col-lg-auto">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/hTEqivuXpiY/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-3 col-xl-2 col-lg-auto d-none d-md-block">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/1nqlINxFPOc/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto d-none d-xl-block">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/iTOq8vZkVEY/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>{" "}
            <div className="col-auto col-md-auto col-xl-2 col-lg-auto d-none d-xl-block">
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
        <div className="text-light  mt-5 ">
          <div className="row col-md-auto text-light mt-4 mb-2">
            <h6 className="font-Medium font-20">Moods Mixes</h6>{" "}
            <p className="ml-auto text-warning">
              View All <span className="text-light">{" <  > "}</span>{" "}
            </p>
          </div>
          <div className="row mt-5 justify-content-center">
            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-xl-3 mb-4">
              <img
                className="img-fluid rounded "
                src="https://source.unsplash.com/MD3rdOB5pxk/300x300"
                alt=""
              />

              <p className="text-center mt-3"> Worm Fuzzy Feeling</p>
            </div>

            <div className="col-6 col-xs-6 col-sm-6  col-md-3 col-xl-3  mb-4 ">
              <img
                className="img-fluid rounded "
                src="https://source.unsplash.com/szmET3Kja8s/300x300"
                alt=""
              />
              <p className="text-center mt-3"> Worm Fuzzy Feeling</p>
            </div>

            <div className="col-6 col-xs-6 col-sm-6 col-md-3 col-xl-3 mb-4 d-none d-md-block">
              <img
                className="img-fluid rounded "
                src="https://source.unsplash.com/vipa5LR89mU/300x300"
                alt=""
              />

              <p className="text-center mt-3"> Late Night Love</p>
            </div>

            <div className="col-6 col-xs-6 col-sm-6   col-md-3 col-xl-3 mb-4 d-none d-md-block">
              <img
                className="img-fluid rounded "
                src="https://source.unsplash.com/QA-qQfWJM0E/300x300"
                alt=""
              />

              <p className="text-center mt-3"> Romance & Ballads</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .scrollmenu a {
            display: inline-block;
            text-align: center;
            padding-right: 50px;
            padding-left: 50px;
            padding-bottom: 10px;
            text-decoration: none;
          }

          .detail-recommended {
            max-width: 170px;
          }
          .cardHeight {
            height: 200px;
            max-width: 180px;
          }

          .covermain {
            top: 0;
            right: 0;
            position: relative;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            width: 100%;

            padding: 0 0;
          }
          .text-near-cover {
            max-width: 500px;
            color: #b6b6b6;
          }

          li {
            list-style: none;
          }
          .num {
            font-family: "Poppins-SemiBold", sans-serif;
            color: #dcff00;
            display: inline-block;
            text-align: left;
            margin: 5px 10px;
            line-height: 40px;
            font-size: 36px;
          }
          .text-on-home {
            margin-top: -25rem;
            margin-bottom: 50px;
          }
          .card-hr {
            margin-top: -10rem;
          }
          @media screen and (min-width: 1451px) {
            .text-on-home {
              margin-top: -30rem;
              margin-bottom: 50px;
            }
            .card-hr {
              margin-top: -10rem;
            }
          }
          @media screen and (max-width: 1450px) {
            .cardHeight {
              min-height: 200px;
            }
          }
          @media screen and (max-width: 1248px) {
            .hide4 {
              display: none;
            }
          }
          @media screen and (max-width: 767px) {
            .hide2 {
              display: none;
            }
          }
          @media screen and (max-width: 1045px) {
            .hide3 {
              display: none;
            }
          }
          @media screen and (max-width: 1050px) {
            .text-on-home {
              margin-top: -23.5rem;
            }
          }

          @media screen and (max-width: 991px) {
            .cardHeight {
              max-width: 200px;
              min-height: 200px;
            }
            .covermain {
              left: 0;
              margin-top: 4.5rem;
              min-width: 700px;
              min-height: 500px;
            }
            .text-near-cover {
              font-size: 14px;
              max-width: 300px;
              color: #b6b6b6;
            }
            .text-on-home {
              margin-top: -27rem;
            }
          }
        `}
      </style>
    </div>
  );
}
