import React, { Suspense } from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import Aside from './layouts/Aside'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Content from '../dashboard/Dashboard'
import Member from '../member/MemberPage'
import NotFound from '../NotFound'
// import Member from './components/pages/members/Member'
// import TestPage from './components/pages/TestPage'



export default function BasePage() {
    
    return (
        <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
            <Header />
            <Aside />
            <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                <Switch>
                {
                    /* Redirect from root URL to /dashboard. */
                    <Redirect exact from="/" to="/dashboard"/>
                }
                    <Route path="/dashboard" component={Content} />
                    <Route path="/member" component={Member} />
                    {/* <Redirect to="NotFound"/> */}
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
