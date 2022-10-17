import React from 'react'
import Cards from './Cards'
import Form from './Form'
import Icons from '../homepage/Icons'
import { MainImageMediaContact } from '../../utils/styles/general'
import Nav from "../nav/GeneralNav"
import {MainTitle} from "../../utils/styles/general"

function Contact() {
  return (
    <>
      <MainImageMediaContact>
        <MainTitle>Contact</MainTitle>
        <Nav/>
        <Cards/>
        <Form/>
        <Icons/>
      </MainImageMediaContact>
    </>
  )
}

export default Contact