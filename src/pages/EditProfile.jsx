import React from 'react'
import EditFormCard from '../components/EditFormCard'

function EditProfile() {
  return (
    <div className='mx-2'>
      <div className="userImg mt-1 bg-gray-primary rounded-full w-[164px] h-[164px] flex items-center justify-center mx-auto">
        <img className='w-[100px] h-[107px]' src="./user.svg" alt="user" />
      </div>
      <EditFormCard />
    </div>
  )
}

export default EditProfile