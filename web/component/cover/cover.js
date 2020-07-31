import styled from "styled-components";

export function Cover({ height, img, text }) {
  const CoverShow = styled.div`
    top: 0%;
    opacity:0.5;
    position: fixed;
    background-color: #252525;
    background-size: cover;
    background-repeat: no-repeat;
    height:250px;
    @media (max-width: 991px) {
      top: 2%;
    }
    @media (max-width: 575px) {
        top: 2%;
        height:400px;
      }
  `;

  const Centered = styled.div`
    position: fixed;
    font-size: 20px;
    top: 13%;
    left: 60%;
    text-align: center;
    transform: translate(-50%, -50%);
    @media (max-width: 991px) {
      top: 17%;
      left: 50%;
    }
    @media (max-width: 575px) {
        top: 25%;
    }
  `;

  return (
    <>
      {/* <img 
          
          style={{

            backgroundImage: "url(" + img + ")",
            // backgroundImage: `url("https://i.stack.imgur.com/vhoa0.jpg")`,
            height: height,
            width: "100%",
            minWidth: "991px",
            backgroundPosition: "100% 100%",
          }}

          src="https://i.stack.imgur.com/vhoa0.jpg" alt=""/> */}
      <CoverShow
        style={{
          backgroundImage: "url(" + img + ")",
          // backgroundImage: `url("https://i.stack.imgur.com/vhoa0.jpg")`,
          height: height,
          width: "100%",
          minWidth: "991px",
          backgroundPosition: "100% 50%",
        }}
      />
      <Centered className="font-SemiBold text-light">{text}</Centered>
    </>
  );
}
