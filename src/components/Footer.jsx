import React from 'react'
import "./CSS/Footer.css"

function Footer() {
  return (
    <div className='rounded-[30px] site-header flex items-center justify-between px-5 py-4 fixed bottom-2 left-0 right-0 mx-3 z-50'>

      <div className="left w-[30%] flex items-center justify-between">
        <img src="./house.svg" alt="home" />
        <img src="./dollarsign.svg" alt="dollaricon" />
      </div>

      <div className="right w-[30%] flex items-center justify-between">
        <img src="./greetingcard.svg" alt="greetingicon" />
        <img src="./gearshape.svg" alt="gearicon" />
      </div>

      {/* absolute div */}
      <div className='fixed w-full left-0 right-0 bottom-4 flex justify-center'>
      <div className='bg-[#D869FF] m-1 rounded-full p-4'>
        <img src="./scan.svg" alt="scan" />
      </div>
      </div>
    </div>
  )
}

export default Footer