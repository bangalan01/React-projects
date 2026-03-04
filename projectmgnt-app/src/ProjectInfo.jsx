import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProjectInfo = () => {
    const {id}= useParams();
    const navigate = useNavigate();
    const [project ,setProject] = useState(null);

    useEffect(()=>{
        fetch(`https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/${id}`)
        .then((res)=>res.json())
        .then((data)=>setProject(data))
        .catch ((err)=>console.log(err))
    },[id]);

    if(!project) return <h3>Loading...</h3>

  return (
    <div className='div'>
        <h2>🗂️project Info</h2>
        <p><b>CreatedAt:</b> {project.createdat}</p>
        <p><b>Datalist:</b> {project.Details}</p>
        <p><b>Priority:</b> {project.Priority}</p>
        <p><b>Department:</b> {project.Department}</p>
        <p><b>Status:</b> {project.Status}</p>

        <button className='btn' onClick={() => navigate("/")}>⟪back</button>
      
    </div>
  )
}

export default ProjectInfo
