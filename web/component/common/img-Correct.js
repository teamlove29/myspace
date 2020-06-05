import CorrectIcon from "../../assets/img/icon/icon-correct.png";

export default function imgIcon() {
  return (
    <>
      <img src={CorrectIcon} />
      <style jsx>{`
        img {
          width: 120px;
          height: 150px;
        }
      `}</style>
    </>
  );
}
