import React from "react";

export default function test() {
  return (
    <div className="container">
      <img
        src="https://source.unsplash.com/cCvnG-937HE/150x150"
        alt="avatar"
        className="rounded-circle"
      />
      <h3> Marutthep</h3>
      <p>Marutthep | Joined since 22 May 2020 | Last Login 19/05/2020</p>

      <ul>
        <li>Overview</li>
        <li>Playlist</li>
        <li>Following</li>
        <li>Follower</li>
        <li>Loved Tracks</li>
        <li>Shouts</li>
      </ul>
      <h6>About me</h6>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus
        modi itaque reiciendis cupiditate maxime nam ullam. Tempora consequuntur
        illum, minus ex, ducimus soluta velit, praesentium alias asperiores
        iusto ipsa!
      </p>
      <h6>Born</h6>
      <p>22 May 1992 (age 28)</p>
      <h6>Born in</h6>
      <p>Mechanicsville, Hanover County, Virinia, United States</p>
      <button className="btn btn-sm btn-outline-light pr-4 pl-4" style={{borderRadius: '25px'}}>Follow</button>
    </div>
  );
}
