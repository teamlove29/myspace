import styled from "styled-components";
import { ModalContext } from "../../config/context/ModalProvider";

export function CoverSettingImage({ width, imgCover }) {
  const { dataMember } = React.useContext(ModalContext);
  const X = dataMember.mem_cover_position_x != '' ? dataMember.mem_cover_position_x : '100%'
  const Y = dataMember.mem_cover_position_y != '' ? dataMember.mem_cover_position_y : '50%'; 
  const XY = X + ''+ Y
  const CoverSetting = styled.div`
    top: 0%;
    position: absolute;
    height: 200px;
    background-color: #252525;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    @media (max-width: 991px) {
      top: 2.5%;
    }
  `;

  return (
    <CoverSetting
      style={{
        backgroundImage: "url(" + imgCover + ")",
        // backgroundImage: `url("https://pbs.twimg.com/media/EUaV7lWUYAAialH.jpg")`,
        backgroundPosition: XY,
        width: width,
      }}
    />
  );
}
