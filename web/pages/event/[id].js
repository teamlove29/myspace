import React, { useEffect, useContext } from "react";
import { Carousel } from "react-bootstrap";
import { useRouter } from "next/router";
import { Cover } from "../../component/cover/cover";
import { ModalContext } from "../../config/context/ModalProvider";
export default ({ dataEven }) => {
  const router = useRouter();
  const { id } = router.query;
  const { setActiveMenu } = useContext(ModalContext);
  useEffect(() => {
    setActiveMenu("/event");
  }, []);

  return (
    <div>
      {/* <Cover
        height={"600px"}
        img={
          "https://www.inspirationde.com/media/2019/02/design-inspiration-roundup-from-up-north-1550470895k4gn8.jpg"
        }
      /> */}
      <Carousel
        style={{
          top: "0",
          right: "0",
          position: "relative",
          width: "100%",
        }}
        controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://via.placeholder.com/1600x1000"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <div className="container  justify-content-center mt-5">
        <small className="text-danger ">ศ.07.01.63</small>
        <h6 className="text-light font-Regular">Events Name </h6>
        <small>Central Ladprao</small>
        <hr style={{ borderTop: "1px solid #282828" }} />
        <div className="row mt-4 mb-5">
          <div className="col-8  d-none d-lg-block col-lg-7 col-xl=8">
            <h6 className="text-light font-Regular">Detail</h6>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
              accusantium iste eos tempore nihil praesentium beatae error illum
              doloremque suscipit, accusamus et libero?
            </p>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
              accusantium iste eos tempore nihil praesentium beatae error illum
              doloremque suscipit, accusamus et libero? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. A eligendi incidunt earum
              similique ducimus, facilis laborum, accusantium iste eos tempore
              nihil praesentium beatae error illum doloremque suscipit,
              accusamus et libero?
            </p>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
            </p>
            <hr style={{ borderTop: "1px solid #282828" }} />
            <div className="row color-757575">
              <p className="ml-3"> Previous</p>
              <p className="mr-2 ml-auto">Next</p>
            </div>
          </div>
          <div className="col-4 row ml-1">
            <div className="ml-auto">
              <h6 className="text-light font-Regular">Upcoming Events</h6>
              <div
                className="card text-white"
                style={{
                  width: "18rem",
                  border: "1px solid #252525",
                  background: "black",
                }}
              >
                <img
                  src="https://source.unsplash.com/9tZhyQskezA"
                  className="card-img-top"
                  alt="..."
                />
                <div className="p-2">
                  <small className="text-danger font-11-Regular">
                    ศ.07.01.63 - อา.08.04.63
                  </small>
                  <p className="card-text">ฝนไปเพลงมา</p>
                  <small style={{ color: "#353535" }}>Mega Banna</small>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12  d-block d-lg-none col-lg-7 col-xl=8">
            <h6 className="text-light font-Regular mt-4">Detail</h6>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
              accusantium iste eos tempore nihil praesentium beatae error illum
              doloremque suscipit, accusamus et libero?
            </p>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
              accusantium iste eos tempore nihil praesentium beatae error illum
              doloremque suscipit, accusamus et libero? Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. A eligendi incidunt earum
              similique ducimus, facilis laborum, accusantium iste eos tempore
              nihil praesentium beatae error illum doloremque suscipit,
              accusamus et libero?
            </p>
            <p className="color-757575">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              eligendi incidunt earum similique ducimus, facilis laborum,
            </p>
            <hr style={{ borderTop: "1px solid #282828" }} />
            <div className="row color-757575">
              <p className="ml-3"> Previous</p>
              <p className="mr-2 ml-auto">Next</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .color-757575 {
          color: #757575;
        }
        .margin-top {
          margin-top: 37rem;
        }
        .card-body-event {
          width: 210px;
          height: 130px;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        @media (max-width: 575px) {
          .card-body-event {
            width: 145px;
            height: 100px;
          }
          .even-cover-carousel-item {
            top: 2%;
            height: 400px;
          }
        }

        .even-cover-carousel-item {
          top: 0%;
          opacity: 0.5;
          background-color: #252525;
          background-size: cover;
          background-repeat: no-repeat;
          max-height: 600px;
        }

        @media (max-width: 991px) {
          .even-cover-carousel-item {
            top: 2%;
          }
        }
      `}</style>
    </div>
  );
};

// export async function getStaticPaths(context) {
//   return {
//     paths: [
//       {
//         params: {
//           username: "TRAROKINGs",
//           id: "1",
//         },
//       },
//     ],
//     fallback: true,
//   };
// }

// export async function getStaticProps({ params }) {
//   return {
//     props: { dataEven: params }, // will be passed to the page component as props
//   };
// }

// export async function getServerSideProps({query}) {
//   return {
//     props: {test:query}, // will be passed to the page component as props
//   }
// }
