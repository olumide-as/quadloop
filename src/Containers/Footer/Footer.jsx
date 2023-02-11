import React from 'react'
import "./Footer.css"
import { logo, fb, insta, linkedin } from '../../Assets'

const Footer = () => {

  const current = new Date();
  const date = current.getFullYear();

  return (
    <div className='content__padding quadloop__footer'>

      <div className='quadloop__footer_01'>
        <img src={logo} alt="Quadloop" />
        <p>Leveraging waste, creating value.</p>
        <p> &copy; {date}</p>
      </div>

      <div className='quadloop__footer_02'>
        <a href='#about'><p>About Us</p></a>
        <a href='#solutions'><p>Solutions</p></a>
        <a href='#impacts'><p>Impacts</p></a>
      </div>

      <div className='quadloop__footer_03'>
        <a href='#news'><p>News</p></a>
        <a href='#partners'><p>Partners</p></a>
        <a href='#contact'><p>Contact Us</p></a>
      </div>

      <div className='quadloop__footer_04'>
        <a href="https://www.facebook.com/quadloopcreations"><img src={fb} alt="Quadloop Facebook" /></a>
        <a href="https://www.instagram.com/quadloopcreate/"><img src={insta} alt="Quadloop Instagram" /></a>
        <a href="https://www.linkedin.com/company/quadloop-creations/"><img src={linkedin} alt="Quadloop Linkedin" /></a>

      </div>
    </div>
  )
}

export default Footer