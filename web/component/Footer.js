import React from 'react'

export default function Footer () {
  return (
    <footer className="sticky-footer bg-black container padding-b">
      <div className="container-fluid my-auto">

        <div className="row mb-5 justify-content-md-center">
          <div className="col-6 col-md-2">
            <p className="font-SemiBold">COMPANY</p>
            <ul className="text-light">
              <li>About Jetdooo</li>
              <li>Contact Us</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <p className="font-SemiBold">HELP</p>
            <ul className="text-light">
              <li>Track My Music</li>
              <li>Community Support</li>
              <li>Community Guidelines</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <p className="font-SemiBold">GOODIES</p>
            <ul className="text-light">
              <li>Download Scrobbler</li>
              <li>Developer API</li>
              <li>Free Music Downloads</li>
              <li>Merchandise</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <p className="font-SemiBold">ACCOUNT</p>
            <ul className="text-light">
              <li>Inbox</li>
              <li>Settings</li>
              <li>Jetdooo Pro</li>
              <li>Logout</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <p className="font-SemiBold">FOLLOW US</p>
            <ul className="text-light">
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>YouTube</li>
            </ul>
          </div>

        </div>
        <hr style={{ backgroundColor: '#2F2F2F' }} />
        <div className="copyright mt-5">
          <div className="row justify-content-start justify-content-md-center">
            <div className="col-12 col-md-8  mb-4">
              <span
                style={{
                  lineHeight: '18pt'
                }}
                className="text-muted font-13">
            Jetdooo © 2020 Jetdooo Ltd. All rights reserved | Terms of Use •
            Privacy Policy • Legal Policies • California Privacy/Info We Collect
            California Do Not Sell My Info Jobs at Jetdooo Music
              </span>
            </div>
            <div className="col-12 col-md-1">
              <img
                className="mx-auto d-block"
                width="30px" src="/assets/img/icon/myspace.png" alt=""/>
            </div>

          </div>

        </div>
      </div>
      <style jsx>
        {`
        .padding-b{
          padding-bottom:80px;
        }
          .bg-black {
            background-color: black;
            max-width: 100%;
          }
          ul{
            list-style-type: none;
          }
          ul li{
            font-size:13px;
            line-height: 18pt ;
          }
        `}
      </style>
    </footer>
  )
}
