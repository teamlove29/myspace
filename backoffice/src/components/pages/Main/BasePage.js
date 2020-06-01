import React, { Suspense } from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import Aside from './layouts/Aside'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Content from '../dashboard/Dashboard'
import Member from '../member/MemberPage'
import testPage from '../TestPage'
import testPage2 from '../TestPage2'
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
                    <Route path="/dashboard" component={Content} />
                    <Route path="/member" component={Member} />
                    <Route exact path="/testPage" component={testPage} />
                    <Route path="/testPage/:id" component={testPage2} />
                    <Redirect to="/dashboard"/>
                    {/* <Redirect to="NotFound"/> */}
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
