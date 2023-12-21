import React from 'react'

const Jobs = ({result}) => {
  return (
    <div className='flex flex-col gap-4'>
      <h3 className="text-lg mb-2 font-bold">{result.length} Jobs</h3>
      <section className='card-container'>{result}</section>
    </div>
  )
}

export default Jobs