import React from 'react'

function OptionCard({imgUrl, heading}) {
  return (
    <div className='flex items-center gap-4'>
        <div className="left w-[48px] h-[48px] rounded-[10px] bg-gray-tertiary flex items-center justify-center">
            <img src={imgUrl} alt="icon" />
        </div>

        <div className="right">
            <h2 className='font-[500]'>{heading}</h2>
        </div>
    </div>
  )
}

export default OptionCard