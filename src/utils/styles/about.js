import styled from "styled-components";
import colors from "./colors";

export const TitleAbout = styled.h3`
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SuperContainerAbout = styled.div`
  display: grid;
  gap: 100px;
  position: absolute;
  left: 40%;
  top: 19%;
  margin-right: 40px;
  margin-left: 40px;
  animation: fall 2s forwards;
  animation-delay: 0.2s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1706px) {
    margin-right: 20px;
    margin-left: 20px;
    left: 30%;
  }
  @media (max-width: 1428px) {
    gap: 5px;
    margin-right: 40px;
    margin-left: 40px;
  }
  @media (max-width: 1414px) {
    top: 19%;
  }
  @media (max-width: 1189px) {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 820px) {
    gap: 10px;
    width: 85%;
    left: -10%;
    top: 30%;
  }
  @media (max-width: 768px) {
    top: 30%;
    left: -13%;
  }
  @media (max-width: 450px) {
    top: 38%;
    left: -13%;
  }
  @media (max-width: 414px) {
    gap: 10px;
    display: flex;
    flex-direction: column;
    left: -15%;
    text-align: center;
    top: 45%;
  }
`;
export const ExperienceContainer = styled.div`
  display: grid;
  grid-row: 1;
  background-color: ${colors.primary};
  opacity: 0.8;
  border-radius: 15px 15px 15px 15px;
  padding-left: 25px;
  padding-right: 25px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 820px) {
    position: relative;
    left: 15%;
    grid-column: 1;
  }
  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
  @media (max-width: 414px) {
    grid-row: none;
  }
`;
export const PersoContainer = styled.div`
  display: grid;
  grid-row: 1;
  background-color: ${colors.primary};
  opacity: 0.8;
  border-radius: 15px 15px 15px 15px;
  padding: 15px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 820px) {
    position: relative;
    left: 15%;
    grid-column: 2;
  }
  @media (max-width: 414px) {
    grid-row: none;
  }
`;
export const ProjectsContainer = styled.div`
  display: grid;
  grid-row: 1;
  background-color: ${colors.primary};
  opacity: 0.8;
  border-radius: 15px 15px 15px 15px;
  padding: 15px;
  &:hover {
    opacity: 1;
  }
  @media (max-width: 820px) {
    position: relative;
    left: 15%;
    grid-column: 3;
  }
  @media (max-width: 414px) {
    grid-row: none;
  }
`;
export const Icon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: white;
  padding-top: 25px;
`;
export const TextAbout = styled.p`
  color: white;
  font-size: 20px;
  @media (max-width: 820px) {
    font-size: 15px;
  }
`;
export const Insist = styled.span`
  font-weight: bold;
  font-size: 25px;
  @media (max-width: 820px) {
    font-size: 20px;
  }
`;
export const MotivationContainer = styled.div`
  position: relative;
  top: 20%;
  left: 0%;
  animation: fall 2s forwards;
  animation-delay: 0.4s;
  width: 35%;
  font-size: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: ${colors.primary};
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 2px;
  padding-top: 2px;
  border-radius: 15px 15px 15px 15px;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1706px) {
    width: 25%;
    top: 8%;
  }
  @media (max-width: 1414px) {
    top: 5%;
  }
  @media (max-width: 1189px) {
    top: 2.5%;
  }
  @media (max-width: 820px) {
    font-size: 14px;
    top: 74%;
    width: 80%;
    left: 6%;
    margin-right: 0px;
    margin-left: 0px;
  }
  @media (max-width: 776px) {
    top: 68%;
    left: 4%;
  }
  @media (max-width: 450px) {
    top: 70%;
    left: 4%;
  }
  @media (max-width: 414px) {
    top: 68%;
    left: 3%;
  }
`;
export const MotivationText = styled.p`
  color: white;
  line-height: 1.8;
`;
