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
`;
export const Card = styled.div`
  background-color: ${colors.primary};
  opacity: 0.8;
  color: white;
  margin: 20px;
  padding: 5px;
  text-align: center;
  padding-bottom: 15px;
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
  width: 30%;
  position: absolute;
  left: 60%;
  top: 20%;
  animation: fall 3s forwards;
  animation-delay: 0.6s;
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
export const EntireForm = styled.form`
  display: flex;
  flex-direction: column;
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
