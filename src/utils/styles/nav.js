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
  @media (max-width: 414px) {
    left: 0%;
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
  @media (max-width: 414px) {
    right: 0%;
  }
`;
export const HomeButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const AboutButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const ExperienceButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const PortfolioButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const InterestsButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
export const ContactButton = styled.a`
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
  @media (max-width: 600px) {
    font-size: 23px;
  }
  @media (max-width: 414px) {
    font-size: 20px;
    padding: 10px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
