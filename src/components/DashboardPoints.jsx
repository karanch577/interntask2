import React from 'react'
import PointsCard from './PointsCard'

function DashboardPoints() {
  return (
    <div className=' flex justify-center'>
      <div className='inline-block'>
    <div className='flex gap-0.5 justify-center'>
        <PointsCard height="31px" width="16px" active={true} bgColor="#9449B8" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#A862CA" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#B470D3" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#B470D3" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#CC68D0" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#C45CC7" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#C35AC7" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#4F2A52" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#4B244D" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#462148" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#3D193F" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#3D163F" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#38143A" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#301131" />
        <PointsCard height="31px" width="16px" active={true} bgColor="#2A0F2B" />
    </div>
    <div className='flex justify-between mt-4'>
        <div className="left flex items-center justify-center">
            <img src="./starleft.svg" alt="staricon" />
            <span className='text-[6px] font-[600] text-white absolute'>VII</span>
        </div>
        <div className="right flex items-center justify-center">
            <img src="./starright.svg" alt="staricon" />
            <span className='text-[6px] font-[600] text-white absolute'>VIII</span>

        </div>
    </div>
    </div>
    </div>
  )
}

export default DashboardPoints