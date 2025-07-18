import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from '../slices/authSlice.ts'
import jobListReducer from '../slices/jobSlice.ts'

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    jobs: jobListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;