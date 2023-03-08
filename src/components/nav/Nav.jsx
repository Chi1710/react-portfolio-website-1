import React from 'react'
import "./nav.css";
import {FaHome} from 'react-icons/fa'
import {FaRegUserCircle} from "react-icons/fa"
import {RiBook3Line} from 'react-icons/ri'
import {MdWorkOutline} from 'react-icons/md'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react';

const Nav = () => {
  
  const [activeNav, setActiveNav] = useState("#");

  return (

    <nav>
      <div> {// eslint-disable-next-line
      <a href='#' onClick={ () => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}>
          <FaHome />
          </a>
      }
      </div>

      <a href='#about'onClick={ () => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}>
        <FaRegUserCircle />
        </a>
       <a href='#experience' onClick={ () => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}>
        <RiBook3Line />
        </a>
      <a href='#portfolio'onClick={ () => setActiveNav('#portfolio')}
        className={activeNav === '#portfolio' ? 'active' : ''}>
        <MdWorkOutline/>
        </a>
      <a href='#contact'onClick={ () => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}>
        <BiMessageDetail />
        </a>

    </nav>
  )
}

export default Nav