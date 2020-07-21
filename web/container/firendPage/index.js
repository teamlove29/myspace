import React from "react";
import MunuFriend from "../../component/munuMember/munuFriend";
import CoverFriend from "../../component/cover/coverFriend";
export default function index({ children }) {
  return (
    <>
    <CoverFriend />
    <div className="container">
  
      <div
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        <MunuFriend />
        {children}
      </div>
    </div>
    </>
  );
}
