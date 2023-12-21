import React from 'react'
import InputField from '../components/InputField'

function EmploymentType({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Type of Employment</h4>
        <div>
            <label className='sidebar-label-container'>
            <input type='radio' name='test' id='test' value='' onChange={handleChange}/>
            <span className='checkmark'></span> All
            </label>
            
            <InputField handleChange={handleChange}  value="full-time" title="Full-Time" name="test"/>
            <InputField handleChange={handleChange}  value="tempopary" title="Tempopary" name="test"/>
            <InputField handleChange={handleChange}  value="part-time" title="Part-time" name="test"/>
        
   
        </div>
    </div>
  )
}

export default EmploymentType