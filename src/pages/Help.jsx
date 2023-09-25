import React from 'react'
import { Link } from 'react-router-dom'

function Help() {
  return (
    <div className='mx-4 mt-2'>
    <h2 className='text-[32px] font-[500]'>Help</h2>

    <Link to="/faqs" className='flex justify-between items-center shadow-primary rounded-[16px] mt-5 mb-2.5 p-4'>
        <p className='font-[500]'>FAQs</p>
        <img src="./accordionIcon.svg" alt="arrowIcon" />
    </Link>

    <div className="contactCard rounded-[16px] shadow-primary text-[#050505] p-4">
    <h2 className='font-[500]'>Contact</h2>
    <a className='block text-[14px]' href="mailto:exampl@example.com">company@company.com</a>
    <a className='block text-[14px]' href="tel:+914455458755">+91 4455 4587 55</a>
    </div>
</div>
  )
}

export default Help