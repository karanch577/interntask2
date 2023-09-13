import React from 'react'
import StatementSearch from '../components/StatementSearch'
import StatementsCard from '../components/StatementsCard'

function Statements() {
  const data = [
    {
      id: 1,
      heading: "Concept LLC",
      subHeading: "Concept LLC Web Banners",
      issueNo: 99,
      issueDate: "09.02.2022",
      amount: "1090.90",
      status: "approved"
    },
    {
      id: 2,
      heading: "Concept LLC",
      subHeading: "Concept LLC Web Banners",
      issueNo: 99,
      issueDate: "09.02.2022",
      amount: "1090.90",
      status: "pending"
    },
    {
      id: 3,
      heading: "Concept LLC",
      subHeading: "Concept LLC Web Banners",
      issueNo: 99,
      issueDate: "09.02.2022",
      amount: "1090.90",
      status: "approved"
    },
    {
      id: 4,
      heading: "Concept LLC",
      subHeading: "Concept LLC Web Banners",
      issueNo: 99,
      issueDate: "09.02.2022",
      amount: "1090.90",
      status: "approved"
    },
    {
      id: 5,
      heading: "Concept LLC",
      subHeading: "Concept LLC Web Banners",
      issueNo: 99,
      issueDate: "09.02.2022",
      amount: "1090.90",
      status: "approved"
    },
  ]

  return (
    <div className='mx-4 mt-2'>
    <h2 className='text-[32px] font-[500]'>Statements</h2>
    
    <StatementSearch />
    <div className="statements-container shadow-statement-card px-3 py-1.5 mt-5 rounded-[16px] mb-28">
      {data.length > 0 && data.map((info, index) => <StatementsCard key={info.id} data={{
        ...info,
        showBorder: index !== data?.length - 1
      }} />)}
    </div>
  </div>
  )
}

export default Statements