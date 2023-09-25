import React from 'react'
import { Link } from 'react-router-dom'

function Legal() {
  return (
    <div className='mx-4 mt-2'>
    <h2 className='text-[32px] font-[500]'>Statements</h2>
    <div className='flex justify-between items-center shadow-primary rounded-[16px] mt-5 mb-2.5 p-4'>
        <p className='font-[500]'>Privacy Notice</p>
        <img src="./accordionIcon.svg" alt="arrowIcon" />
    </div>
    </div>
  )
}

export default Legal