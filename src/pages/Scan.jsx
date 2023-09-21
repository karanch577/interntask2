import React from 'react'

function Scan() {
  return (
    <div>
      <div className="cameraModule"></div>
      <div className="shutterContainer">
        <p className='text-[20px] text-[#080808] text-center'>Tap shutter to scan</p>

        <div className='flex gap-9 justify-center items-center'>
          <div className="shutter shadow-primary border-[5px] rounded-full p-4 border-[#B4B4B4] outline outline-1 outline-[#fff]">
            <img src="./shutterIcon.svg" alt="search" />
          </div>
          <div className="flashlight">
            <img src="./flashlight.svg" alt="flashlight" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scan