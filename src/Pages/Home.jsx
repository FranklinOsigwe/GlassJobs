import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner';

const Home = () => {
  const [query, setQuery] = useState('');
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   fetch('jobs.json').then(res => res.json()).then(data => {
    setJobs(data)
   })  
  },[])
  
  function handleInputChange(event) {
      setQuery(event.target.value)
  }

  //filter jobs by title
    const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1)
  //radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }
  // button based filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  const filteredData = (query,selected, jobs) => {
    let filteredJobs = jobs

    // filtering Input items
    if(query) {
      filteredJobs = filteredItems
    }
    // category filtering
    if(selected) {
      filteredJobs = filteredJobs.filter(({jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate}) => (
        jobLocation.toLowerCase() === selected.lowerCase() || parseInt(maxNum) ===selected ||
      ))
    }
  }

  return (
    <Banner handleInputChange={handleInputChange} query={query}/>
  )
}

export default Home