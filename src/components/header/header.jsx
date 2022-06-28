import React from 'react'
import './header.css'
import CTA from './CTA'
import marc from '../../assets/marc.png'
import HeaderSocials from './HeaderSocials'


function header() {
  return (
    <header>
     <div className="container header__container">
      <h5>Hello I am</h5>
      <h1>Marc Ouba</h1>
      <h5 className="text-light">Frontend Developer</h5>
      <CTA />
      <HeaderSocials />
      <div className="me">
      <img src={marc} alt="Me" />
      </div>
      <a href="#contact" className='scroll__down'>Scroll Down</a>
     </div>

    </header>
  )
}

export default header