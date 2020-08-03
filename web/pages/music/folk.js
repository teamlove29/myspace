import React from "react";
import MenuMusic from "../../component/menuMusic/menuMusic";
export default function Folk() {
  return (
    <MenuMusic>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto mb-4  ">
        <img
          className="rounded card-body-music"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdRkFFvfpkHk_KOO2VbPDYm_rzfGCSzyOu8w&usqp=CAU"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <div className="col-6 col-md-4 col-lg-4 col-xl-auto mb-4  ">
        <img
          className="rounded card-body-music"
          src="https://townsquare.media/site/812/files/2017/06/Amine-Good-For-You.jpeg?w=980&q=75"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>
      <style jsx>
        {`
          .card-body-music {
            width: 200px;
            height: 200px;
            backgroundposition: center;
            backgroundrepeat: no-repeat;
            backgroundsize: cover;
          }

          @media (max-width: 500px) {
            .card-body-music {
              width: 145px;
              height: 145px;
            }
          }
        `}
      </style>
    </MenuMusic>
  );
}
