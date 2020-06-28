import React from 'react'

export default function CoverMember() {
    return (
        <>
                  <img
        style={{
          top: "0",
          right: "0",
          position: "absolute",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "200px ",
          padding: "0 0",
        }}
        className="container-fluid"
        src="/assets/img/cover/coverMember.png"
        alt=""
      />
        </>
    )
}
