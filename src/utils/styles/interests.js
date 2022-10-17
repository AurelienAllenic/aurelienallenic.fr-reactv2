import styled from "styled-components";
import colors from "./colors";

export const CardsContainer = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr 1fr;
  padding-top: 75px;
  @media (max-width: 820px) {
    padding-top: 240px;
  }
  @media (max-width: 820px) {
    padding-top: 225px;
  }
  @media (max-width: 414px) {
    padding-top: 210px;
  }
`;
export const Card = styled.div`
  color: white;
  padding-left: 35%;
  padding-right: 35%;
  background-color: ${colors.primary};
  opacity: 0.8;
  border-radius: 10px 10px 10px 10px;
  &:hover {
    opacity: 1;
    background-color: white;
    color: ${colors.primary};
  }
`;
export const MainTitleCard = styled.h4`
  font-size: 25px;
  @media (max-width: 690px) {
    font-size: 20px;
  }
  @media (max-width: 540px) {
    margin-left: -60px;
  }
  @media (max-width: 393px) {
    margin-left: -50px;
  }
`;
export const SecondTitleCard = styled.h5`
  font-size: 20px;
  @media (max-width: 690px) {
    font-size: 15px;
  }
  @media (max-width: 583px) {
    margin-left: -40px;
  }
`;
export const IconCard = styled.span`
  font-size: 35px;
  position: relative;
  @media (max-width: 690px) {
    font-size: 25px;
  }
`;
