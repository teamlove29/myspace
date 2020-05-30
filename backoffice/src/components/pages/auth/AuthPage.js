import React from 'react'
import { Link, Switch, Route,Redirect } from "react-router-dom";
import Aside from './layout/Aside'
import Footer from './layout/Footer'
import Login from "./Login";

import "../../_metronic/_assets/sass/pages/login/login-3.scss";


export default function AuthPage() {
    return (
        <div className="d-flex flex-column flex-root">
            <div
                className="login login-3 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid bg-white"
                id="kt_login"
            >
                <Aside />
                {/*begin::Content*/}
                <div className="flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden">
                    {/*begin::Content header*/}
                    <div className="position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10">
                        <span className="font-weight-bold text-dark-50">Don't have an account yet?</span>
                        <Link to="/auth/registration" className="font-weight-bold ml-2" id="kt_login_signup">Sign Up!</Link>
                    </div>
                    {/*end::Content header*/}

                    {/* begin::Content body */}
                    <div className="d-flex flex-column-fluid flex-center mt-30 mt-lg-0">

                        <Switch>
                            <Route path="/auth/login" component={Login} />
                            <Redirect from="/auth" exact={true} to="/auth/login"/>
                            <Redirect to="/auth/login"/>
                        </Switch>
                    </div>
                    {/*end::Content body*/} 


                    <Footer />
                </div>
                {/*end::Content*/}

            </div>
        </div>
    )
}
