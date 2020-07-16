import styled from "styled-components";
const Button = styled.button`
  background: #151515;
  border: 0.1px solid #272727;
  border-radius: 5px;
  padding: 50px 50px 50px 50px;
  color: white;

  &:hover {
    background: #272727;
  }
  &:disabled {
    background: #f5f5f5;
  }
`;

export default function AddButton() {
  return (
    <Button className="btn">
      <img src="/assets/img/icon/addIcon.png" alt="" />
    </Button>
  );
}

export const Button2525 = styled.label`
  background-color: #252525;
  font-size: 13px;
  border: 0.1px solid #272727;
  border-radius: 30px;
  padding: 10px 25px 10px 25px;
  color: white;
  display:inline-block;
  cursor:pointer


  &label[for=upload]:hover {
    background-color: #646464;
    color:white;
  }
  &:disabled {
    background: #f5f5f5;
  }
`;



