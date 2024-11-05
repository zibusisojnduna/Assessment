import React from 'react'
import "../src/assets/w3.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../features/loginSlice'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const dispatch = useDispatch()
  
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginUser({ username, password}))
        .unwrap()
        .then(() => {
            navigate('/items')
        })
    }
  return (
    <section>
        <div style={{padding:"5%"}}>
            <h1>Login</h1>
            <p>Please enter the following details to login</p>
        </div>

        <form onSubmit={handleSubmit}>
        <div style={{padding:"5%"}}>
            <h2>Username</h2>
            <input className='w3-input' type="text" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} required/>
        </div>

        <div style={{padding:"5%"}}>
            <h2>Password</h2>
            <input className='w3-input' type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)}/>
        </div>

        <div style={{padding:"5%"}}>
            <button className='w3-button' style={{backgroundColor:"#fb607f"}}>Login</button>
            <p>Don't have an account? <Link to="/signup" color='#fb607f'>Sign Up</Link></p>
        </div>
        </form>
      
        
    </section>
  )
}
