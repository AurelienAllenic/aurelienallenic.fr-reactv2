import styled from "styled-components";
import colors from "./colors";

export const SuperContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 70vh;
`;
export const CardsContainer = styled.div`
  width: 40%;
  margin-left: 150px;
  margin-top: 0px;
  @media (max-width: 2012px) {
    margin-top: 80px;
  }
  @media (max-width: 820px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 250px;
  }
`;
export const Card = styled.div`
  background-color: ${colors.primary};
  opacity: 0.8;
  color: white;
  margin-top: -10px;
  margin-bottom: 20px;
  padding: 3px;
  text-align: center;
  padding-bottom: 10px;
  border-radius: 15px 15px 15px 15px;
  &:hover {
    opacity: 1;
    background-color: white;
    color: ${colors.primary};
  }
  animation: fall 3s forwards;
  animation-delay: 0.5s;
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
export const MainTitleCards = styled.h1`
  font-size: 25px;
  padding: 5px;
`;
export const SecondTitleCards = styled.h2`
  font-size: 20px;
  padding: 3px;
`;
export const LinkCards = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    background-color: ${colors.primary};
    border-radius: 15px 15px 15px 15px;
    padding: 15px;
    color: white;
  }
`;
export const CardIcon = styled.div`
  font-size: 40px;
  padding-top: 3px;
`;
export const FormContainer = styled.div`
  width: 35%;
  position: absolute;
  left: 60%;
  top: 20%;
  animation: fall 3s forwards;
  animation-delay: 0.6s;
  opacity: 0;
  @media (max-width: 820px) and (max-height: 1180px) {
    width: 100%;
    left: 0%;
    top: 95%;
  }
  @media (max-width: 820px) and (max-height: 882px) {
    width: 100%;
    left: 0%;
    top: 130%;
  }
  @media (max-width: 768px) and (max-height: 1024px) {
    top: 115%;
  }
  @media (max-width: 768px) and (max-height: 882px) {
    top: 130%;
  }
  @media (max-width: 414px) and (max-height: 882px) {
    top: 130%;
  }
  @media (max-width: 414px) and (max-height: 736px) {
    top: 155%;
  }
  @media (max-width: 375px) and (max-height: 667px) {
    top: 170%;
  }
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
export const EntireForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const InputStyle = styled.input`
  background-color: ${colors.primary};
  opacity: 0.8;
  border: 1px solid white;
  padding: 25px;
  margin: 20px;
  border-radius: 15px 15px 15px 15px;
  &::placeholder {
    color: white;
    font-size: 25px;
    padding: 25px;
  }
  &:hover {
    opacity: 1;
    &::placeholder {
        color: ${colors.primary};
  }
`;
export const Textarea = styled.textarea`
  background-color: ${colors.primary};
  opacity: 0.8;
  border: 1px solid white;
  padding: 25px;
  margin: 20px;
  border-radius: 15px 15px 15px 15px;
  &::placeholder {
    color: white;
    font-size: 25px;
    padding: 25px;
  }
  &:hover {
    opacity: 1;
    &::placeholder {
        color: ${colors.primary};
  }
`;
export const SendButton = styled.button`
  background-color: ${colors.primary};
  opacity: 0.8;
  border: 1px solid white;
  padding: 25px;
  margin: 20px;
  color: white;
  font-size: 25px;
  border-radius: 15px 15px 15px 15px;
  &:hover {
    background-color: white;
    color: ${colors.primary};
    cursor: pointer;
  }
  &::placeholder {
    color: white;
    font-size: 25px;
    padding: 25px;
  }
`;
