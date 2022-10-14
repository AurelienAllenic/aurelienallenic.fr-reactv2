import React from 'react'
import {MainImage} from "../../utils/styles/general"
import Me from './Me'
import Choices from './Choices'
import Illustration from './Illustration'
import IconsContainer from "./Icons"
import {Section} from "../../utils/styles/general"
import Nav from "../nav/NavHomepage"

function HomePage(){
  return (
    <>
    <Section>
    <MainImage>
      <Nav></Nav>
      <Me />
      <Choices />
      <Illustration />
      <IconsContainer/>
    </MainImage>
    </Section>
    </>
  )
}

export default HomePage