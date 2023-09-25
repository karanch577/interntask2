import React from 'react'

function TypeTextCard({text}) {
  return (
    <div className='px-2 h-[23px] rounded-[11.5px] bg-gradient-to-b from-[#F3EDFB] to-[#EBDEF7] border'>
        <h2 className='text-[13px] text-center'>{text}</h2>
    </div>
  )
}

export default TypeTextCard