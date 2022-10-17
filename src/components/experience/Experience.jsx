import React from 'react'
import {MainImageMediaEXP} from "../../utils/styles/general"
import Cards from './Cards'
import Nav from "../nav/GeneralNav"
import Icons from '../homepage/Icons'

function Experience() {
  return (
    <>
    <MainImageMediaEXP>
        <Nav/>
        <Cards/>
        <Icons/>
    </MainImageMediaEXP>
    </>
  )
}

export default Experience