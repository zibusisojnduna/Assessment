import React from 'react'
import "../src/assets/w3.css"
export default function SignUp() {
  return (
    <section>
        <div>
            <h1>Sign Up</h1>
            <p>Please enter the following infromation</p>
        </div>

        <form>
        <div>
            <h2>Name</h2>
            <input className='w3-input' type='text' placeholder='Enter full name'></input>

            <h2>Enail Address</h2>
            <input className='w3-input' type='email' placeholder='Enter email address'></input>

            <h2>Password</h2>
            <input className='w3-input' type='password' placeholder='Enter password'></input>

            <h2>Confirm Password</h2>
            <input className='w3-input' type='password' placeholder='Confirm password'></input>

            <button className='w3-button' style={{backgroundColor:"#fb607f", margin:"2%"}}>Register</button>

        </div>
        </form>
       
    </section>
  )
}
