import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { errorToast } from '../Toast/toastify'

const SecurityProfile = () => {

    const [securityData,setSecurityData]=useState([])


    useEffect(()=>{
        const fetchSecurityProfile=async()=>{


            try{
        
                const token =localStorage.getItem("securityToken")
            // console.log(securitytoken,"scurytytok ");
            const response=await axios.get(`http://localhost:5001/api/security/profile`,{
               headers:{
                   Authorization:token

               } 
            })
            console.log(response,"response");
            setSecurityData(response.data.users)
        }catch(error){
            console.log(error);
            errorToast(error.response?.data?.message || error.message);
        }
        };
        fetchSecurityProfile()
    },[])
  return (
    <div>
            {securityData.length > 0 ? (
                <div>
                    <h2>Security Profile</h2>
                    {securityData.map((item, index) => (
                        <div key={index}>
                            <h3>Name: {item.name}</h3>
                            <p>Email: {item.email}</p>
                            <p>Address: {item.address}</p>
                            <p>Created At: {item.createdAt}</p>
                            <p>Worked By: {item.workedby}</p>
                            <p>Company Email: {item.company[0].companyEmail}</p>
                            <p>Company Password: {item.company[0].companyPassword}</p>
                            <p>Company Head: {item.company[0].companyHead}</p>
                            <p>Company Block: {item.company[0].companyBlock.map(block => `${block.block}: ${block.space}`).join(', ')}</p>
                            

                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
       
  )
}

export default SecurityProfile