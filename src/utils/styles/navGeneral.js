import styled from "styled-components";
import colors from "./colors";

export const NavContainerLeft = styled.nav`
  display: grid;
  position: absolute;
  top: 8%;
  left: 10%;
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
  @media (max-width: 1693px) {
    left: 5%;
  }
  @media (max-width: 1566px) {
    left: 0%;
  }
  @media (max-width: 1414px) {
    top: 9%;
  }
  @media (max-width: 820px) {
    top: 8%;
    left: 22%;
  }
  @media (max-width: 583px) {
    top: 10%;
    left: 15%;
  }
  @media (max-width: 450px) {
    left: 8%;
  }
  @media (max-width: 414px) {
    left: 0%;
    top: 13%;
  }
`;
export const NavContainerRight = styled.nav`
  display: grid;
  position: absolute;
  top: 8%;
  right: 8%;
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
  @media (max-width: 1693px) {
    right: 4%;
  }
  @media (max-width: 1566px) {
    right: 0%;
  }
  @media (max-width: 1414px) {
    top: 9%;
  }
  @media (max-width: 1050px) {
    right: 1%;
  }
  @media (max-width: 820px) {
    left: 10%;
    top: 23%;
  }
  @media (max-width: 583px) {
    top: 19%;
  }
  @media (max-width: 450px) {
    left: 8%;
    top: 22%;
  }
  @media (max-width: 414px) {
    left: 0%;
    top: 28%;
  }
`;
export const HomeButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const AboutButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const ExperienceButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const PortfolioButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const InterestsButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: ${colors.primary};
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const ContactButton = styled.a`
  grid-row: 1;
  background-color: transparent;
  color: ${colors.primary};
  color: white;
  font-size: 30px;
  padding: 25px;
  border: none;
  text-decoration: none;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    cursor: pointer;
  }
  @media (max-width: 1222px) {
    font-size: 25px;
  }
  @media (max-width: 1050px) {
    font-size: 17px;
  }
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 536px) {
    padding: 15px;
  }
  @media (max-width: 450px) {
    padding: 15px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
