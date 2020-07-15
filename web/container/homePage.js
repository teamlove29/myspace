import React, { useContext } from "react";
import { Button } from "../component/modal/style";
import { ModalContext } from "../config/context/ModalProvider";
export default function HomePage() {
  const { setActiveMenu } = useContext(ModalContext);
  setActiveMenu("/");
  return (
    <div className="container-fluid">
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
        <div className="row  ">
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
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
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="cardHeight"
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
          <div className="col-6 col-sm-auto col-md-3 col-lg-auto d-none d-sm-block">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="cardHeight"
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
          <div className="col-6 col-sm-auto col-md-3  col-lg-auto d-none  d-md-block">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="cardHeight"
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
          <div className="col-6 col-sm-auto  d-none  d-xl-block ">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="cardHeight"
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
          <div className="col-6 col-sm-auto  d-none  d-xl-block ">
            <div className=" shadow mb-4 cardHeight border-0">
              <img
                className="cardHeight"
                src="https://lh3.googleusercontent.com/proxy/72tjTOP86LISyqiFCaV5Zg99sNX6xiGyluFMP7E5WKYOVtl-gfa3w7a1vWu0nayZlwG3tFtVcS8aYKSuD2En3E5n17xTtozkGwQw11S1VDJZFJ0bMMyBtfCxiX4-BDRwMDe_qE79yPJdsMJg9iwYIway6HyfdftgEl-dKi1Is90QLF8KhiMY5GG9PaYgXvsb7F0wB_2sawOLqO41GXrTV2RcObVVDktSmWbj0x52_CsGZi1RiVoSiSX9MdRK6m8mWgjn3TKStewAnDLvLs6YN-zd082zJST0f4MqC9MGf0bE9FLXxQorXxWsOcwSGPd59mafW9UOOBdJ4Klz-qf27d5jK_Hvi6R_Ln3Faw-pwcjzs4qTD_9CxtZ0Ne0w4sYrZeCXs_fO3AnCwwLoRJ6GMsjkbic2yl_ncFA2CEJO9HBRs1lRxQ"
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
        <div className="text-light mt-5 text-center">
          <div className="row container col-md-auto text-light mt-4">
            <h6 className="font-Medium font-20">Popular Artist</h6>{" "}
            <p className="ml-auto text-warning">View All</p>
          </div>

          <div className="row mt-5 justify-content-center">
            <div className="col-auto  col-md-auto col-lg-auto col-xl-2 ">
              <img
                className="rounded-circle"
                src="https://source.unsplash.com/aZ3qiq1eTRk/150x150"
                alt=""
              />
              <p className=" mt-2 "> Moods Mixes</p>
            </div>
            <div className="col-auto  col-md-auto col-xl-2 col-lg-auto">
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
        <div className="text-light  mt-5 ">
          <span className="font-20">Moods Mixes</span>
          <div className="row mt-5 justify-content-center">
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
                  <div className="card-title"> Worm Fuzzy Feeling</div>
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
                  <div className="card-title"> Acoustic Love</div>
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
                  <div className="card-title"> Late Night Love</div>
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
                  <div className="card-title"> Romance & Ballads</div>
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
          .detail-recommended {
            max-width: 200px;
          }
          .cardHeight {
            min-height: 250px;
            max-width: 200px;
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
            max-height: 850px;
            padding: 0 0;
          }
          .text-near-cover {
            max-width: 500px;
            color: #b6b6b6;
          }
          @media screen and (max-width: 1140px) {
            .text-on-home {
              margin-top: 10px;
              margin-bottom: 15px;
            }
            .cardHeight {
              height: 200px;
            }
          }

          @media screen and (max-width: 991px) {
            .cardHeight {
              max-width: 200px;
            }
            .covermain {
              left: 0;
              top: 1.5%;
              min-width: 630px;
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
