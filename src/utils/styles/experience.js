import styled from "styled-components";
import colors from "./colors";

export const SuperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 10%;
  @media (max-width: 1650px) {
    gap: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 820px) {
    margin-top: 25%;
  }
  @media (max-width: 770px) {
    margin-top: 23%;
  }
  @media (max-width: 700px) {
    margin-top: 20%;
  }
  @media (max-width: 667px) {
    margin-top: 25%;
  }
  @media (max-width: 468px) {
    margin-top: 35%;
  }
  @media (max-width: 444px) {
    margin-top: 45%;
  }
  @media (max-width: 414px) {
    margin-top: 55%;
  }
  @media (max-width: 390px) {
    margin-top: 58%;
  }
`;
export const CardLeft = styled.div`
  grid-row: 1;
  background-color: ${colors.primary};
  border-radius: 15px 15px 15px 15px;
  animation: fall 3s forwards;
  animation-delay: 0.6s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.8;
    }
  }
  @media (max-width: 1650px) {
    width: 70%;
  }
  @media (max-width: 1176px) {
    width: 100%;
  }
  @media (max-width: 667px) {
    width: 115%;
  }
`;
export const CardRight = styled.div`
  display: grid;
  grid-row: 1;
  margin: 20px;
  background-color: ${colors.primary};
  border-radius: 15px 15px 15px 15px;
  animation: fall 3s forwards;
  animation-delay: 0.9s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1650px) {
    width: 70%;
  }
  @media (max-width: 1176px) {
    width: 100%;
  }
  @media (max-width: 667px) {
    width: 115%;
  }
`;
export const MainTitleExp = styled.h1`
  color: white;
  text-align: center;
`;
export const InfoContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 413px) {
    gap: 1.5rem;
  }
`;
export const SecondInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 667px) {
    gap: 1rem;
  }
  @media (max-width: 390px) {
    gap: 0.5rem;
  }
`;
export const Info = styled.p`
  color: white;
  font-size: 25px;
  &:hover {
    color: black;
  }
  @media (max-width: 820px) {
    font-size: 17px;
  }
`;
export const SecondInfo = styled.p`
  color: black;
  font-size: 20px;
  &:hover {
    color: white;
  }
  @media (max-width: 820px) {
    font-size: 12px;
  }
`;
