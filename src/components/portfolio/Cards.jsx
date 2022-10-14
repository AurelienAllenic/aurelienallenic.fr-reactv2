import React from 'react'
import Booki from '../../assets/images/booki.webp'
import Ohmyfood from '../../assets/images/ohmyfood.jpg'
import Lapanthere from '../../assets/images/lapanthere.jpg'
import Kanap from '../../assets/images/kanap.webp'
import Piiquante from '../../assets/images/piiquante.webp'
import Groupomania from '../../assets/images/groupomania.webp'
import{PortfolioContainer, ImagePortfolio, TitlePortfolio, Button, ButtonsContainer, Article} from "../../utils/styles/portfolio"
import {MainTitle} from "../../utils/styles/general"
const data = [
    {
      id: 1, 
      image: Booki,
      title: 'Booki, projet de réservation hôtelier',
      github: 'https://github.com/AurelienAllenic/Booki',
      demo: 'https://aurelienallenic.github.io/Booki/'
    },
    {
      id: 2, 
      image: Ohmyfood,
      title: 'Ohmyfood, projet de commande de restaurants gastronomiques',
      github: 'https://github.com/AurelienAllenic/AurelienAllenic.github.io',
      demo: 'https://aurelienallenic.github.io/ohmyfood.github.io/'
    },
    {
      id: 3, 
      image: Lapanthere,
      title: 'Lapanthere, site de web design basée à Lyon',
      github: 'https://github.com/AurelienAllenic/lapanthere.github.io',
      demo: 'https://aurelienallenic.github.io/lapanthere.github.io/'
    },
    {
      id: 4, 
      image: Kanap,
      title: 'Kanap, site e-commerce en javaScript',
      github: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms',
      demo: 'https://github.com/AurelienAllenic/kanap-p5-openclassrooms'
    },
    {
      id: 5, 
      image: Piiquante,
      title: 'Hot-takes, api de like et partage de sauces pimentées',
      github: 'https://github.com/AurelienAllenic/hot-takes',
      demo: 'https://github.com/AurelienAllenic/hot-takes'
    },
    {
      id: 6, 
      image: Groupomania,
      title: "Groupomania, réseau social d'entreprise",
      github: 'https://github.com/AurelienAllenic/groupomania/tree/develop',
      demo: 'https://github.com/AurelienAllenic/groupomania/tree/develop'},
  
  ]

function Cards() {
  return (
    <>
    <MainTitle>Portfolio</MainTitle>
    <PortfolioContainer>    {
        data.map(({id, image, title, github, demo}) =>{
          return(
          <Article key={id}>
            <ImagePortfolio src={image} alt={title}/>
            <TitlePortfolio>{title}</TitlePortfolio>
        <ButtonsContainer>
            <Button href={github} rel="noreferrer" target='_blank'>Github</Button>
            <Button href={demo} rel="noreferrer" target='_blank'>Live Demo</Button>
        </ButtonsContainer> 
       </Article>
       )
        })
      }
    </PortfolioContainer>
    </>
  )
}

export default Cards