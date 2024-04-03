import axios from 'axios'
import React, { useState } from 'react'

const Securitycompany =async () => {

    const [data,setdata]=useState()

    const response= await axios.get(`http://localhost:5001/api/company/companysecurity`)

  return (
    <div className='bg-red-300'>


    </div>
  )
}

export default Securitycompany