import React from 'react'

function Navbar() {
  return (
    <>
    <div className='flex justify-between z-50  p-4 fixed w-full max-w-[425px] mx-auto bg-gradient-to-r from-[#F7E9FD] to-[#FEF2EF]'>
      {/* <div className="backgroud absolute top-0 left-0 w-full h-full -z-10 bg-gradient-to-r from-[#F7E9FD] to-[#FEF2EF] filter blur-[18.5px]"></div> */}
      <div className="left w-[52px] h-[52px] rounded-full bg-gray-secondary flex items-center justify-center text-white">x</div>
      <div className="right w-[103px] h-[52px] rounded-[26px] bg-gray-secondary"></div>
    </div>
    {/* since the above div is fixed, creating a fake scroll to mantain the spacing */}
    <div className='w-full h-[84px]'></div>
    </>
  )
}

export default Navbar