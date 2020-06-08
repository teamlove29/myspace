import React, { useState } from "react";
import MemberOverView from "./member-overview";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import membersData from "../../member.json";
export default function Index(props) {
  const id = parseInt(props.match.params.id);
  const [state, setstate] = useState();

  const member = membersData.find((member) => member.id === id);
  const memberType = member.type;

  return <MemberOverView {...props} type={memberType} />;
}
