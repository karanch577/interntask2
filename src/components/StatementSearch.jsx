import React, { useState } from 'react'

function StatementSearch() {
  const [input, setInput] = useState("")

  const handleSearch = (e) => {
    if(e.key === "Enter") {
      console.log(input)
    }
  }

  return (
    <div className='flex gap-1'>
      <div className="input grow bg-gray-tertiary rounded-[19.5px] flex items-center ">
        <img className='my-3 ml-3' src="./searchIcon.svg" alt="search" />
        <input onChange={(e) => setInput(e.target.value)} className='w-full bg-transparent focus:outline-none mx-1.5' type="text" value={input} onKeyDown={handleSearch}/>
      </div>

      <div className="icons flex items-center gap-2.5 mx-3">
        <img src="./viewgrid.svg" alt="grid view" />
        <img src="./viewlist.svg" alt="list view" />
      </div>
    </div>
  )
}

export default StatementSearch