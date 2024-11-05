import React from 'react'
import "../src/assets/w3.css"
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../features/registerSlice'
import { useNavigate } from 'react-router-dom'


export default function SignUp() {
  const dispatch = useDispatch()
  const { loading, error} = useSelector(state => state.register)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    try {
      const user = await signUp(email, password);
      await addUserToFirestore(user); 
      console.log("User signed up and added to Firestore", user);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <section>
        <div>
            <h1>Sign Up</h1>
            <p>Please enter the following infromation</p>
        </div>

        <form onSubmit={handleSubmit}>
        <div>
            <h2>Name</h2>
            <input className='w3-input' type='text' placeholder='Enter full name' onChange={(e) => setName(e.target.value)} required></input>

            <h2>Enail Address</h2>
            <input className='w3-input' type='email' placeholder='Enter email address' onChange={(e) => setEmail(e.target.value)} required></input>

            <h2>Select Username</h2>
            <input className='w3-input' type='text' placeholder='Choose a username' onChange={(e) => setUsername(e.target.value)} required></input>

            <h2>Password</h2>
            <input className='w3-input' type='password' placeholder='Enter password' onChange={(e) => setPassword(e.target.value)} required></input>

            <h2>Confirm Password</h2>
            <input className='w3-input' type='password' placeholder='Confirm password' onChange={(e) => setConfirmPassword(e.target.value)} required></input>

            <button className='w3-button' style={{backgroundColor:"#fb607f", margin:"2%"}}>Register</button>

        </div>
        </form>
       
    </section>
  )
}
