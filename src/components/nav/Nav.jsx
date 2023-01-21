import React from 'react'
import "./nav.css";
import {FaHome} from 'react-icons/fa'
import {FaRegUserCircle} from "react-icons/fa"
import {RiBook3Line} from 'react-icons/ri'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageDetail} from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href=''><FaHome /></a>
      <a href='#about'><FaRegUserCircle /></a>
       <a href='#experience'><RiBook3Line /></a>
      <a href='#services'><RiServiceLine /></a>
      <a href='#contact'><BiMessageDetail /></a>

    </nav>
  )
}

export default Nav