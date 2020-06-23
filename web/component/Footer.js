import React from "react";

export default function Footer() {
  return (
    <footer className="sticky-footer bg-black container">
      <div className="container my-auto">

<div className="row">
  <div className="col">
    <p>COMPANY</p>
    <ul className="text-light">
      <li>About Jetdooo</li>
      <li>Contact Us</li>
      <li>Jobs</li>
    </ul>
  </div>
  <div className="col">
    <p>HELP</p>
    <ul className="text-light">
      <li>Track My Music</li>
      <li>Community Support</li>
      <li>Community Guidelines</li>
      <li>Help</li>
    </ul>
  </div>
  <div className="col">
    <p>GOODIES</p>
    <ul className="text-light">
      <li>Download Scrobbler</li>
      <li>Developer API</li>
      <li>Free Music Downloads</li>
      <li>Merchandise</li>
    </ul>
  </div>
  <div className="col">
    <p>ACCOUNT</p>
    <ul className="text-light">
      <li>Inbox</li>
      <li>Settings</li>
      <li>Jetdooo Pro</li>
      <li>Logout</li>
    </ul>
  </div>
  <div className="col">
    <p>FOLLOW US</p>
    <ul className="text-light">
      <li>Facebook</li>
      <li>Twitter</li>
      <li>Instagram</li>
      <li>YouTube</li>
    </ul>
  </div>

</div>
<hr style={{backgroundColor:'white'}} />
        <div className="copyright my-auto">
          <div className="row"></div>
          <span>
            Jetdooo © 2020 Jetdooo Ltd. All rights reserved | Terms of Use •
            Privacy Policy • Legal Policies • California Privacy/Info We Collect
            California Do Not Sell My Info Jobs at Jetdooo Music
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .bg-black {
            background-color: black;
            max-width: 100%;
          }
          ul{
            list-style-type: none;
          }
          ul li{
            font-size:13px
          }
        `}
      </style>
    </footer>
  );
}
