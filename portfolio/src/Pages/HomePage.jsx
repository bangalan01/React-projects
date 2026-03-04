import React from 'react'
import Profile_img from '../assets/Profile_img.jpeg'



const HomePage = () => {
  return (
    <div className='Hero '>
      <img src={Profile_img} alt=""/>
      <h1 className='text-center'><span>I'm Sumikshya Parida ,</span>Fullstack Developer</h1>
     <p className='text-center'>Frontend Developer Fresher with knowledge of HTML, CSS, JavaScript, and React. Interested in creating responsive and interactive web applications. Quick learner and enthusiastic about modern UI development.</p>
     <div className="Hero-action text-center">
      <div className="Hero-connect">connect with me</div>
      <div className="Hero-resume">My resume</div>
     </div>
    </div>
  )
}

export default HomePage
