import React from 'react'
import PointsCard from './PointsCard'
import "./CSS/RewardPoints.css"

function RewardPoints() {
  return (
    <div className='shadow-primary rounded-[15px] px-9 pt-6 bg-card pb-7 mt-3.5'>
        <h1 className='text-[85px] min-[327px]:text-[96px] text-center font-[700] text-[#FEAB35] leading-[1.1]'>25</h1>
        <h3 className='text-[27px] min-[327px]:text-[32px] text-[#FEAB35] text-center font-[600] leading-none'>Reward Points</h3>

        {/* Reward cards start */}
        <div className='flex gap-[2px] justify-center mt-7'>
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={true} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={false} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={false} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={false} />
            <PointsCard height="49px" width="24px" bgColor="#FCC460" active={false} />
        </div>
        {/* Reward cards end */}

      
    </div>
  )
}

export default RewardPoints