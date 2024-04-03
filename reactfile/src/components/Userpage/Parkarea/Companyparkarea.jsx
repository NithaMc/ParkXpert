import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import './parking.css'
import axios from 'axios';
import { errorToast } from '../../Toast/toastify';
import { Link, useNavigate } from 'react-router-dom';
import companypic from "../../../image/Companypic.png"

const Companyparkarea = (id) => {
const [refresh,setRefresh]=useState()
const [companyData,setCompanyData]=useState([])
const navigate =useNavigate()
useEffect(()=>{

  const fetchCompanyData = async () => {
    try {
      const response = await axios.get(`http://localhost:5001/api/company/`,{
        // params:{
        //   id: fetchCompanyId
        // }
      })
      setCompanyData(response.data.data);
    } catch (error) {
      errorToast(error.response.data.message || error.message)

    }
  };

  fetchCompanyData();
}, [refresh]);

let handleClick=()=>{
  // navigate("/parkingspace")
  
}
return (
  <div className='containerrs'>
<img src={companypic} className='w-full h-full imgs' alt="" />
  <div className="desigsndiv"></div>

  <div className='searchbar'>
      <Searchbar/>
  </div>
  
  {companyData.length > 0 ? (
    companyData.map((item) => {
      return (
        <div  className='gridcontainer'>
          
        <div onClick={handleClick} className="companycard-details">
        <Link to={`/parkingspace/${item._id}`} state={item}>
          {item.companyName} <br />
          {item.companyAddress}
          </Link>
      
        </div>
        </div>
      );
    })
  ) : (
    <div>No companies found</div>
  )}

</div>

);
};


export default Companyparkarea