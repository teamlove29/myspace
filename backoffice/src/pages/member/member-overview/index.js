import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import MemberEdit from "./MemberEdit";
import MemberView from "./MemberView";
import Albums from "../artist-albums";
import Aside from "../../../components/layoutMember/Aside";
export default function MemberPage(props) {

  // It checks if the user is authenticated, if they are,
  // it renders the "component" prop. If not, it redirects
  // the user to /login.
  const PrivateRoute  = ({ component: Component, ...rest }) => (
    <Route {...rest} render={propsvalues =>
      props.type === 'artist' ? (
          <Component {...propsvalues} />
        ) : (
            <Redirect to="/member" />
          )
      }
    />
  );

  return (
    <div className="container d-flex flex-row">
      <Aside {...props} />
      <div className="flex-row-fluid ml-lg-8">
          <Route path="/member/overview/:id" component={MemberView} /> 
          <Route path="/member/edit/:id"  component={() => <MemberEdit  {...props}  />}  />
          <PrivateRoute path="/member/albums/:id"  component={Albums}  />
      </div>
    </div>
  );
}
