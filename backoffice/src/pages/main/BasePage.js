import React, { Suspense, lazy } from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import Aside from "../../components/layoutsMain/Aside";
import Header from "../../components/layoutsMain/Header";
import Footer from "../../components/layoutsMain/Footer";
import Content from "../dashboard/Dashboard";
import MemberList from "../member/member-list/MemberList";
import MemberOverView from "../member";
import TestPage from "../TestPage";
import ManagerUser from "../managerUser";
import Genre from "../genres";
import firebase from "../../config/config";

export default function BasePage(props) {
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
          <Route exact path="/member" component={MemberList} />
          <Route path="/member/overview/:id" component={MemberOverView} />
          <Route path="/member/edit/:id" component={MemberOverView} />
          <Route path="/member/albums/:id" component={MemberOverView} />
          <Route path="/manager/user" component={ManagerUser} />
          <Route path="/manager/genre" component={Genre} />
          <Route path="/testPage" component={TestPage} />
          <Redirect to="/dashboard" />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}
