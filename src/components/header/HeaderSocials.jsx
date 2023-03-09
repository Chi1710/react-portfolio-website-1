import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {TfiGithub} from "react-icons/tfi"
import {GiFlowers} from "react-icons/gi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/chiyantse/' target="_blank"rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com/Chi1710' target="_blank" rel="noopener noreferrer"><TfiGithub /></a>
        <a href='https://www.chiyantse.com' target="_blank" rel="noopener noreferrer"><GiFlowers /></a>
    </div>
  )
}

export default HeaderSocials