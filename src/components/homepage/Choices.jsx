import React from 'react'
import {CvLink, LetterLink, ContactLink} from "../../utils/styles/HomePage"
import CV from "../../assets/images/CV.pdf"
import Motivation from "../../assets/images/motivation.docx"

function Choices() {
  return (
    <>
        <CvLink href={CV} download>Download CV</CvLink>
        <LetterLink href={Motivation}>Motivation letter</LetterLink>
        <ContactLink href="/contact">Contact me</ContactLink>
    </>
  )
}

export default Choices