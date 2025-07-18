import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export interface Job {
  id: string | number;
  title: string;
  company: string;
  status: 'Applied' | 'Interview' | 'Offer' | 'Rejected';
  dateApplied: string;
}

interface JobState {
  jobs: Job[];
}

const initialState: JobState = {
  jobs: [
    {
      id: '1',
      title: 'Frontend Developer',
      company: 'Google',
      status: 'Applied',
      dateApplied: '2025-07-10',
    },
    {
      id: '2',
      title: 'Backend Developer',
      company: 'Amazon',
      status: 'Interview',
      dateApplied: '2025-07-12',
    },
  ],
};

const jobSlice =createSlice({
    name: 'job',
    initialState,
    reducers:{
         addJob(state, action: PayloadAction<Job>) {
            console.log(action.payload);
            
             state.jobs.push(action.payload);
           },

         removeJob(state, action: PayloadAction<string>) {
             state.jobs = state.jobs.filter(job => job.id !== action.payload);
           },
    }
})

export const {addJob, removeJob} = jobSlice.actions
export default jobSlice.reducer