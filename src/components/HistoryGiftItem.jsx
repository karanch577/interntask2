import React from 'react'

function HistoryGiftItem({data}) {
    const { heading, subHeading, amount, rewardDate, showBorder } = data
  return (
    <div className={`flex items-center gap-4 w-full ${showBorder && "border-b border-[#D9D9D9]"}`}>
        <div className="img shrink-0 rounded-[6px] bg-[#ECECEC] w-[60px] h-[60px] my-3 flex items-center justify-center">
            <img src="./giftIcon.svg" alt="gift" />
        </div>
        <div className='flex justify-between items-center w-full'>
            <div className="left">
                <h3 className='text-[14px] font-[500] text-[#050505]'>{heading}</h3>
                <p className='text-[10px] font-[500] text-[#909090]'>{rewardDate}</p>
                <p className='text-[8px] text-[#909090]'>{subHeading}</p>
            </div>
            <div className="right">
                <p className='text-[20px] font-[500] mr-2'>${amount}</p>
            </div>
        </div>
    </div>
  )
}

export default HistoryGiftItem