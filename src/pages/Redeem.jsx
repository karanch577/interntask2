import React from 'react'
import RewardPoints from '../components/RewardPoints'
import YourRewards from '../components/YourRewards'
import RewardsHistory from '../components/RewardHistory'

function Redeem() {
  return (
    <div className='mx-4 mt-2'>
        <h2 className='text-[32px] font-[500]'>Redeem</h2>
        <RewardPoints />
        <YourRewards />
        <RewardsHistory />
    </div>
  )
}

export default Redeem