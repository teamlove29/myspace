import React from 'react'
import { Redirect, Switch, Route } from "react-router-dom";
import EditUser from './EditUser'
import AddUser from './AddUser'
import ManagerUser from "./UserList";
export default function index() {
    return (
        <Switch>
            <Route exact path="/manager/user/lists" component={ManagerUser} />
            <Route path="/manager/user/add" component={AddUser} />
            <Route path="/manager/user/edit/:id" component={EditUser} />

        </Switch>
    )
}
