import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
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
      <h2 className="foot-sub-head">EXPLORE</h2>
      <div className="sub-child">
        
          <Link rel='' >About</Link>
          <Link rel='' >Meet our team</Link>
          <Link rel='' >Case stories</Link>
          <Link rel='' >Latest news</Link>
          <Link rel='' >Contact</Link>
        </div>
      </div>
      <div className="footer-container">
      <h2 className="foot-sub-head">CONTACT</h2>
      <div className="sub-child">
        
          <p>66 Road broklyn street </p>
          <a href=''>92########</a>
          <a href=''>needhelp@company.com</a>
        </div>
      
      </div>
      <div className="footer-container">
        
      </div>
      </div>
      <div className="footer-bottom">
      <div className="footer-bar">
        <div className="go-up">
        <i class="fa-solid fa-caret-up"></i>
        </div>
        <div className="copy-right">
        © Copyright 2023 by company.com
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer