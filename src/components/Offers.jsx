import React from 'react'
import OfferCard from './OfferCard'

function Offers() {
  return (
    <div className='shadow-primary rounded-[15px] px-3 pt-4 pb-7 mb-28'>
        <h2 className='text-[12px] font-[600] text-[#2D2D2D]'>Offers</h2>

        <div className="cards flex gap-1.5">
            <OfferCard />
            <OfferCard />
            <OfferCard />
        </div>
    </div>
  )
}

export default Offers