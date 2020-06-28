import React from "react";
import MunuMember from "../../component/munuMember";
import CoverMember from "../../component/cover/coverMember";
export default function index({ children }) {
  return (
    <div className="container-fluid">
      <CoverMember />
      <div
        style={{
          position: "relative",
          marginBottom: "150px",
        }}
      >
        <MunuMember />
        {children}
      </div>
    </div>
  );
}
