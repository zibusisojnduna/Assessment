import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

export default function Navigation() {
  return (
<div className="w3-bar" style={{backgroundColor:"white", display:"flex", padding:"5%", justifyContent:"space-around", alignItems:"center",}}>
      <a href="/" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoHome style={{color:"#0d4a75"}}/><br></br>Home</a><br></br>
      <a href="/accommodations" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><FaRegHeart style={{color:"#0d4a75"}}/><br></br>Accommodation</a>
      <a href="/login" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><BsBasket2 style={{color:"#0d4a75"}}/><br></br>Login</a>
      <a href="/signup" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><FaPlus style={{color:"#0d4a75"}}/><br></br>Sign Up</a>
      <a href="/profile" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoMdPerson style={{color:"#0d4a75"}}/><br></br>Profile</a>
    </div>  )
}
