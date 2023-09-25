import React from 'react'
import TypeReportCard from './TypeReportCard'

function TypeReportContainer() {
  return (
    <div className='flex gap-5'>
        <TypeReportCard type="Type 1"/>
        <TypeReportCard type="Type 2" />
    </div>
  )
}

export default TypeReportContainer