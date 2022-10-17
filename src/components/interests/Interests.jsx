import React from 'react'
import Cards from './Cards'
import {MainImageMediaInterests} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"

function Interests() {
  return (
    <>
    <MainImageMediaInterests>
        <Nav/>
        <Cards/>
    </MainImageMediaInterests>
    </>
  )
}

export default Interests