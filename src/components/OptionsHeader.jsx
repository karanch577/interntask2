import React from 'react'

function OptionsHeader() {
  return (
    <div className='flex items-center gap-6 shadow-primary rounded-[15px] px-3 py-5'>
            <div className="img w-[84px] h-[84px] rounded-full flex items-center justify-center bg-gray-secondary">
                <img src="./user.svg" alt="user" />
            </div>

            <div className="text">
                <h2 className='text-[24px] font-[500]'>Richards</h2>
                <p className='text-[14px] font-[500]'>+91548562541</p>
            </div>
        </div>
  )
}

export default OptionsHeader