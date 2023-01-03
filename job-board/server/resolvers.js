import { Company,Job } from './db.js';
export const resolvers = {
    Query: {
      jobs: () => Job.findAll(),
    },
  
// setting company to job fake db, resolver functions get called once for each db object 
  Job: {
company:(job)=>{
return Company.findById(job.companyId);

}
  }
}