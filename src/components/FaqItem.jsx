import React, { useState } from 'react'

function FaqItem({data}) {
    const { faqHeading, faqDescription, showBorder, id, activeItemId, handleActiveItem } = data

  return (
    <div onClick={() => handleActiveItem(id)} className={`${showBorder ? "border-b pb-2 border-[#E4E4E4]" : ""} m-2 px-2 `}>
        <div className='flex justify-between items-center'>
            <p>{faqHeading}</p>
            <img className={`transition-all ${activeItemId === id ? "rotate-90" : "rotate-0"}`} src="./accordionIcon.svg" alt="arrowIcon" />
        </div>
        <div className='description'>
            { activeItemId === id && <p className="text-[14px] text-slate-700">{faqDescription}</p>}
        </div>
    </div>
  )
}

export default FaqItem