import React from 'react'
import  MenuMusic  from "../../component/menuMusic/menuMusic";
export default function Pop() {
    return (
        <MenuMusic>
                  <div className="col-6 col-md-4 col-lg-4 col-xl-3 mb-4  ">
        <img
          className="rounded card-body-music"
          src="https://static.billboard.com/files/media/Janis-Joplin-Pearl-greatest-album-covers-billboard-1000x1000-compressed.jpg"
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
