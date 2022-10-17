import styled, { keyframes } from "styled-components";
import img from "../../assets/images/homepage.jpg";

export const MainImage = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;
export const MainImageMedia = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
  @media (max-width: 820px) {
    height: 110vh;
  }
  @media (max-width: 768px) {
    height: 120vh;
  }
  @media (max-width: 414px) {
    height: 270vh;
  }
  @media (max-width: 375px) {
    height: 300vh;
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
