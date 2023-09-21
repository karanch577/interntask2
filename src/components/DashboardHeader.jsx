import React from 'react'
import Badges from './Badges'
import DashboardPoints from './DashboardPoints'

function DashboardHeader() {
  return (
    <div className='shadow-primary z-10 rounded-[15px] pt-2.5 pb-8'>
        <h3 className='font-[600] mx-3 text-[#2A0F2B]'>Points</h3>
        <div className='mt-1 mb-5'>
        <h2 className='text-[#2A0F2B] font-[600] text-[20px] text-center'>7 points collected</h2>
        <p className='text-[#C35AC7] text-center text-[10px] leading-none'>Purple tier</p>
        </div>

      <DashboardPoints />

        <div className='text-[12px] flex justify-between items-center mx-3 mt-7'>
            <p className='font-[600]'>Badges</p>
            <p className='opacity-30'>Open all</p>
        </div>
        <h2 className='text-[20px] font-[500] text-center mt-1 mb-3'>Opened 38/120 badges</h2>
        <Badges />
    </div>
  )
}

export default DashboardHeader