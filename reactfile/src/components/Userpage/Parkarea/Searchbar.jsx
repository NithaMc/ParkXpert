import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const Searchbar = () => {
  const[input,setInput]=useState("")

  return (
    <div className='wrapper'> 
    <FaSearch id='search-icon' />
      <input type="text"placeholder='type to search' className='input' value={input} onChange={(e)=>setInput (e.target.value)} />
    </div>
  )
}

export default Searchbar