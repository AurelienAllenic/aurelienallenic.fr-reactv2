import styled, { keyframes } from "styled-components";
import img from "../../assets/images/homepage.jpg";
import imgCV from "../../assets/images/photo-cv.webp";

//Main Component

export const MainImageHome = styled.div`
  background: url(${img}) no-repeat center/cover;
  height: 99.6vh;
  width: 100%;
`;

//Me Component

export const MainTitleMe = styled.h1`
  font-size: 65px;
  animation: fall 3s forwards;
  opacity: 0;
  @keyframes fall {
    0% {
      top: 40%;
      opacity: 0;
    }
    100% {
      top: 15%;
      opacity: 1;
    }
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
      top: 40%;
      opacity: 0;
    }
    100% {
      top: 15%;
      opacity: 1;
    }
  }
`;

export const MeContainer = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  }
`;

//export const buttonsChoice = styled.div``;

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
`;
export const LetterLink = styled.a`
  text-decoration: none;
  position: absolute;
  left: 43%;
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
  bottom: 2%;
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
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const MailContainer = styled.a`
  position: absolute;
  left: 6%;
  bottom: 2%;
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
    opacity: 0.3;
    cursor: pointer;
  }
`;

export const LinkedinContainer = styled.a`
  position: absolute;
  left: 10%;
  bottom: 2%;
  color: white;
  font-size: 35px;
  opacity: 0;
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
    opacity: 0.3;
    cursor: pointer;
  }
`;
