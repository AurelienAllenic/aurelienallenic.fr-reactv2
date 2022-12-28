import styled from "styled-components";
import colors from "./colors";

export const NavHomeLeft = styled.nav`
  display: grid;
  position: absolute;
  top: 40%;
  left: 5%;
  animation: fall 3s forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1128px) {
    top: 43%;
  }
@media (max-width: 756px) {
  left: 2%;
}
@media (max-width: 690px) {
  left: 0%;
}
@media (max-width: 644px) {
  top: 50%;
}
@media (max-width: 550px) {
  top: 45%;
  left: 5%;
}
  @media (max-width: 414px) {
    left: 0%;
  }
  @media (max-width: 286px) {
    left: 30%;
  }
`;
export const NavHomeRight = styled.nav`
  display: grid;
  position: absolute;
  top: 40%;
  right: 5%;
  animation: fall 2s forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1128px) {
    top: 43%;
  }
  @media (max-width: 756px) {
    right: 2%;
  }
  @media (max-width: 690px) {
    right: 0%;
  }
  @media (max-width: 644px) {
    top: 50%;
  }
  @media (max-width: 550px) {
    right: 5%;
    top: 45%;
  }
  @media (max-width: 414px) {
    right: 0%;
  }
  @media (max-width: 286px) {
    left: 30%;
    top: 68%;
  }
`;
export const Button = styled.a`
  grid-column: 1;
  background-color: transparent;
  color: ${colors.primary};
  font-size: 30px;
  padding: 25px;
  text-decoration: none;
  &:hover {
    background-color: ${colors.secondary};
    color: white;
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 820px) {
    padding: 15px;
  }
  @media (max-width: 644px) {
    font-size: 23px;
  }
  @media (max-width: 550px) {
    font-size: 30px;
    padding: 20px;
    color: white;
  }
  @media (max-width: 522px) {
    font-size: 25px;
  }
  @media (max-width: 440px) {
    font-size: 22px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
  @media (max-width: 314px) {
    font-size: 16px;
  }
`;

