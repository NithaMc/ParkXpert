import React, { useState } from 'react'

const Userdetails  = () => {
    const [file, setFile]= useState()

    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <div className='maindiv'>
    <div className='text-white'> <b>USER INFORMATIONS </b></div>
    
    <div className="App mt-5">
   
    <input type="file"  className="chosefile"onChange={handleChange} />
    <img src={file} />
</div>
    </div>


  )
}

export default Userdetails 