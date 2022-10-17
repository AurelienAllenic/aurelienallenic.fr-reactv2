import React from 'react'
import Cards from './Cards'
import Icons from '../homepage/Icons'
import {MainImageMediaInterests} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"

function Interests() {
  return (
    <>
    <MainImageMediaInterests>
        <Nav/>
        <Cards/>
        <Icons/>
    </MainImageMediaInterests>
    </>
  )
}

export default Interests