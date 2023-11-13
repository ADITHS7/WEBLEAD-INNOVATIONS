import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <img src={logo} alt="" className="logo" />
        <div className="logo-desc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, fuga!
        </div>
           <hr className='line'></hr>
        <div className="social-icons">
          <Link rel='' ><i class="fa-brands fa-facebook"></i></Link>
          <Link rel='' ><i class="fa-brands fa-instagram"></i></Link>
          <Link rel='' ><i class="fa-brands fa-linkedin"></i></Link>
          <Link rel='' ><i class="fa-brands fa-whatsapp"></i></Link>
        </div>

      </div>
      <div className="footer-container">

      </div>
      <div className="footer-container">
        
      </div>
      <div className="footer-container">
        
      </div>
    </div>
  )
}

export default Footer