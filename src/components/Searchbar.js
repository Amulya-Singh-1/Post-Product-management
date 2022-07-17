import React from 'react'
import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
    const [searchTerm, setSearchTerm]=useState('');
  return (
    <div>
        <div className="App">
        <AiOutlineSearch/>
      <input className='searchz' type="search" placeholder='Search ...' onChange={(event)=>{
        setSearchTerm(event.target.value);
      }} />
    </div>
    </div>
  )
}
export default Searchbar