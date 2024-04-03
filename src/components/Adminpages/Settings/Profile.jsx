import React, { useEffect, useState } from 'react'
import './Profile.css'
import admin from '../../../image/admins.jpeg'
import axios from 'axios'
import { errorToast } from '../../Toast/toastify'
import { useParams } from 'react-router-dom'

const Profile = () => {

const [adminData,setAdminData]=useState()

   useEffect(()=>{
    const fetchAdminProfile=async()=>{
       try{
         const response= await axios.get(`http://localhost:5001/api/admin/profile/${JSON.parse(localStorage.getItem("admins"))._id}`)
         setAdminData(response.data.users)

       }catch(error){
        errorToast(error.response.data.message || error.message)

       }
    }
     fetchAdminProfile();
   },[])
  return (
    <div className='profile'>
            <img src={admin} alt="" className='imgg' />
           
                <table key={adminData?._id} className='table text-white'>
                    <tr>
                        <td>{adminData?.name}</td>
                        <td>{adminData?.email}</td>
                    </tr>
                </table>
          
        </div>

  )
}

export default Profile