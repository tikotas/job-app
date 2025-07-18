
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface User {
  email: string;
  password: string;
}

interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: localStorage.getItem('authUser')
    ? JSON.parse(localStorage.getItem('authUser') as string)
    : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
          login(state, action: PayloadAction<User>) {
            state.user = action.payload;
            localStorage.setItem('authUser', JSON.stringify(action.payload));
          },

          logout(state) {
            state.user = null;
            localStorage.removeItem('authUser');
          },
    }
})


export const { login, logout } = authSlice.actions;
export default authSlice.reducer;