//yarn add graphql-request
import {request,gql } from 'graphql-request';
const GRAPHQL_SERVER_URL = 'http://localhost:9000/graphql'

export async function getJob(id){
  const query = gql`
  query JobQuery($id:ID!){
   job(id:$id) {
     id
     title
     company{
      id
       name
     }
     description
   }
  }
  `;
  const variables = { id };
  const {job} = await request(GRAPHQL_SERVER_URL,query,variables);
  return job;
  
  }

export async function getJobs(){
const query = gql`
query{
 jobs {
   title
   id
   company{
     name
   }
 }
}
`;
const {jobs} = await request(GRAPHQL_SERVER_URL,query);
return jobs;

}