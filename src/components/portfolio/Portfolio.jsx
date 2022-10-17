import React from 'react'
import Cards from "./Cards"
import Icons from '../homepage/Icons'
import {MainImageMediaPortfolio} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"
function Portfolio() {
  return (
    <>
    <MainImageMediaPortfolio>
    <Nav/>
        <Cards/>
        <Icons/>
    </MainImageMediaPortfolio>
    </>
  )
}

export default Portfolio