import { computeHeadingLevel } from "@testing-library/react";
import styled from "styled-components";
import colors from "./colors";

export const PortfolioContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  text-align: center;
`;
export const ImagePortfolio = styled.img`
  width: 55%;
  height: 20vh;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 5px;
  border-radius: 30px 30px 30px 30px;
  &:hover {
    animation: changeSepia both 3s;
  }
  @keyframes changeSepia {
    25% {
    filter: sepia(20%);
  }
  50% {
    filter: sepia(40%);
  }
  75% {
    filter: sepia(60%);
  }
  100% {
    filter: sepia(70%);
  }
`;

export const TitlePortfolio = styled.h3`
  color: white;
  font-size: 22px;
`;
export const Button = styled.a`
  background-color: white;
  padding: 1rem;
  text-decoration: none;
  border-radius: 10px 10px 10px 10px;
  color: ${colors.primary};
  &:hover {
    background-color: ${colors.primary};
    color: white;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
`;
export const Article = styled.article`
  animation: fall 3s forwards;
  animation-delay: 0.7s;
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
