import React from 'react'
import Cards from './Cards'
import Form from './Form'
import { MainImage } from '../../utils/styles/general'
import Nav from "../nav/GeneralNav"
import {MainTitle} from "../../utils/styles/general"

function Contact() {
  return (
    <>
      <MainImage>
        <MainTitle>Contact</MainTitle>
        <Nav/>
        <Cards/>
        <Form/>
      </MainImage>
    </>
  )
}

export default Contact