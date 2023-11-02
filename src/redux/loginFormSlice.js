import { createSlice } from '@reduxjs/toolkit';

const loginFormInitialState = {
  name: '',
  email: '',
  password: '',
};

export const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState: loginFormInitialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});
export const loginFormReducer = loginFormSlice.reducer;
export const { setName, setEmail, setPassword } = loginFormSlice.actions;
