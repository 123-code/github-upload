import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import {getJob} from '../graphql/queries';



function JobDetail() {
  const[jobs,setjobs] = useState(null)
  const { jobId } = useParams();

  useEffect(()=>{
    getJob(jobId).then((data)=>{
setjobs(data)
    })
  },[jobId])

  if(!jobs){
    return(
      <>
      <p> loading...</p>
      </>
    )
  }

  const job = jobs.find((job) => job.id === jobId);
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;
