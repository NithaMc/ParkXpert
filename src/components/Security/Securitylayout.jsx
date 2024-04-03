import React from "react"
import security from"../../image/security.jpg"
import "./security.css"
import { Link } from "react-router-dom"

export const Securitylayout = () => {
  return (
    <div className="mains">


        <img src={security} alt=""  className="w-full h-full securityimage"/>
<div className="navss  flex">

<h1 className="h1"><a href="/parkingarea">Check company parkingareas</a></h1>

<h1 className="h1"> <a href="/securityprofile">Security Profile</a></h1>
{/* <a href="#" className='text'>Home</a>
      <a href="/about" className='text'>About</a>
      <a href="/services" className='text'>Services</a>
      <a href="/contact" className='text'>Contact</a> */} 

</div>
        
    </div>
  )
}
