import React from 'react'
import './footer_bottom.css'
import Instagram from '../../assets/instagram.png'
import Github from '../../assets/github.png'
import Linkedin from '../../assets/linkedin.png'
import Logo from '../../assets/logo.png'

const Footer_Bottom = () => {
  return (
    <div className='bottom_footer'>
      <hr/>
      <div className='footer_icons'>
        <div className='social_links'>
            <img src={Instagram} alt="error loading" />
            <img src={Linkedin} alt="error loading" />
            <img src={Github} alt="error loading" />
        </div>
        <div className='footer_logo'>
           <img src={Logo} alt="error loading" />
        </div>
      </div>

      <div className='blur blur-bottom-footer-1'></div>
      <div className='blur blur-bottom-footer-2'></div>
    </div>
  )
}

export default Footer_Bottom
