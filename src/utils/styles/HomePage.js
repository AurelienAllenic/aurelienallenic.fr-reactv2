import styled from "styled-components";
import imgCV from "../../assets/images/photo-cv.webp";
import colors from "./colors";

//Me Component

export const MainTitleMe = styled.h1`
  font-size: 65px;
  animation: fall 3s forwards;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 520px) {
    font-size: 40px;
  }
  @media (max-width: 414px) {
    font-size: 35px;
  }
`;

export const SecondTitleMe = styled.h2`
  font-size: 35px;
  margin-top: 0px;
  opacity: 0;
  animation: fall 3s forwards;
  animation-delay: 0.2s;
  @keyframes fall {
    0% {
      top: 30%;
      opacity: 0;
    }
    100% {
      top: 10%;
      opacity: 1;
    }
  }
  @media (max-width: 520px) {
    font-size: 28px;
  }
  @media (max-width: 414px) {
    font-size: 25px;
  }
`;

export const MeContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const CvLink = styled.a`
  text-decoration: none;
  position: absolute;
  left: 30%;
  padding: 20px;
  border-radius: 15px 15px 15px 15px;
  background-color: black;
  color: white;
  font-weight: 600;
  opacity: 0.8;
  font-size: 20px;
  animation: fall 3s forwards;
  animation-delay: 0.3s;
  opacity: 0;
  margin: 0px;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 1690px) {
    left: 25%;
    font-size: 18px;
  }
  @media (max-width: 1128px) {
    left: 22%;
  }
  @media (max-width: 1067px) {
    left: 18%;
  }
  @media (max-width: 600px) {
    margin-right: 15px;
    padding: 10px;
  }
  @media (max-width: 520px) {
    left: 12%;
  }
  @media (max-width: 842px) {
    left: 15%;
  }
  @media (max-width: 820px) {
    left: 8%;
    font-size: 18px;
  }
  @media (max-width: 414px) {
    left: 17%;
    top: 27%;
    font-size: 15px;
  }
  @media (max-width: 375px) {
    left: 10%;
  }
`;
export const LetterLink = styled.a`
  text-decoration: none;
  position: absolute;
  left: 45%;
  padding: 20px;
  border-radius: 15px 15px 15px 15px;
  background-color: black;
  color: white;
  font-weight: 600;
  opacity: 0.8;
  font-size: 20px;
  animation: fall 3s forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 1496px) {
    left: 44%;
  }
  @media (max-width: 1128px) {
    left: 41%;
  }
  @media (max-width: 600px) {
    left: 35%;
    padding: 10px;
  }
  @media (max-width: 842px) {
    left: 35%;
  }
  @media (max-width: 820px) {
    left: 35%;
  }
  @media (max-width: 520px) {
    top: 27%;
    left: 32%;
  }
  @media (max-width: 414px) {
    left: 52%;
    font-size: 15px;
  }
  @media (max-width: 375px) {
    left: 55%;
  }
`;
export const ContactLink = styled.a`
  text-decoration: none;
  position: absolute;
  left: 62%;
  padding: 20px;
  border-radius: 15px 15px 15px 15px;
  background-color: black;
  color: white;
  font-weight: 600;
  font-size: 20px;
  animation: fall 3s forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:hover {
    background-color: white;
    color: black;
    border: none;
    cursor: pointer;
  }
  @media (max-width: 1690px) {
    left: 67%;
    font-size: 18px;
  }
  @media (max-width: 1128px) {
    left: 65%;
  }
  @media (max-width: 1067px) {
    left: 70%;
  }
  @media (max-width: 600px) {
    margin-left: 15px;
    padding: 10px;
  }
  @media (max-width: 820px) {
    left: 70%;
    font-size: 18px;
  }
  @media (max-width: 414px) {
    left: 33%;
    top: 34%;
    font-size: 15px;
  }
  @media (max-width: 375px) {
    left: 30%;
    top: 35%;
  }
`;
export const ImageContainer = styled.div`
  background: linear-gradient(black, transparent);
  width: 25%;
  height: 500px;
  position: absolute;
  left: 38%;
  top: 40%;
  border-radius: 15px 15px 15px 15px;
  border: 1px solid white;
  animation: fall 2s forwards;
  animation-delay: 0.4s;
  opacity: 0;
  @keyframes fall {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media (max-width: 1496px) {
    height: 400px;
    top: 45%;
  }
  @media (max-width: 1128px) {
    height: 300px;
    top: 45%;
  }
  @media (max-width: 940px) {
    height: 250px;
  }
  @media (max-width: 820px) {
    height: 20vh;
    left: 36%;
  }
  @media (max-width: 414px) {
    height: 15vh;
    top: 45%;
  }
  @media (max-width: 375px) {
    top: 43%;
  }
`;
export const ImageMe = styled.div`
  background: url(${imgCV}) no-repeat center/cover;
  height: 100%;
  width: 90%;
  position: relative;
  left: 5%;
  opacity: 1;
  animation: fall 3s forwards;
  animation-delay: 0.4s;
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
export const GithubContainer = styled.a`
  position: absolute;
  left: 2%;
  top: 2%;
  color: white;
  font-size: 35px;
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
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 582px) {
    font-size: 20px;
  }
  @media (max-width: 414px) {
    top: 1%;
  }
  @media (max-width: 375px) {
    font-size: 25px;
  }
`;

export const MailContainer = styled.a`
  position: absolute;
  left: 6%;
  top: 2%;
  color: white;
  font-size: 35px;
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
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 940px) {
    left: 8%;
  }
  @media (max-width: 632px) {
    left: 10%;
  }
  @media (max-width: 582px) {
    left: 2%;
    top: 10%;
    font-size: 20px;
  }
`;

export const LinkedinContainer = styled.a`
  position: absolute;
  left: 10%;
  top: 2%;
  color: white;
  font-size: 35px;
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
  &:hover {
    color: ${colors.primary};
  }
  @media (max-width: 940px) {
    left: 14%;
  }
  @media (max-width: 632px) {
    left: 18%;
  }
  @media (max-width: 582px) {
    left: 2%;
    top: 6%;
    font-size: 20px;
  }
`;
