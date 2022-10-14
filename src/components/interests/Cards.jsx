import React from 'react'
import {MainTitle} from "../../utils/styles/general"
import {CardsContainer, Card, MainTitleCard, SecondTitleCard, IconCard} from "../../utils/styles/interests"
import {MdComputer} from "react-icons/md"
import {IoIosMusicalNotes} from "react-icons/io"
import {FaHandSparkles} from "react-icons/fa"
import {GiFist} from "react-icons/gi"
import {FaChessKnight} from "react-icons/fa"
import {BsFlagFill} from "react-icons/bs"
function Cards() {
  return (
    <>
    <MainTitle>Interests</MainTitle>
    <CardsContainer>
        <Card>
            <MainTitleCard>Programmation Informatique</MainTitleCard>
            <SecondTitleCard>Web, data, créativité</SecondTitleCard>
            <IconCard><MdComputer/></IconCard>
        </Card>
        <Card>
            <MainTitleCard>Piano</MainTitleCard>
            <SecondTitleCard>classique et compositions cinématographiques</SecondTitleCard>
            <IconCard><IoIosMusicalNotes/></IconCard>
        </Card>
        <Card>
            <MainTitleCard>Prestidigitation</MainTitleCard>
            <SecondTitleCard>Close up</SecondTitleCard>
            <IconCard><FaHandSparkles/></IconCard>
        </Card>
        <Card>
            <MainTitleCard>Arts martiaux</MainTitleCard>
            <SecondTitleCard>Fut Ga Quen Sil Lum, Judo, Wing Tsun</SecondTitleCard>
            <IconCard><GiFist/></IconCard>
        </Card>
        <Card>
            <MainTitleCard>échecs</MainTitleCard>
            <SecondTitleCard>pratique stratégique et intellectuelle</SecondTitleCard>
            <IconCard><FaChessKnight/></IconCard>
        </Card>
        <Card>
            <MainTitleCard>Langues</MainTitleCard>
            <SecondTitleCard>Anglais/Espagnol : B2 <br/>Japonais/Allemand: novice</SecondTitleCard>
            <IconCard><BsFlagFill/></IconCard>
        </Card>
    </CardsContainer>
    </>
  )
}

export default Cards