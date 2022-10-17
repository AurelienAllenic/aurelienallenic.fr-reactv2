import styled from "styled-components";
import colors from "./colors";

export const NavContainerLeft = styled.nav`
  display: grid;
  position: absolute;
  top: 2%;
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
  @media (max-width: 820px) {
    left: 22%;
    top: 8%;
  }
  @media (max-width: 414px) {
    left: 0%;
    top: 10%;
  }
`;
export const NavContainerRight = styled.nav`
  display: grid;
  position: absolute;
  top: 2%;
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
  @media (max-width: 820px) {
    left: 10%;
    top: 17%;
  }
  @media (max-width: 414px) {
    left: 0%;
    top: 25%;
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
  @media (max-width: 820px) {
    font-size: 20px;
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
  @media (max-width: 820px) {
    font-size: 20px;
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
  @media (max-width: 820px) {
    font-size: 20px;
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
  @media (max-width: 820px) {
    font-size: 20px;
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
  @media (max-width: 820px) {
    font-size: 20px;
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
  @media (max-width: 820px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;
