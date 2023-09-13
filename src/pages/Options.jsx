import React from 'react'
import OptionsHeader from '../components/OptionsHeader'
import OptionCard from '../components/OptionCard'

function Options() {
  return (
    <div className='mx-4 mt-2'>
        <OptionsHeader />

        <div className="options-container shadow-primary rounded-[15px] flex flex-col gap-7 px-4 py-5 mt-3.5 mb-28">
        <OptionCard imgUrl="./optionsicon1.svg" heading="Transactions" />
        <OptionCard imgUrl="./optionsicon2.svg" heading="Redemptions" />
        <OptionCard imgUrl="./optionsicon3.svg" heading="Bonus Points" />
        <OptionCard imgUrl="./optionsicon4.svg" heading="Expired Points" />
        <OptionCard imgUrl="./optionsicon5.svg" heading="Help" />
        <OptionCard imgUrl="./optionsicon6.svg" heading="Legal" />
        </div>
    </div>
  )
}

export default Options