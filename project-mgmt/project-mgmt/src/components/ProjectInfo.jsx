import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const ProductInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects/${id}`) 
      .then((res) => res.json())
      .then((data) => setProject(data))
      .catch((err) => console.log(err));
  }, [id]);

    if (!project) return <h3>Loading...</h3>;

  return (
   
    <div className='div'>
      <h2>📁 Project Info</h2>

      <p><b>createdAt:</b> {project.createdAt}</p>
      <p><b>Details:</b> {project.Details}</p>
      <p><b>priority:</b> {project.priority}</p>
      <p><b>Department:</b> {project.Department}</p>
      <p><b>status:</b> {project.status}</p>

      <button className='btn' onClick={() => navigate("/")}>⬅ Back</button>
    </div>
    


  )
}

export default ProductInfo;;