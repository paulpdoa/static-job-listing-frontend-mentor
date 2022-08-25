import { useJobContext } from "../hooks/useJobContext"
import { useEffect } from 'react';
import data from '../data/data.json';
import JobCard from "../components/JobCard";

const Home = () => {

    const { jobs, dispatch, selected } = useJobContext();
    
    useEffect(() => {
        dispatch({ type: 'SET_JOBS', payload: data})
    },[dispatch])

  return (
    <div className="flex flex-col items-center md:gap-4 gap-10 my-14">
        { jobs && jobs.filter(job => {
          if(selected.length > 0) {
            // filter these values when the job level is existing inside the selected values array
            // job.languages is an array
            // need to check if the values of selected is same with job.languages
            
            return Object.values(selected).includes(job.level) && job.level || Object.values(selected).includes(job.role) && job.role || job.languages !== undefined && job.languages.includes(selected.toString())
          }
        return job
        }).map((job,key) => (
            <JobCard key={key} job={job} />
        )) }
    </div>
  )
}

export default Home