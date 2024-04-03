import React, { useEffect, useState } from 'react'
import Searchbar from './Searchbar'
import './parking.css'
import axios from 'axios';
import { errorToast } from '../../Toast/toastify';
import { Link, useNavigate } from 'react-router-dom';
import companypic from "../../../image/Companypic.png"

const Companyparkarea = (id) => {


  const [refresh,setRefresh]=useState(true)

  const [securityData, setSecurityData] = useState([])


  useEffect(() => {
    const fetchSecurityProfile = async () => {


      try {

        const token = localStorage.getItem("securityToken")
        // console.log(securitytoken,"scurytytok ");
        const response = await axios.get(`http://localhost:5001/api/security/profile`, {
          headers: {
            Authorization: token

          }
        })
        console.log(response, "response");
        setSecurityData(response.data.users)
      } catch (error) {
        console.log(error);
        errorToast(error.response?.data?.message || error.message);
      }
    };
    fetchSecurityProfile()
  }, [refresh])

  const bookingASpace =async (index,companyid,block) => {
    // alert(index)
    // const fetchSecurityProfile = async () => {


      try {

        const token = localStorage.getItem("securityToken")
        // console.log(securitytoken,"scurytytok ");
       await axios.post(`http://localhost:5001/api/security/booking-space`, { indexOf: index,id:companyid,block }, {
          headers: {
            Authorization: token

          }
        })
        // console.log(response, "response");
        // setSecurityData(response.data.users)
        setRefresh(!refresh)
      } catch (error) {
        console.log(error);
        errorToast(error.response?.data?.message || error.message);
      }
    // }
  }
    return (
      //   <div className='containerrs'>
      // <img src={companypic} className='w-full h-full imgs' alt="" />
      //   <div className="desigsndiv"></div>

      //   <div className='searchbar'>
      //       <Searchbar/>
      //   </div>

      //   {companyData.length > 0 ? (
      //     companyData.map((item) => {
      //       return (
      //         <div  className='gridcontainer'>

      //         <div onClick={handleClick} className="companycard-details">
      //         <Link to={`/parkingspace/${item._id}`} state={item}>
      //           {item.companyName} <br />
      //           {item.companyAddress}
      //           </Link>

      //         </div>
      //         </div>
      //       );
      //     })
      //   ) : (
      //     <div>No companies found</div>
      //   )}

      // </div>

      <>


<div>
        {securityData?.length > 0 ? (
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
                <div className="bg-black w-full pb-4 pt-4 h-fit m flex flex-wrap justify-center">
                  {item.company[0].companyBlock.map(block => (
                    <div key={block.block} className='flex flex-wrap m-4 ml-8'>
                      {block.space.map((sp, index) => (
                        <p
                          key={index}
                          onClick={() => bookingASpace(index, item.company[0]._id, block.block)}
                          className={`w-[100px] h-[50px] rounded mx-3 my-1.5 ${sp ? 'bg-green-400' : 'bg-red-400'}`}
                        ></p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}

        </div>


      </>

    )
  }


  export default Companyparkarea