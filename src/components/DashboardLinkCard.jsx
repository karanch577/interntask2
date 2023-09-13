import React from 'react'

function DashboardLinkCard({imgUrl, heading, subHeading}) {
  return (
    <div className='shadow-primary flex rounded-[15px] gap-4 items-center px-4 py-5'>
        <div className="img">
            <img src={imgUrl} alt={heading} />
        </div>
        <div className="text flex items-center justify-between w-full">
            <h2 className='text-[20px] font-[600] text-[#2D2D2D]'>{heading}</h2>
            {subHeading && 
            <p className='font-[500] text-[#C35AC7]'>{subHeading}</p>
            }
        </div>
    </div>
  )
}

export default DashboardLinkCard