import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: null,
  token: '',
};
const authSlice = createSlice({
  name: 'tree-plants-auth',
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: state => {
      state.user = null;
      state.token = '';
    },
  },
  initialState,
});

export const authReducer = authSlice.reducer;
export const { setUser, logout } = authSlice.actions;
