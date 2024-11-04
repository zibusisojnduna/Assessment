import React from 'react'
import "../src/assets/w3.css"
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <section>
        <div style={{padding:"5%"}}>
            <h1>Login</h1>
            <p>Please enter the following details to login</p>
        </div>

        <div style={{padding:"5%"}}>
            <h2>Username</h2>
            <input className='w3-input' type="text" placeholder="Enter your username"/>
        </div>

        <div style={{padding:"5%"}}>
            <h2>Password</h2>
            <input className='w3-input' type="password" placeholder="Enter your password"/>
        </div>

        <div style={{padding:"5%"}}>
            <button className='w3-button' style={{backgroundColor:"#fb607f"}}>Login</button>
            <p>Don't have an account? <Link to="/signup" color='#fb607f'>Sign Up</Link></p>
        </div>
        
    </section>
  )
}
