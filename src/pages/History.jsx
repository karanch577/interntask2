import React from 'react'
import HistoryGiftItem from '../components/HistoryGiftItem'

const data = [
    {
        id: 1,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    },
    {
        id: 2,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    },
    {
        id: 3,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    },
    {
        id: 4,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    },
    {
        id: 5,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    },
    {
        id: 6,
        heading: "Gift Reward Collected",
        subHeading: "Transaction",
        amount: "40",
        rewardDate: "12th December 2022"
    }
]

function History() {
  return (
    <div className='mx-4 mt-2'>
        <h2 className='text-[32px] font-[500]'>History</h2>
        <div className="giftContainer mt-5 mb-28 rounded-[16px] shadow-primary p-2">
            {data.length > 0 && data.map((item, index) => <HistoryGiftItem key={item.id} data={{
                ...item,
                showBorder: index !== data?.length - 1
            }} />)}
        </div>
    </div>
  )
}

export default History