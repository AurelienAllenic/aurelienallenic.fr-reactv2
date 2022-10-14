import React from 'react'
import {MainImage} from "../../utils/styles/general"
import Cards from './Cards'
import Nav from "../nav/GeneralNav"
import Icons from '../homepage/Icons'

function Experience() {
  return (
    <>
    <MainImage>
        <Nav/>
        <Cards/>
        <Icons/>
    </MainImage>
    </>
  )
}

export default Experience