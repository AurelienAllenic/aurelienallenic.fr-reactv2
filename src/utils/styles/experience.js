import styled from "styled-components";
import colors from "./colors";

export const SuperContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 10%;
`;
export const CardLeft = styled.div`
  grid-row: 1;
  margin: 20px;
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
`;
export const SecondInfoContainer = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;
export const Info = styled.p`
  color: white;
  font-size: 25px;
  &:hover {
    color: black;
  }
`;
export const SecondInfo = styled.p`
  color: black;
  font-size: 20px;
  &:hover {
    color: white;
  }
`;
