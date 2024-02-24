import React from 'react'
import parkwithus from "../../../image/parkingwithus.jpg"
import "./workwithus.css"

export const Workwithus = () => {
  return (
    <div className='main'>
        <div className="imgdiv">
            <img src={parkwithus} alt="" className='size-100%  workwithus-img' />
        </div>
        <div className='details'>
            
        <h2 className='text-white size-6'>Work With Us</h2>

        </div>
    </div>
  )
}
