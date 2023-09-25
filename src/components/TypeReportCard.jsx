import React from 'react'
import TypeTextCard from './TypeTextCard'

function TypeReportCard({type}) {
  return (
    <div className='rounded-[15px] shadow-primary w-full px-3.5 pt-4 pb-5'>
        <div className="header flex justify-between">
            <div className="left w-[44px] h-[44px] rounded-[10px] bg-gray-primary flex items-center justify-center">
                <div className="icon">
                   <img src="./typeIcon.svg" alt="icon" />
                </div>
            </div>
            <div className="right">
                <h3>{type}</h3>
            </div>
        </div>

        <div className='flex justify-between mt-9'>
            <TypeTextCard text="Chart" />
            <TypeTextCard text="Report" />
        </div>
    </div>
  )
}

export default TypeReportCard