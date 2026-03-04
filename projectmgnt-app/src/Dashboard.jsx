import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const[projects,setprojects]= useState([])
  const navigate =useNavigate();
  const formatDate =(timestamp)=>{
    const date= new Date(timestamp * 1000)
    return date.toLocaleDateString()
  }
 

  async function fetchprojects(){
  const res = await axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
   console.log(res.data)
   setprojects(res.data)
   console.log(projects)
  
  }

useEffect(()=>{
    fetchprojects()
    
},[])

return(
  <div className='page'>
    <h1>Project Mangnment Data Table</h1>
    <table className='project-table'>
      <thead>
        <tr className='tr'>
          <th>ID</th>
            <th>Projects name</th>
            <th>StartDate</th>
            <th>EndDate</th>
            <th>Get More Info</th>
        </tr>
      </thead>
      <tbody>
        {
           projects.map((project,index)=>(
            <tr key={project.id}>
              <th>{index+1}</th>
              <td>{project.ProjectName}</td>
              <td>{formatDate.StartDate}</td>
              <td>{formatDate.EndDate}</td>
              <td>
                <button className="btn"
                onClick={()=>navigate(`/project/${project.id}`)}>
                  view
                  </button>
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
)


}

export default Dashboard
