import React from 'react'

function PointsCard({active, width, height, bgColor}) {
  console.log(bgColor)
  return (
    <div style={{backgroundColor: "#"+bgColor}} className={`rounded-[6px] ${active ? "bg-opacity-100" : "bg-opacity-30"} h-[${height}] w-[${width}] `}></div>
    
  )
}

export default PointsCard