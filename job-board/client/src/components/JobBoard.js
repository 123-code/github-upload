import JobList from './JobList';
import { getJobs } from '../graphql/queries';
import {useState,useEffect} from 'react';



function JobBoard() {
  const [jobs,setjobs] = useState([]);
  // fetches the jobs when component is rendered
useEffect(()=>{
  console.log("mounted")
getJobs().then((jobs)=>setjobs(jobs));
},[]);
console.log("jobsj",jobs);
  return (
    <div>
      <h1 className="title">
        Job Board
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default JobBoard;
