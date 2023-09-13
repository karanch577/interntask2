import React from 'react'
import "../components/CSS/Home.css"
import Story from '../components/Story'
import HomeCard from '../components/HomeCard'

function Home() {
  return (
    <div className='mx-4 mt-2'>
      <h2 className='text-[32px] font-[500]'>Stories</h2>
      <div className="stories flex gap-4 h-auto mt-7 mb-3">
        <Story />
        <Story />
        <Story />
        <Story />
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
       
      </div>
    </div>
  )
}

export default Home