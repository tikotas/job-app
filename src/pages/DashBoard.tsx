import JobList from '../components/JobList'
import './Dashboard.css'

const DashBoard = () => {
  return (
    <div className='dashboard'>
        <h2>DashBoard</h2>
        <JobList />
    </div>
  )
}

export default DashBoard