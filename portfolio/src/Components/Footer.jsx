import React from 'react'
import { FaUserTie } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <p>I am a passionate frontend developer skilled in HTML, CSS, JavaScript, and React, focused on creating responsive, user-friendly, and visually engaging web applications.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUserTie />
            <input type='email' placeholder='Enter your email'/>
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
    <div className="footer-bottom">
      <p className='footer-bottom-left'>@copySumikshya Parida . All rights</p>
      
    </div>
    </div>
  )
}

export default Footer
