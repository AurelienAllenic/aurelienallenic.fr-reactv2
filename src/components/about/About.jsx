import React from 'react'
import {MainImageAbout} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"
import Me from "./Me"
import {Section} from "../../utils/styles/general"
import Icons from '../homepage/Icons'

function About() {
  return (
    <>
    <Section>
    <MainImageAbout>
    <Nav/>
        <Me />
        <Icons/>
    </MainImageAbout>
    </Section>
    </>
  )
}

export default About