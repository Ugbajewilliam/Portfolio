import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/me.png'

const Header = () => {
  return (
    
    <header>
      <div className='container header__container'>
      <h5>Hello i am</h5>
      <h1>Ugbaje William</h1>
      <h5 className='text-light'>Frontend developer</h5>
<CTA/>
<HeaderSocials/>

<div className='me'>
<img src={me} alt=''/>
</div>
<a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header