import React from 'react'
import { useState } from 'react'
import './Nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {BiCodeAlt} from "react-icons/bi"
import {AiOutlinePhone} from "react-icons/ai"


const Nav = () => {
  const [activeNow, setActiveNow] = useState('#')
  return (
    <nav>
      <a href='#' onClick={()=> setActiveNow("#")} className={activeNow === '#' ? 'active': ''}> <AiOutlineHome/> </a>
      <a href='#about' onClick={()=> setActiveNow("#About")}  className={activeNow === '#About' ? 'active': ''}> <AiOutlineUser/> </a>
      <a href='#experience' onClick={()=> setActiveNow("#experience")} className={activeNow === '#experience' ? 'active': ''}> <BiBook/> </a>
      <a href='#portfolio' onClick={()=> setActiveNow("#portfolio")} className={activeNow === '#portfolio' ? 'active': ''}> <BiCodeAlt/> </a>
      <a href='#contact' onClick={()=> setActiveNow("#contact")} className={activeNow === '#contact' ? 'active': ''}> <AiOutlinePhone /> </a>
    </nav>
  )
}

export default Nav