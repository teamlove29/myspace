import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import EditUser from "./EditUser";
import AddUser from "./AddUser";
import ManagerUser from "./UserList";
export default function index() {
  return (
    <>
      <ManagerUser />
      <Switch>
        <Route path="/manager/user/add" component={() => <AddUser show={true} /> } />
        <Route path="/manager/user/edit" component={() => <EditUser show={true} /> }/>
      </Switch>
    </>
  );
}
