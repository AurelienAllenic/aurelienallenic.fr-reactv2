import React from 'react'
import {MainImageHome} from "../../utils/styles/HomePage"
import Me from './Me'
import Choices from '../Choices'
import Illustration from './Illustration'
import IconsContainer from "./Icons"

function HomePage(){
  return (
    <>
    
    <MainImageHome>
      <Me />
      <Choices />
      <Illustration />
      <IconsContainer/>
    </MainImageHome>
    
    </>
  )
}

export default HomePage