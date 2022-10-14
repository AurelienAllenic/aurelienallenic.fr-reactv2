import React from 'react'
import {MainTitle} from "../../utils/styles/general"
import {SuperContainer, CardLeft, CardRight, MainTitleExp, InfoContainer, SecondInfoContainer, Info, SecondInfo} from "../../utils/styles/experience"
function Cards() {
  return (
    <>
    <MainTitle>Experience</MainTitle>
    <SuperContainer>
        <CardLeft>
            <MainTitleExp>Front-end Developpement</MainTitleExp>
            <InfoContainer>
                <Info>HTML</Info><Info>CSS</Info><Info>JavaScript</Info><Info>React</Info>
            </InfoContainer>
            <SecondInfoContainer>
                <SecondInfo>Experienced</SecondInfo><SecondInfo>Experienced</SecondInfo><SecondInfo>Intermediate</SecondInfo><SecondInfo>Intermediate</SecondInfo>
            </SecondInfoContainer>
            
        </CardLeft>
        <CardRight>
            <MainTitleExp>Back-end Developpement</MainTitleExp>
            <InfoContainer><Info>NodeJS</Info><Info>MongoDb</Info><Info>PHP</Info><Info>MySQL</Info></InfoContainer>
            <SecondInfoContainer>
                <SecondInfo>Intermediate</SecondInfo><SecondInfo>Intermediate</SecondInfo><SecondInfo>Novice</SecondInfo><SecondInfo>Novice</SecondInfo>
            </SecondInfoContainer>
        </CardRight>
    </SuperContainer>
    </>
  )
}

export default Cards