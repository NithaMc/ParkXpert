import React, { useEffect, useState } from 'react'
import '../Company/company.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { errorToast } from '../../Toast/toastify';


const Viewagency = () => {
  const [agencyData, setAgencyData] = useState(['']);
  const [refresh,setRefresh]=useState(true)


  const navigate = useNavigate();


  useEffect(() => {
    const fetchAgencyData = async () => {
      try {

        const response = await axios.get(`http://localhost:5001/api/agency/`)
        setAgencyData(response.data.users)
        console.log(response);
      } catch (error) {
        errorToast(error.response.data.message ||error.message)
        console.log(error);
      }
    }

    fetchAgencyData()
  }, [refresh])



  let handler = () => {
    navigate('Agency/createagency')
  }
  return (
    <div className='p-10'>
    
  <div className='view p-10'>
    <h2>AGENCIES</h2>



      {agencyData.map((item) => (
          <div className="mapdetails flex gap-4 box-border ">
          <h2 className='heading '> Agency name
           <p className='para'>{item.agencyName}</p>
           </h2>
           <h2 className='heading '> Address
           <p className='para'>{item.agencyDetails}</p>
             </h2>  
           <h2 className='heading '>Head
           <p className='para'>{item.agencyManager}</p>
           </h2>
           {/* <h2 className='heading '>Block
           <p className='para'>{item.companyBlock}</p>
           </h2>
           <h2 className='heading '>Space
           <p className='para'>{item.companySpace}</p>
           </h2> */}
           <div className='buttons flex'>

           

           <button className='text-red dltbtn'>delete</button> <br />
           <button className='dltbtn'>Edit</button>
           </div>
           {/* <p>{item.companyName}</p> */}

         </div>
      ))}
   

    <div>
      <button className='bg-black ml-36 mt-80 p-3  m-6 text-white border-r-2'>Delete</button>
      <button className='bg-black p-3 text-rose-100 ml-11'>Link with Agency</button>
      <button onClick={handler} className='bg-black p-3 text-rose-100 ml-11'>Add Agency</button>
    </div>
  </div>
);

    </div>

  )
}

export default Viewagency;