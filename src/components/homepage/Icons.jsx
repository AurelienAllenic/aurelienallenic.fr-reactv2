import React from 'react'
import {FaGithub} from "react-icons/fa"
import {AiOutlineMail} from 'react-icons/ai'
import {BsLinkedin} from "react-icons/bs"
import {GithubContainer, MailContainer, LinkedinContainer} from "../../utils/styles/HomePage"

function Icons() {
  return (
    <>
    <GithubContainer href="https://github.com/AurelienAllenic?tab=repositories" target="_blank">
        <FaGithub/>
    </GithubContainer>
    <MailContainer href="mailto:aurelien.allenic@gmail.com" target="_blank">
        <AiOutlineMail/>
    </MailContainer>
    <LinkedinContainer href="https://www.linkedin.com/in/aur%C3%A9lien-allenic2000" target="_blank">
        <BsLinkedin/>
    </LinkedinContainer>
    </>
  )
}

export default Icons