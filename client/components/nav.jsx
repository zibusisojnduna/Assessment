import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket2 } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
export default function Navigation() {
  return (
<div className="w3-bar" style={{backgroundColor:"white", display:"flex", padding:"5%", justifyContent:"space-around", alignItems:"center",}}>
      <a href="/items" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoHome style={{fill:"#fb607f"}}/><br></br>Home</a><br></br>
      <a href="/favorites" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><FaRegHeart style={{fill:"#fb607f"}}/><br></br>Favorites</a>
      <a href="/cart" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><BsBasket2 style={{fill:"#fb607f"}}/><br></br>Cart</a>
      <a href="/additem" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><FaPlus style={{fill:"#fb607f"}}/><br></br>Add Item</a>
      <a href="/profile" className="w3-bar-item w3-button w3-mobile" style={{padding:"2%", textAlign:"center"}}><IoMdPerson style={{fill:"#fb607f"}}/><br></br>Profile</a>
    </div>  )
}
