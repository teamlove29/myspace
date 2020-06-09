import React, { useState } from "react";
import MemberOverView from "./member-overview";
import membersData from "../../data/music/member.json";
export default function Index(props) {
  const id = parseInt(props.match.params.id);
  const member = membersData.find((member) => member.id === id);
  const memberType = member.type;

  return <MemberOverView {...props} type={memberType} />;
}
