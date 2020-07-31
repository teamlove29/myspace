import React from 'react'
import  MenuMusic  from "../../component/menuMusic/menuMusic";
export default function Pop() {
    return (
        <MenuMusic>
            <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
        <img
          className="rounded card-body-music"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-music-album-cover-design-template-3324b2b5c69bb9a3cfaed14c71f24ca8_screen.jpg?ts=1572456482"
          alt=""
        />

        <p className="font-13 mt-2">Name song</p>
      </div>

      <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
        <img
          className="rounded card-body-music"
          src="https://i.pinimg.com/originals/3a/f0/e5/3af0e55ea66ea69e35145fb108b4a636.jpg"
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
    )
}
