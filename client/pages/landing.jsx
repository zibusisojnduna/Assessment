import React from 'react'
import { Link } from 'react-router-dom'
import "../src/assets/w3.css"


export default function Landing() {
  return (
    <section style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", margin:"5%"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column"}}>
            <h1>Welcome to LitsIt!</h1>
            <p>From shoes to clothes, LitsIt is the best place to buy and sell your favorite items.</p>
            <button className='w3-button' style={{backgroundColor:"#fb607f"}}><Link to="/login">Login</Link></button>
            </div>

            <div style={{backgroundImage:`url(${require('../src/assets/marcus-loke-xXJ6utyoSw0-unsplash.jpg')})`, backgroundSize:"cover", backgroundPosition:"center", height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center", margin:"5%"}}>

            </div>
    </section>
  )
}
