import React, { useContext,useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { ThemeContext } from '../theme/ThemeProvider'

const Register = () => {
    const [userName, setUserName] = useState()
    const [email, setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate= useNavigate()

    
    const {Theme} = useContext(ThemeContext)


    const handleRegister = (event) =>{
        event.preventDefault()
        console.log("Registered")
        console.log(userName,password,email)
        const regUser ={
            name:userName, email:email, password:password
        }
        localStorage.setItem('userB69',JSON.stringify(regUser))
        navigate('/dashboard')
    }

    console.log(userName)

    return (
        <>
            <div className="container w-50 mx-auto mt-5">
                <h3>Register here</h3>

                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputName" className="form-label">User Name</label>
                        <input type="text" className="form-control" id="exampleInputName" 
                            onChange={(e)=>setUserName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" 
                        onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" 
                            onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    < div className='btn'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <Link to ='/dashboard' className='p-5'>If already registered</Link>
                 </div>
                </form>
            </div>
        </>
    )
}

export default Register