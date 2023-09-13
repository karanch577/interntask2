import React from 'react'
import Offers from '../components/Offers'
import DashboardLinks from '../components/DashboardLinks'
import DashboardHeader from '../components/DashboardHeader'

function Dashboard() {
  return (
    <div className='mx-4'>
      <DashboardHeader />
      <DashboardLinks />
      <Offers />
    </div>
  )
}

export default Dashboard