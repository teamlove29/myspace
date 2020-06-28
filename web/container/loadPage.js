import React from "react";

export default function LoadPage() {
  return (
    <>
      <div className="d-flex justify-content-center text-light mt-5 ">
        <div
          style={{
            width: "3rem",
            height: "3rem",
          }}
          className="spinner-border"
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
        <h1 className="ml-3" my-auto>
          Loading...
        </h1>
      </div>
    </>
  );
}
