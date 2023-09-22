import React from 'react'

function Search({setSearchInput, searchInput, handleSearch, filterSearch}) {
    function handleChange(e) {
        setSearchInput(e.target.value)
    }


  return (
    <div className='mb-24 flex justify-center  gap-2'>
      <input placeholder='What do you want to see?' 
      className='border-2 w-3/5 p-2 rounded-md' 
      type="search" 
      name="search" 
      id="search" 
      value={searchInput} 
      onChange={(e) => handleChange(e)}  
      />
      <button className='bg-[#736CC4] text-[#DAFAFF] py-2 px-6 rounded-md' type="submit" onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
