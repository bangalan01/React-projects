import React, { useState } from 'react'

const RegisterFrom = () => {
    const[from,setFrom]=useState({name:"", email:""})

    const handleChange=(e) =>{
        const{name,value} =e.target;
        setFrom((prevForm)=>({
            ...prevForm,[name]:value,
        }))
    }

    const handleSubmit=(e)=>{
        e.preventDeafault();
        console.log(from);
    }
  return (
    <form>
      <h2>Register</h2>
      <input type ='text' name='name' placeholder='Enter name' value={from.name} onChange={handleChange}/>
            <input type ='email' name='email' placeholder='Enter email'value={from.email}onChange={handleChange}/>
            <button type='submit'>submit</button>
    </form>
  )
}

export default RegisterFrom
