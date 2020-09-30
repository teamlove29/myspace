import React from "react";
import { Carousel } from "react-bootstrap";

export default function CarouselEvent() {
  return (
    <>
      <Carousel
        style={{
          top: "0",
          right: "0",
          //   position: "absolute",
          position: "relative",
          width: "100%",
        }}
        controls={false}
      >
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://img1.goodfon.com/wallpaper/nbig/4/b7/punk-punkrock-concert-poster.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://img1.goodfon.com/wallpaper/nbig/4/b7/punk-punkrock-concert-poster.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 even-cover-carousel-item"
            src="https://img1.goodfon.com/wallpaper/nbig/4/b7/punk-punkrock-concert-poster.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

      <style jsx>{`


      .even-cover-carousel-item {
     width: "100%",
  top: 0%;
  background-color: #252525;
  background-size: cover;
  background-repeat: no-repeat;
  max-height: 800px;
}
@media (max-width: 575px) {

  .even-cover-carousel-item {
    top: 2%;
    max-height: 300px;
  }
}

@media (max-width: 991px) {
  .even-cover-carousel-item {
    margin-top:65px;
  }

}
`}</style>
    </>
  );
}
