import React from 'react'
import themepng from '../assets/themepng.png'
import { IoIosMailOpen } from "react-icons/io";
import { GrMapLocation } from "react-icons/gr";
import { MdPhoneCallback } from "react-icons/md";


const ContactUs = () => {
  return (
      <div className="ContactUs">
        <div className="Contact-title">
          <h1>Contact Me</h1>
          <img src={themepng} alt=''/>
        </div>
        <div className="Contact-section">
          <div className="Contact-left">
            <h1>Let's talk</h1>
            <p>I'm currently avaliable to make on new projects, so feel free  to send me messsage about anything that you want me to work on . you can contact anytime .</p>
             <div className="Contact-details">
              <div className="Contact-detail">
                <IoIosMailOpen />
                <p>Paridakhuso01@gmail.com</p>
              </div>
              <div className="Contact-detail">
                 <MdPhoneCallback />
                <p>+91 77892-64820</p>
              </div>
              <div className="Contact-detail">
                 <GrMapLocation />
                <p>Rorkela,Odisha</p>
              </div>
             </div>
          </div>
          <form className='Contact-right'>
            <label htmlFor=''>Your Name</label>
            <input type='text'placeholder='Enter Your Name'name='name'/>
             <label htmlFor=''>Your Email</label>
            <input type='email'placeholder='Enter Your email'name='email'/>
             <label htmlFor=''>Write Your Message Here</label>
            <textarea name='message' rows={5} placeholder='Enter Your Message'></textarea>
            <button type='Submit' className='Contact-submit'>Submit Now</button>
          </form>
        </div>
      </div>
    
  )
}

export default ContactUs
