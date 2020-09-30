import React from "react";
import Carousel from "react-multi-carousel";

const images = [
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/artistic-album-cover-design-template-d12ef0296af80b58363dc0deef077ecc_screen.jpg?ts=1561488440",
  "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/715018/original/9b27a8924c7f731580084bb894550bf8696223c6/design-your-album-cover.jpg",
  "https://i.pinimg.com/originals/fd/57/43/fd574304815b6a49c227c6248d66050c.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlNHoiFGcB3yiTX300a8hvAWunTMr3fRFvjQ&usqp=CAU",
  "https://cdn8.openculture.com/2018/02/26214611/Arlo-safe-e1519715317729.jpg",
  "https://external-preview.redd.it/7IO76LbDKHV731XHSDfwfva9LTSEw9XGsdkyEevqNHs.jpg?auto=webp&s=5487f9060ece620f2057de1d5d53fe994cd6958f",
  "https://animatebkk-online.com/wp-content/uploads/2019/07/4988104115508-1.jpg",
  "https://cf.lnwfile.com/3cfb9j.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJIaFQicGfALu7nsov8BnW0uGwmREzgzgsAg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJIaFQicGfALu7nsov8BnW0uGwmREzgzgsAg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREZ2nF2ZsIW25Y1T7-PldKdEWb85X6o5ztyA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTybMm_awsAxS-JHGSj0EdlSg4rUSlhEXckiw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf2__ZhxOcOVBSA1BMwNMI7o9qPFycwyTIVg&usqp=CAU",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/minimal-dark-album-cd-cover-template-design-d666beed411324dbdc8dc539de9cc27a_screen.jpg?ts=1579664445",
];

const CarouselHomePage = ({ deviceType }) => {
  const CustomButtonGroupAsArrows = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;
    return (
      <div
        style={{
          top: "-22rem",
        }}
        className="row col-md-auto text-light "
      >
        <h6 className="font-SemiBold h5 ">Recommended Music</h6>{" "}
        <div className="row ml-auto">
          <p
            onClick={previous}
            className={`ml-auto font-25 pointer mr-3`}
          >
            {" < "}
          </p>
          <p onClick={next} className="ml-auto font-25 pointer">
            {"  > "}
          </p>
        </div>
      </div>

      // <div
      //   style={{
      //     textAlign: "center",
      //   }}
      // >
      //   <button onClick={previous}>{"<"}</button>
      //   <button onClick={next}>{">"}</button>
      // </div>
    );
  };
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
      paritialVisibilityGutter: 30,
    },
    subDesktop: {
      breakpoint: { max: 1200, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 50,
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 3,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
      //   paritialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      ssr
      // partialVisbile
      draggable
      swipeable
      centerMode={false}
      infinite={false}
      deviceType={deviceType}
      itemClass="image-item"
      containerClass="container-padding-bottom "
      responsive={responsive}
      renderButtonGroupOutside={true}
      arrows={false}
      autoPlay={false}
      customButtonGroup={<CustomButtonGroupAsArrows />}
    >
      {images.map((image, index) => {
        return (
          <div key={index}>
            <img
              draggable={false}
              style={{ width: "100%", height: "200px" }}
              src={image}
              className="mb-4"
            />
            <div className="text-light detail-recommended row ">
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
        );
      })}
      <style jsx>
        {`
          .detail-recommended {
            max-width: 100%;
          }
        `}
      </style>
    </Carousel>
  );
};

export default function CarouselHome() {
  return (
    <>
      <CarouselHomePage />
    </>
  );
}
