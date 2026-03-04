import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   const [projects, setProjects] = useState([])
   const navigate = useNavigate();
   const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000) // seconds → ms
  return date.toLocaleDateString()
  
}


   async function fetchProjects() {
    const res =  await axios.get("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects")
    console.log(res.data)
    setProjects(res.data)
    console.log(projects)
    // Logic to fetch projects from an API or database
   }
  
   useEffect(() => {
    fetchProjects()
   }, [])



  return (
    <div className="page">
<table className="project-table">
  <thead>
    <tr className='tr'>
      <th>ID</th>
      <th>Project Name</th>
      <th>Start Date</th>
      <th>End Date</th>
      <th>Get More Info</th>
     
    </tr>
  </thead>

  <tbody>
    {projects.map((project, index) => (
    
      <tr key={project.id}>
        <th>{index + 1}</th>
        <td>{project.ProjectName}</td>
        <td>{formatDate(project.startDate)}</td>
        <td>{formatDate(project.EndDate)}</td>
        <td>
           <button className='btn'
                  onClick={() => navigate(`/project/${project.id}`)}
                >
                  View
                </button>
        </td>
       
      </tr>
      
    ))}
  </tbody>
</table>


  </div>  
  )
}
export default Dashboard