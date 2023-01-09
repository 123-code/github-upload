import { useState } from 'react';
import { createJob } from '../graphql/queries';
import {useNavigate} from 'react-router';

function JobForm() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('should post a new job:', { title, description });
    const CompanyID  = 'pVbRRBQtMVw6lUAkj1k43';
    const job = await createJob({title,CompanyID,description})
    console.log(job);
    navigate(`/jobs/${job.id}`)
  };

  return (
    <div>
      <h1 className="title">
        New Job
      </h1>
      <div className="box">
        <form>
          <div className="field">
            <label className="label">
              Title
            </label>
            <div className="control">
              <input className="input" type="text" value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">
              Description
            </label>
            <div className="control">
              <textarea className="textarea" rows={10} value={description}
                onChange={(event) => setDescription(event.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-link" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default JobForm;
