import React from 'react'
import BadgeCard from './BadgeCard'

function DashboardBadges() {
  return (
    <div className='flex gap-2 overflow-x-scroll'>
        <BadgeCard heading="50 Payments" count="1" iconUrl="./badge1.svg" bgColor="bg-gradient-to-b from-[#BE91F9] to-[#843CE1]" isDashboardCard={true} />
        <BadgeCard heading="100 Payments" count="2" iconUrl="./badge2.svg" bgColor="bg-gradient-to-b from-[#A5A2FC] to-[#4D52E0]" isDashboardCard={true} />
        <BadgeCard heading="250 Payments" count="3" iconUrl="./badge3.svg" bgColor="bg-gradient-to-b from-[#F3A7A7] to-[#C8393E]" isDashboardCard={true} />
        <BadgeCard heading="500 Payments" count="4" iconUrl="./badge4.svg" bgColor="bg-gradient-to-b from-[#C489C7] to-[#B832BF]" isDashboardCard={true} />
        <BadgeCard heading="750 Payments" count="5" iconUrl="./badge5.svg" bgColor="bg-gradient-to-b from-[#F0CC98] to-[#FABA5A]" isDashboardCard={true} />
        <BadgeCard heading="1000 Payments" count="6" iconUrl="./badge4.svg" bgColor="bg-gradient-to-b from-[#F3A7A7] to-[#C8393E]" isDashboardCard={true} />
      
    </div>
  )
}

export default DashboardBadges