import React from 'react'
import MemberOverView from "./member-overview";
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
export default function index(props) {
    return (
        <Router>
            <MemberOverView  {...props} />
        </Router>
    )
}
