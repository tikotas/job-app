import { useState } from 'react'
import { addJob, removeJob } from '../slices/jobSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks'

const JobList = () => {

    const jobs = useAppSelector((state => state.jobs.jobs))
    const dispatch = useAppDispatch()
    const [company, setCompany] = useState('')
    const [title, setTitle] = useState('')
    const [date, setDAte] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if( company, title, date){
            dispatch(addJob( {
                id: Math.random(),
                title,
                company,
                status: 'Applied',
                dateApplied: date,
            }))
            setCompany('')
            setTitle('')
            setDAte('')
        }else{
            setError('Fill in the all fields')
        }
        
    }

  return (
    <div className="job-list">
      <div className='job-header'>
        <h3>Job Applications</h3>
        <form onSubmit={handleSubmit}>
            <div className='inputs'>
                <input type="text" placeholder='Add company' value={company} onChange={(e)=> setCompany(e.target.value)}/>
                <input type="text" placeholder='Add title' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <input type="date" value={date} onChange={(e)=>setDAte(e.target.value)}/>
                <p>{error}</p>
            </div>
            <button>Add Job</button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date Applied</th>
            <th>Delete Job </th>
          </tr>
        </thead>
        <tbody>
          {jobs.map(job => (
            <tr key={job.id}>
              <td>{job.title}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>{job.dateApplied}</td>
              <td className='delete-job' onClick={()=>dispatch(removeJob(job.id))}>Delete This Job</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default JobList