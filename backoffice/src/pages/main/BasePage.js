import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Aside from "../../components/layoutsMain/Aside";
import Header from "../../components/layoutsMain/Header";
import Footer from "../../components/layoutsMain/Footer";
import Content from "../dashboard/Dashboard";
import Member from "../member/MemberPage";
import testPage from "../TestPage";
import testPage2 from "../TestPage2";
import { Cube } from "styled-loaders-react";


export default function BasePage() {

  return (
    <div className="d-flex flex-column flex-row-fluid wrapper" id="kt_wrapper">
      <Header />
      <Aside />
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
          <Switch>
            <Route path="/dashboard" component={Content} />
            <Route path="/member" component={Member} />
            <Route exact path="/testPage" component={testPage} />
            <Route path="/testPage/:id" component={testPage2} />
            <Redirect to="/dashboard" />
          </Switch>
      </div>
      <Footer />
    </div>
  );
}
