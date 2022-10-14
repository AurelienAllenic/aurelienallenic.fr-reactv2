import React from 'react'
import {ExperienceContainer, PersoContainer, TitleAbout, ProjectsContainer, SuperContainerAbout, Icon, TextAbout, Insist, MotivationContainer, MotivationText} from "../../utils/styles/about"
import {MainTitle} from "../../utils/styles/general"
import {FaMedal} from "react-icons/fa"
import {BsFillPersonFill} from "react-icons/bs"
import {FaFolderOpen} from "react-icons/fa"

function Me() {
  return (
    <>
    <MainTitle>About</MainTitle>
    <SuperContainerAbout>
        <ExperienceContainer>
        <Icon><FaMedal/></Icon>
            <TitleAbout>Experience</TitleAbout>
            <TextAbout><Insist>Etna :</Insist> piscine et suivi de la formation de septembre à février 2021/2022<br /><br /><Insist>Openclassrooms :</Insist> formation developpeur web démarrée le 22 fevrier 2022</TextAbout>
        </ExperienceContainer>
        <PersoContainer>
        <Icon><BsFillPersonFill/></Icon>
            <TitleAbout>Personnal Projects</TitleAbout>
            <TextAbout><Insist>aurelienallenic.fr :</Insist> site réalisé en react
            <br /><br /><Insist>paro75xx.com :</Insist> site réalisé avec un template envato<br /><br />
            <Insist>claquettes-swing.fr :</Insist> participation à la création et au déploiement</TextAbout>
        </PersoContainer>
        <ProjectsContainer>
        <Icon><FaFolderOpen/></Icon>
            <TitleAbout>Formation Projects</TitleAbout>
            <TextAbout><Insist>Projets JavaScript :</Insist> bac à sable<br /><br /><Insist>Projets de développement web d'openclassrooms:</Insist> HTML, CSS, JavaScript, SEO, NodeJs, MongoDb, ReactJs<br /><br /><Insist>Projets de création de sites vitrines</Insist> incluant du JS et du React</TextAbout>
        </ProjectsContainer>
    </SuperContainerAbout>
    <MotivationContainer>
      <MotivationText>Suite à l'obtention d'une licence à la <Insist>Sorbonne-nouvelle</Insist> et à ma reconversion dans le monde du développement, j'ai étudié à <Insist>l'ETNA</Insist> où j'ai pu suivre une <Insist>piscine</Insist> avant de m'autonomiser en choisissant de mener à bien une <Insist>formation de développeur web</Insist> chez <Insist>openclassrooms</Insist>. Je souhaite mener ma prochaine formation portant sur <Insist>React</Insist> en <Insist>alternance</Insist> et dans le futur, devenir <Insist>FullStack</Insist>, alliant <Insist>React</Insist> et <Insist>nodeJs</Insist>.</MotivationText>
      </MotivationContainer>
    </>
  )
}

export default Me