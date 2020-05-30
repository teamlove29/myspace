import React, { Suspense } from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import Aside from '../components/pages/Main/layouts/Aside'
import Header from '../components/pages/Main/layouts/Header'
import Footer from '../components/pages/Main/layouts/Footer'
import Content from '../components/pages/Main/layouts/Content'
import Member from '../components/pages/members/Member'
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
                </Switch>
            </div>
            <Footer />
        </div>
    )
}
