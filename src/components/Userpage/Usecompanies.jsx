
import  React, { useEffect, useState } from 'react'
import Searchbar from './Parkarea/Searchbar'
import './Parkarea/parking.css'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import companypic from "../../image/Companypic.png"
import { FaSearch } from 'react-icons/fa';
import { errorToast } from '../Toast/toastify';


const Usecompanies = (id) => {

    const [refresh,setRefresh]=useState(true)
  const [searchQuery,setSearchQuery]=useState('')
    const [companyData, setCompanyData] = useState([])
  
  
    useEffect(() => {
      const fetchSecurityProfile = async () => {
  
  
        try {
  
        //   const token = localStorage.getItem("usertoken")
          // console.log(securitytoken,"scurytytok ");
          const response = await axios.get(`http://localhost:5001/api/company/`, {
            // headers: {
            //   Authorization: token
  
            // }
          })
          console.log(response, "response");
          setCompanyData(response.data.data)
        } catch (error) {
          console.log(error);
          errorToast(error.response?.data?.message || error.message);
        }
      };
      fetchSecurityProfile()
    }, [refresh])

    console.log(searchQuery,"searchquery");
    const filteredCompanyData=companyData.filter((item)=>
    item.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    console.log('filteredCompanyData:', filteredCompanyData);
    //   // alert(index)
    //   // const fetchSecurityProfile = async () => {
  
  
    //     try {
  
    //       const token = localStorage.getItem("securityToken")
    //       // console.log(securitytoken,"scurytytok ");
    //      await axios.post(`http://localhost:5001/api/security/booking-space`, { indexOf: index,id:companyid,block }, {
    //         headers: {
    //           Authorization: token
  
    //         }
    //       })
    //       // console.log(response, "response");
    //       // setSecurityData(response.data.users)
      //       setRefresh(!refresh)
    //     } catch (error) {
    //       console.log(error);
    //       errorToast(error.response?.data?.message || error.message);
    //     }
    //   // }
    // }


  return (
    <>
<div>Usecompanies</div>  



        <div className='containerrs'>
      <img src={companypic} className='w-full h-full imgs' alt="" />
        <div className="desigsndiv"></div>

        <div className='searchbar flex flex-wrap'>
        <FaSearch id='search-icon' />
        <input
            type='text'
            placeholder='type to search'
            className='input'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {filteredCompanyData.length > 0 ? (
            filteredCompanyData.map((item) => {
            return (
              <div  key={item._id}  className='gridcontainer'>

              <div className="companycard-details">
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
              </>
  )  
}  

    export default Usecompanies