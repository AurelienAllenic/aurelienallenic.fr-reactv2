import React from 'react'
import {NavContainerLeft, NavContainerRight, HomeButton, AboutButton, ExperienceButton, PortfolioButton, InterestsButton, ContactButton} from "../../utils/styles/navGeneral"
import {AiOutlineHome} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"
import {BsFillBookmarkStarFill} from "react-icons/bs"
import {FaFolderOpen} from "react-icons/fa"
import {RiHeartAddFill} from "react-icons/ri"
import {BsFillChatDotsFill} from "react-icons/bs"

function NavHomepage() {
  return (
    <>
    <NavContainerLeft>
        <HomeButton href='/'><AiOutlineHome/> Home</HomeButton>
        <AboutButton href='/about'><BsFillPersonFill/> About</AboutButton>
        <ExperienceButton href='/experience'><BsFillBookmarkStarFill/> Experience</ExperienceButton>
    </NavContainerLeft>
    <NavContainerRight>
        <PortfolioButton href='/portfolio'><FaFolderOpen/> Portfolio</PortfolioButton>
        <InterestsButton href='/interests'><RiHeartAddFill/> Interests</InterestsButton>
        <ContactButton href='/contact'><BsFillChatDotsFill/> Contact</ContactButton>
    </NavContainerRight>
    </>
  )
}

export default NavHomepage