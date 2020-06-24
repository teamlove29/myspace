import React from "react";

export default function Footer() {
  return (
    <footer className="sticky-footer bg-black container">
      <div className="container-fluid my-auto">

<div className="row mb-5">
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
<hr style={{backgroundColor:'#2F2F2F'}} />
        <div className="copyright mt-5">
          <div className="row justify-content-start">
            <div className="col-8">
            <span className="text-muted font-13">
            Jetdooo © 2020 Jetdooo Ltd. All rights reserved | Terms of Use •
            Privacy Policy • Legal Policies • California Privacy/Info We Collect
            California Do Not Sell My Info Jobs at Jetdooo Music
          </span>
            </div>
  <div className="col-1">
  <img 
  className="ml-5"
  width="30px"  src="/assets/img/icon/myspace.png" alt=""/>
  </div>
         
          </div>
    
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
