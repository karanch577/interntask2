import React from 'react'

function PointsCard({active, width, height, bgColor}) {
  return (
    <div style={{
      backgroundColor: bgColor,
      height: height,
      width: width,
      opacity: active ? 1 : 0.3
    }} className={`rounded-[6px]`}></div>
    
  )
}

export default PointsCard