import React from 'react'

function StatementsCard({data}) {
    const { heading, subHeading, issueNo, issueDate, amount, status, showBorder } = data
  return (
    <div className={`flex gap-3.5 py-3 ${showBorder ? "border-b border-gray-primary" : "border-none"}`}>
        <div className="img rounded-[6px] bg-gray-primary px-4 py-3">
            <img src="./statementicon.svg" alt="statementicon" />
        </div>
        <div className="content flex justify-between w-full">
            <div className="left">
                <h2 className='text-[15px] font-[500]'>{heading}</h2>
                <p className='text-[10px] italic text-[#323232]'>{subHeading}</p>
                <p className='text-[8px] text-[#323232]'>Issue no. <span className='font-[500]'>{issueNo}</span></p>
                <p className='text-[8px] text-[#323232]'>Issue date <span className='font-[500]'>{issueDate}</span></p>
            </div>
            <div className="right flex flex-col justify-between">
                <div>
                <h2 className='text-[14px] font-[500]'>${amount}</h2>
                <p className='text-[8px] italic text-[#323232]'>Outstanding Amt</p>
                </div>
                <button className={`statusBtn capitalize text-center text-[8px] text-[#323232] rounded-[9px] px-3 py-1 ${status === "approved" ? "bg-[#B2FF83]" : "bg-[#C3C3C3]"}`}>{status}</button>
            </div>
        </div>
    </div>
  )
}

export default StatementsCard