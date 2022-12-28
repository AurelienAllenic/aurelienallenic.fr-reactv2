import React from 'react'
import { NavHomeLeft, NavHomeRight, Button } from "../../utils/styles/nav"
import { AiOutlineHome } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { BsFillBookmarkStarFill } from "react-icons/bs"
import { FaFolderOpen } from "react-icons/fa"
import { RiHeartAddFill } from "react-icons/ri"
import { BsFillChatDotsFill } from "react-icons/bs"

function NavHomepage() {
  return (
    <>
      <NavHomeLeft>
        <Button href='/'><AiOutlineHome /> Home</Button>
        <Button href='/about'><BsFillPersonFill /> About</Button>
        <Button href='/experience'><BsFillBookmarkStarFill /> Experience</Button>
      </NavHomeLeft>
      <NavHomeRight>
        <Button href='/portfolio'><FaFolderOpen /> Portfolio</Button>
        <Button href='/interests'><RiHeartAddFill /> Interests</Button>
        <Button href='/contact'><BsFillChatDotsFill /> Contact</Button>
      </NavHomeRight>
    </>
  )
}

export default NavHomepage