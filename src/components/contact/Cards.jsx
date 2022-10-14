import React from 'react'
import {SuperContainer, CardsContainer, Card, MainTitleCards, SecondTitleCards, LinkCards, CardIcon} from "../../utils/styles/contact";
import {AiOutlineMail} from "react-icons/ai"
import {BsChatText, BsWhatsapp} from "react-icons/bs"
function Cards() {
  return (
    <>
    <SuperContainer className='grid-2'>
      <CardsContainer className='grid3-column'>
        <Card className='Card-email'>
        <CardIcon><AiOutlineMail/></CardIcon>
          <MainTitleCards>Email</MainTitleCards>
            <SecondTitleCards>aurelien.allenic@gmail.com</SecondTitleCards>
              <LinkCards href="mailto:aurelien.allenic@gmail.com" target='_blank' rel="noreferrer">Send a message</LinkCards>
        </Card>
        <Card className='Card-messenger'>
        <CardIcon><BsChatText/></CardIcon>
          <MainTitleCards>Messenger</MainTitleCards>
            <SecondTitleCards>Allenic Aurélien</SecondTitleCards>
              <LinkCards href="https://www.facebook.com/profile.php?id=100008646846896" target='_blank' rel="noreferrer">Send a message</LinkCards>
        </Card>
        <Card className='Card-WhatsApp'>
        <CardIcon><BsWhatsapp/></CardIcon>
          <MainTitleCards>WhatsApp</MainTitleCards>
          <SecondTitleCards>Allenic Aurélien</SecondTitleCards>
              <LinkCards href="https://wa.me/33783013682" target='_blank' rel="noreferrer">Send a message</LinkCards>
        </Card>
      </CardsContainer>
    </SuperContainer>
    </>
  )
}

export default Cards