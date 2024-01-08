import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from 'react-select/creatable'

const UpdateJob = () => {
  const { id } = useParams();
  const {
    _id,
    jobTitle,
    companyName,
    minPrice,
    maxPrice,
    salaryType,
    jobLocation,
    postingDate,
    experienceLevel,
    companyLogo,
    employmentType,
    description,
    postedBy,
    skills,
  } = useLoaderData();

  const [selectedOption , setSelectedOption]= useState(null)
  const {
   register,
   handleSubmit,reset,
   formState: { errors },
 } = useForm();

 const onSubmit = (data) => {
   data.skills = selectedOption   
  fetch('http://localhost:3000/post-job', {
   method: 'PATCH',
   headers : {'content-type' : 'application/json'},
   body: JSON.stringify(data)
  }).then(res => res.json()).then((result) => {
   console.log(result)
     if(result.acknowledged === true){
         alert('successfully created')
     }
     reset()
  })
 };

 const options = [
   {value: 'Javascript', label: 'Javascript'},
   {value: 'C++', label: 'C++'},
   {value: 'Java', label: 'Java'},
   {value: 'HTML', label: 'HTML'},
   {value: 'CSS', label: 'CSS'},
   {value: 'React', label: 'React'},
   {value: 'Node', label: 'Node'},
   {value: 'MongoDB', label: 'MongoDB'},
   {value: 'Redux', label: 'Redux'},

 ]
  return <div>
     <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                defaultValue={jobTitle}
                {...register("jobTitle")}
                className="w-full block flex-1 border-1 bg-white py-1.5 pl-3 text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                {...register("companyName")}
                defaultValue={companyName}
                placeholder="Ex: Google"
                className="create-job-input"
              />
            </div>
          </div>
          {/* 2nd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Mininum Salary</label>
              <input
                type="text"
                {...register("minPrice")}
                placeholder="$20k"
                defaultValue={minPrice}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maxinum Salary</label>
              <input
                type="text"
                {...register("maxPrice")}
                placeholder="$120k"
                defaultValue={minPrice}
                className="create-job-input"
              />
            </div>
          </div>
          {/* 3rd Row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value={salaryType}>{salaryType}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly"> Monthly</option>
                <option value="Yearly "> Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                {...register("jobLocation")}
                placeholder="Ex: New York"
                defaultValue={jobLocation}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th  */}
          <div className="create-job-flex">
            
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                {...register("postingDate")}
                placeholder="Ex: 2023-11-03"
                defaultValue={skills}
                className="create-job-input"
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select {...register("experienceLevel")} className="create-job-input">
                <option value={experienceLevel}>{experienceLevel}</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Internship</option>
                <option value="Yearly ">Work remotely</option>
              </select>
            </div>
          </div>

          <div>
            <label className='block mb-2 text-lg'>Required Skill Sets:</label>
            <CreatableSelect className='create-job-input' defaultValue={selectedOption}  onChange={setSelectedOption} options={options} isMulti/>
          </div>

          {/* 6th */}
          <div className="create-job-flex">
            
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                {...register("companyLogo")}
                placeholder="pace your company url : https://weshare.com/img"
                className="create-job-input"
                defaultValue={companyLogo}
              />
            </div>

            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment type</label>
              <select {...register("exploymentType")} className="create-job-input">
                <option value="employmentType">{employmentType }</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Temporary">Temporary</option>
                <option value="Part Time ">Part Time</option>
              </select>
            </div>
          </div>

          <div className = 'w-full'>
            <label className='block mb-2 text-lg'>Job Description</label>
            <textarea className="w-full pl-3 py-1.5 focus:outline-none" placeholder='Job Description '  defaultValue={description}  {...register('description')}/> 
          </div>
      

      <div className='w-full'>
        <label className='block mb-2 text-lg'>Posted by</label>
        <input type='email' placeholder='your email'  defaultValue={postedBy} {...register('postedBy')} className="create-job-input"/>

      </div>
          <input type="submit"  className='block mt-12 bg-blue-500 text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
        </form>
      </div>
    </div>
  </div>;
};

export default UpdateJob;
