import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaTwitter} from "react-icons/fa"
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
<a href='https://www.linkedin.com/in/ugbaje-william-05729422a/' target='blank'> <BsLinkedin/> </a>
<a href='https://twitter.com/ugbajewilliams' target='blank'> <FaTwitter/> </a>
<a href='https://github.com/' target='blank'> <BsGithub/> </a>

    </div>
  )
}

export default HeaderSocials