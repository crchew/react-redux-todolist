import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from "uuid";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: localStorage.getItem('token'),
    isLoggedIn: !!localStorage.getItem('token'),
    users: [],
  },
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
      alert('Signup successful!');
    },
    login: (state) => {
      const newToken = uuidv4();
      state.token = newToken;
      state.isLoggedIn = true;
      localStorage.setItem('token', newToken);
      alert('Login successful!');
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      localStorage.removeItem('token');
      alert('Logged out successfully!');
    },
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
