import React from 'react'
import build from '../../image/buildings.png'
import './Contact.css'

const Contact = () => {
  return (
    <div>
        <img src={build} alt=""  className='buildingimage'/>
        <div  className='divv'>
              <h1 className='text-orange-400 m-auto contactus'>CONTACT US </h1>
              <h1 className='text-black here'>We Are Here For You</h1>

              <form className='m-auto ml-72 mt-8' >
                <input type="text" placeholder='Name' className='input' />
                <input type="email" className='input' placeholder='Email'  /> <br />
                <input type="number" className='input' placeholder='Phone'/> 
                <input type="text"  placeholder='website' className='input' /> <br />
                <textarea name="" id="" cols="110" rows="10" className=''></textarea>
                <br />
                <button className='bg-orange-700 buttn' >SUBMIT</button>
              </form>

        </div>
    </div>
  )
}

export default Contact