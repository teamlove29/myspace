import React, { useContext,useEffect } from "react";
import { Button } from "../component/modal/style";
import { ModalContext } from "../config/context/ModalProvider";
export default function HomePage() {
  const { setActiveMenu } = useContext(ModalContext);
 
useEffect(() => {
  setActiveMenu("/");
}, [])

  return (
    <div className="container">
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

        <div className="row col-md-auto text-light mt-4 mb-2">
          <h6 className="font-SemiBold h5 ">Recommended Music</h6>{" "}
          <p className="ml-auto font-20">{" <  > "}</p>
        </div>
        {/* Content Row */}
        {/* justify-content-center */}
        <div className="row ">
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto col-xl-2">
            <div className=" shadow mb-4 cardHeight ">
              <img
                className="rounded cardHeight"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0t2goMjb6szsr4n0r_Q97a6qekI5hj2rEjQ&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>Good Bye</h6>
              </div>
              <div className="col-2 my-auto">
                <span
                  style={{
                    fontSize: "35px",
                  }}
                  className="material-icons "
                >
                  play_circle_filled
                </span>
              </div>

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto col-xl-2">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="rounded cardHeight"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>E DOG</h6>
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

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto col-xl-2 d-none d-sm-block">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="rounded cardHeight"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTXgb4ej3TxY_iSZ1oJMRnrGiFZlB_PRURZDQ&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>B.A.P</h6>
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

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
          <div className="col-6 col-sm-auto col-md-3  col-lg-auto col-xl-2 d-none  d-md-block">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="rounded cardHeight"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR0z0e-tlw_qrghR09aWh80dg6w2u6ja6tmuA&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>Where It All Begins Instrumental</h6>
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

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
          <div className="col-6 col-sm-auto col-lg-auto  col-xl-2 d-none  d-xl-block ">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="rounded cardHeight"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1ml026OTv20i1wa2FfSqFbJHPrd9zRq5cZg&usqp=CAU"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>MARC</h6>
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

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
          <div className="col-6 col-sm-auto col-lg-auto col-xl-2 d-none  d-xl-block ">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="rounded cardHeight"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </div>
            <div className="text-light detail-recommended  row">
              <div className="col-10 my-auto">
                <h6>PAVEE - เจ็บไม่จำ</h6>
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

              <small className="small col-12">pop,rock</small>
            </div>
          </div>
        </div>

        <div className="row mt-5 container-fluid ">
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
          .detail-recommended {
            max-width: 170px;
          }
          .cardHeight {
            height: 200px;
            max-width: 180px;
          }
          .text-on-home {
            margin-top: 200px;
            margin-bottom: 50px;
          }
          .covermain {
            top: 0;
            right: 0;
            position: absolute;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            max-height: 800px;
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

          @media screen and (max-width: 1450px) {
            .text-on-home {
              margin-top: 10px;
              margin-bottom: 15px;
            }
            .cardHeight {
              min-height: 200px;
            }
            .covermain {
              min-height: 600px;
            }
          }

          @media screen and (max-width: 991px) {
            .cardHeight {
              max-width: 200px;
              min-height: 200px;
            }
            .covermain {
              left: 0;
              top: 1.5%;
              min-width: 700px;
              min-height: 550px;
            }
            .text-near-cover {
              font-size: 14px;
              max-width: 300px;
              color: #b6b6b6;
            }
          }
        `}
      </style>
    </div>
  );
}
