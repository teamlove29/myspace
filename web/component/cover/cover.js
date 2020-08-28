import styled from "styled-components";

export function Cover({ height, img, text }) {
  const CoverShow = styled.div`
    top: 0%;
    opacity: 0.5;
    position: absolute;
    background-color: #252525;
    background-size: cover;
    background-repeat: no-repeat;
    height: 250px;
    @media (max-width: 991px) {
      top: 2%;
    }
    @media (max-width: 575px) {
      top: 2%;
      height: 400px;
    }
  `;

  const Centered = styled.div`
    position: absolute;
    font-size: 20px;
    top: 10%;
    left: 50%;
    text-align: center;
    z-index: 2;
    color: white;
    transform: translate(-50%, 0%);
    @media (max-width: 991px) {
      margin-top: 5rem;
    }
    @media (max-width: 575px) {
      margin-top: 10rem;
    }
  `;

  return (
    <>
      {/*  
        <div className="text-block">
          <h4>Music</h4>
        </div>
    */}

      <CoverShow
        style={{
          backgroundImage: "url(" + img + ")",
          height: height,
          width: "100%",
          minWidth: "991px",
          backgroundPosition: "100% 50%",
        }}
      />
      <div className="container">
        <Centered className="font-SemiBold text-light">{text}</Centered>
      </div>
      <style jsx>
        {`
          .container {
            position: relative;
          }
        `}
      </style>
    </>
  );
}
