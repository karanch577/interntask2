import React, { useRef } from 'react'

function Scan() {

  const videoRef = useRef(null)

  const handleShutterClick = async (e) => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({video: true, audio: false})
      console.log(stream)
      videoRef.current.srcObject = stream
    } catch (error) {
      console.log(`Error in handleShutter ${error}`)
  }
}

  return (
    <div className='relative min-h-[calc(100vh-250px)] mx-8'>
      <div className="cameraModule mt-11">
      <video className='w-full h-[300px] object-cover rounded-md' ref={videoRef} autoPlay></video>
      </div>
      <div className="shutterContainer absolute bottom-0 w-full">
        <p className='text-[20px] text-[#080808] text-center my-8'>Tap shutter to scan</p>

        <div className='flex gap-9 justify-center items-center relative'>
          <div onClick={handleShutterClick} className="shutter shadow-primary border-[5px] rounded-full p-7 border-[#B4B4B4] outline outline-1 outline-[#fff]">
            <img src="./shutterIcon.svg" alt="search" />
          </div>
          <div className="flashlight absolute right-[7%]">
            <img src="./flashlight.svg" alt="flashlight" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scan