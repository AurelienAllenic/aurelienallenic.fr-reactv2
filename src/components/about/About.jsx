import React from 'react'
import {MainImageMedia} from "../../utils/styles/general"
import Nav from "../nav/GeneralNav"
import Me from "./Me"
import {Section} from "../../utils/styles/general"
import Icons from '../homepage/Icons'

function About() {
  return (
    <>
    <Section>
    <MainImageMedia>
    <Nav/>
        <Me />
        <Icons/>
    </MainImageMedia>
    </Section>
    </>
  )
}

export default About