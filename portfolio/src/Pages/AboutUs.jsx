import React from 'react'
import themepng from '../assets/themepng.png'
import Profile_img from '../assets/Profile_img.jpeg'


const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="About-title">
        <h1>About Me</h1>
        <img src={themepng} alt=""/>
      </div>
      <div className="About-Section">
        <div className="About-left">
          <img src={Profile_img} alt=""/>
        </div>
        <div className="About-right">
          <div className="About-para">
            <p>I am a passionate frontend developer skilled in HTML, CSS, JavaScript, and React, focused on creating responsive, user-friendly, and visually engaging web applications.</p>
            <p>I am full-stack developers building scalable, user-friendly web applications using modern frontend and backend technologies to deliver secure, high-performance digital solutions.</p>
          </div>
          <div className="About-skill">
          <div className="About-skills"><p>HTML & CSS</p><hr style={{ width: "70%" }}/></div>
           <div className="About-skills"><p>Bootstrap</p><hr style={{ width: "90%" }}/></div>
            <div className="About-skills"><p>JavaScript</p><hr style={{ width: "50%" }}/></div>
             <div className="About-skills"><p>React js</p><hr style={{ width: "65%" }}/></div>
             </div>
        </div>
      </div>
    </div>

  )
}

export default AboutUs
