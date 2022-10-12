import React from 'react'
import styled from 'styled-components'
import {CvLink, LetterLink, ContactLink} from "../utils/styles/HomePage"
import CV from "../assets/images/CV.pdf"
import Motivation from "../assets/images/motivation.docx"

function Choices() {
  return (
    <buttonsChoice>
        <CvLink href={CV} download>Download CV</CvLink>
        <LetterLink href={Motivation}>Download Motivation letter</LetterLink>
        <ContactLink href="#contact">Contact me</ContactLink>
    </buttonsChoice>
  )
}

export default Choices