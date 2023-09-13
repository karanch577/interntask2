import React from 'react'

function RewardsCard({heading, subHeading, imgUrls}) {
  return (
    <div className='rounded-[15px] bg-gray-tertiary p-3 flex items-center gap-3'>
        <div className="left w-[41px] h-[41px] rounded-full bg-white flex items-center justify-center">
            <img src={imgUrls} alt="logo" />
        </div>
        <div className="right">
            <h3 className='text-[14px] font-[500]'>{heading}</h3>
            <p className='text-[10px] font-[500]'>{subHeading}</p>
        </div>
    </div>
  )
}

export default RewardsCard