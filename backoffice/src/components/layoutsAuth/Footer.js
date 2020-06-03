import React from 'react'
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <div className="d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5">
             {/* begin::Mobile footer */}

              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                &copy; 2020 Metronic
              </div>
              <div className="d-flex order-1 order-sm-2 my-2">
                <Link to="/terms" className="text-dark-75 text-hover-primary">
                  Privacy
                </Link>
                <Link
                    to="/terms"
                    className="text-dark-75 text-hover-primary ml-4"
                >
                  Legal
                </Link>
                <Link
                    to="/terms"
                    className="text-dark-75 text-hover-primary ml-4"
                >
                  Contact
                </Link>
              </div>
  
            {/* end::Mobile footer */}
        </div>
    )
}
