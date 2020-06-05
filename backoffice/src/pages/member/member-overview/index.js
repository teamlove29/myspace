import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import MemberEdit from "./MemberEdit";
import MemberView from "./MemberView";
import Aside from "../../../components/layoutMember/Aside";
export default function MemberPage(props) {
  return (
    <div className="container d-flex flex-row">
      <Aside {...props} />
      <div className="flex-row-fluid ml-lg-8">
        <Switch >
          <Route path="/member/overview/:id" component={MemberView} /> 
          <Route path="/member/edit/:id"  component={() => <MemberEdit  {...props}  />}  />
        </Switch>
      </div>
    </div>
  );
}
