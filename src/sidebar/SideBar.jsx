import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobpostingData from './JobpostingData'

const SideBar = ({handleChange, handleClick}) => {
  return (
    <div className='space-y-5'>
        <h3 className='text-lg font-bold mb-2'>Filters</h3>
        <Location handleChange={handleChange} />
        <Salary handleChange={handleChange} handleClick={handleClick} />
        <JobpostingData  handleChange={handleChange}/>

    </div>
  )
}

export default SideBar