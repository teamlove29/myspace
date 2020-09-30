import styled from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export const Button = styled.button`
  font-weight: 500;
  font-size: 14px;
  background: red; /* For browsers that do not support gradients */
  background: -webkit-linear-gradient(
    -90deg,
    #f3145e,
    yellow
  ); /* For Safari 5.1 to 6.0 */
  background: -o-linear-gradient(
    -90deg,
    #f3145e,
    yellow
  ); /* For Opera 11.1 to 12.0 */
  background: -moz-linear-gradient(
    -90deg,
    #f3145e,
    yellow
  ); /* For Firefox 3.6 to 15 */
  background: linear-gradient(
    -90deg,
    #f3145e,
    yellow
  ); /* Standard syntax (must be last) */
  border: 0;
  border-radius: 25px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 2rem;
  padding-right: 2rem;
  color: white;
  margin-top: 3rem;
  transition: 0.5s;
  @media (max-width: 1024px) {
    padding: 10px 20px 10px 20px;
  }

  &:hover {
    background: red;
  }
  &:disabled {
    background: #f5f5f5;
  }
`;

export const Alert = styled.div`
  background-color: #fff9fa;
  border: 1px solid rgba(255, 66, 79, 0.2);
  margin-bottom: 1rem;
  padding: 0.8rem;
  font-size: 0.9rem;
`;
