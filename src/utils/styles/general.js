import styled, { keyframes } from "styled-components";
import img from "../../assets/images/homepage.jpg";

export const MainImage = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const MainImageAbout = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1553px) {
    height: 110vh;
  }
  @media (max-width: 1190px) {
    height: 165vh;
  }
  @media (max-width: 1073px) {
    height: 170vh;
  }
  @media (max-width: 965px) {
    height: 175vh;
  }
  @media (max-width: 820px) {
    height: 180vh;
  }
  @media (max-width: 776px) {
    height: 200vh;
  }
  @media (max-width: 450px) {
    height: 210vh;
  }
  @media (max-width: 414px) {
    height: 270vh;
  }
  @media (max-width: 375px) {
    height: 300vh;
  }
`;
export const MainImageMediaEXP = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1553px) {
    height: 110vh;
  }
  @media (max-width: 965px) {
    height: 100vh;
  }
  @media (max-width: 414px) {
    height: 105vh;
  }
  @media (max-width: 375px) {
    height: 140vh;
  }
`;
export const MainImageMediaPortfolio = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 1553px) {
    height: 110vh;
  }
  @media (max-width: 1069px) {
    height: 155vh;
  }
  @media (max-width: 820px) {
    height: 175vh;
  }
  @media (max-width: 701px) {
    height: 360vh;
  }
  @media (max-width: 414px) {
    height: 375vh;
  }
  @media (max-width: 375px) {
    height: 400vh;
  }
`;
export const MainImageMediaInterests = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 115vh;
  width: 100%;
  @media (max-width: 2214px) {
    height: 100vh;
  }
  @media (max-width: 1583px) {
    height: 125vh;
  }
  @media (max-width: 1409px) {
    height: 135vh;
  }
  @media (max-width: 1181px) {
    height: 145vh;
  }
  @media (max-width: 820px) {
    height: 175vh;
  }
  @media (max-width: 690px) {
    height: 135vh;
  }
  @media (max-width: 414px) {
    height: 155vh;
  }
  @media (max-width: 375px) {
    width: 103%;
    height: 180vh;
  }
`;
export const MainTitle = styled.h3`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
  font-size: 55px;
  animation: fall 2s forwards;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 375px) {
    margin-left: 30px;
  }
`;
export const AnimApparition = styled.div`
  animation: ReverseFade 7s ease;
`;

export const ReverseFade = keyframes`
from {
    opacity(0);
  }
  to {
    opacity(1);
  }
`;
export const Section = styled.section`
  width: 100%;
  height: 100vh;
`;
