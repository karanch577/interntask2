import React from 'react'
import DashboardLinkCard from './DashboardLinkCard'

function DashboardLinks() {
  return (
    <div className='flex flex-col gap-3 my-3'>
        <DashboardLinkCard imgUrl="./redeemicon.svg" heading="Redeem" />
        <DashboardLinkCard imgUrl="./analytics.svg" heading="Analytics" />
        <DashboardLinkCard imgUrl="./refericon.svg" heading="Refer a friend" subHeading="+ 250 points  " />
    </div>
  )
}

export default DashboardLinks