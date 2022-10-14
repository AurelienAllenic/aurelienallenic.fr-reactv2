import React from 'react'
import Cards from "./Cards"
import {MainImage} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"
function Portfolio() {
  return (
    <>
    <MainImage>
    <Nav/>
        <Cards/>
    </MainImage>
    </>
  )
}

export default Portfolio