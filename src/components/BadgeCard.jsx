import React from 'react'

function BadgeCard({ heading, count, iconUrl, bgColor }) {
  return (
    <div className={`flex shrink-0 flex-col justify-between px-2 pt-[5px] pb-2 text-white w-[78px] z-50 h-[67px] rounded-[10px] ${bgColor}`}>
        <div className='flex items-center justify-between'>
            <h2 className='text-[12px] font-[500]'>{count}</h2>
            <div className='img'>
                <img className='w-[21px]' src={iconUrl} alt="badge" />
            </div>
        </div>

        <h2 className='text-[8px] font-[500]'>{heading}</h2>
    </div>
  )
}

export default BadgeCard