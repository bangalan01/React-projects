import React from 'react'
import themepng from '../assets/themepng.png'
import Myproject from '../Components/Myproject.jsx'
import { IoIosArrowDroprightCircle } from "react-icons/io";

function Projects () {
  return (
    <div className="Projects">
      <div className="Projects-title">
        <h1>My Projects</h1>
        <img src={themepng} alt=""/>
      </div>
      <div className="Myprojects-container">
         {Myproject.map(p=>(
          <img src={p.pimg} alt=".." />
         ))}
         <div className="Myprojects-showmore">
          <p>Show More
          <IoIosArrowDroprightCircle /> </p>
         </div>

      </div>
    </div>
  );
}

export default Projects;
