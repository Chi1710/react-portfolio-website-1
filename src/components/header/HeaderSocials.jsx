import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {TfiGithub} from "react-icons/tfi"
import {GiFlowers} from "react-icons/gi"

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedin.com' target="_blank"rel="noopener noreferrer"><BsLinkedin /></a>
        <a href='https://github.com' target="_blank" rel="noopener noreferrer"><TfiGithub /></a>
        <a href='https://www.chiyantse.com' target="_blank" rel="noopener noreferrer"><GiFlowers /></a>
    </div>
  )
}

export default HeaderSocials