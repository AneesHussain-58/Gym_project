import React from 'react'
import './header.css'
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div className='header'>
      <img src={logo} className="logo"/>

      <ul className='header-top_menu'>
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  )
}

export default Header
