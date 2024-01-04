import {useState} from 'react'

const MyJobs = () => {
    const[jobs, setJobs] = useState([])
    const [searchText, setSearchText] = useState('');
    const [isLoading , setIsLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3000/myJobs/franklindutch1@gmail.com').then(res => res.json()).then((data) => {
            setJobs(data)
        })
    }, [])
  return (
    <div>
    <h2>Jobs : {jobs.length}</h2>
    </div>
  )
}

export default MyJobs