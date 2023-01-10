import { Company,Job, User } from './db.js';
export const resolvers = {
    Query: {
      company:(_root,{id})=> Company.findById(id),
      job:(_root,{ id })=>{
return Job.findById(id)
      },
      jobs: () => Job.findAll(),
    },

// resolver returns all jobs associated with a given company 
    Company:{
jobs:(company)=> Job.findAll(()=> Job.companyId === company.id )
    },
  
// setting company to job fake db, resolver functions get called once for each db object 
  Job: {
company:(job)=>{
return Company.findById(job.companyId);

}
  },
// data modifier resolver 
Mutation:{
  createJob:(_root,{input},{ user })=>{
    console.log(auth);
    if(!auth){
      throw new Error('Unauthorized');
    }
    user.companyId = auth.companyId;
return Job.create({...input,companyId:user.companyId});
  },
}



}