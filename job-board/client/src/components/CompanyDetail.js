import { useParams } from 'react-router';
import { companies } from '../fake-data';
import JobList from './JobList';


function CompanyDetail() {
  const { companyId } = useParams();

  const company = companies.find((company) => company.id === companyId);
  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h5> Jobas at {company.name} </h5>
      <JobList jobs={company.jobs}/>
    </div>
  );
}

export default CompanyDetail;
