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
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcREZ2nF2ZsIW25Y1T7-PldKdEWb85X6o5ztyA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTybMm_awsAxS-JHGSj0EdlSg4rUSlhEXckiw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQf2__ZhxOcOVBSA1BMwNMI7o9qPFycwyTIVg&usqp=CAU",
];

const CarouselHomePage = ({ deviceType }) => {
  const CustomButtonGroupAsArrows = ({ next, previous }) => {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <button onClick={previous}>{"<"}</button>
        <button onClick={next}>{">"}</button>
      </div>
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
      //   paritialVisibilityGutter: 50,
      },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    //   paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    //   paritialVisibilityGutter: 30,
    },
  };
  return (
    <Carousel
      ssr
    //   partialVisbile
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
      customButtonGroup={<CustomButtonGroupAsArrows />}
    >
      {images.map((image) => {
        return (
            <>
          <img
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
          <h1>dasdas</h1>
          </>
        );
      })}
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
