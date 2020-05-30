import React from 'react'
import Aside from './layouts/Aside'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import Content from './layouts/Content'
import Member from '../members/Member'
import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

function Dashboard() {
    return (
        <Router>
            <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
                <Header />
                <Aside />
                {/*begin::Content*/}
                <div className="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <Switch>
                        <Route  path="/dashboard" component={Content} />
                        <Route  path="/member" component={Member} />
                    </Switch>
                </div>
                {/*end::Content*/}

                <Footer />
            </div>
        </Router>
    )
}

export default Dashboard
