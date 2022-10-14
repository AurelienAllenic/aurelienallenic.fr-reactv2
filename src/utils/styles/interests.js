import styled from "styled-components";
import colors from "./colors";

export const CardsContainer = styled.div`
  display: grid;
  gap: 50px;
  grid-template-columns: 1fr 1fr;
`;
export const Card = styled.div`
  color: white;
  padding-left: 35%;
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
`;
export const SecondTitleCard = styled.h5`
  font-size: 20px;
`;
export const IconCard = styled.span`
  font-size: 35px;
  position: relative;
`;
