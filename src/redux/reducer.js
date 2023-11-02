import { combineReducers } from '@reduxjs/toolkit';
import { loginFormReducer } from './loginFormSlice';

export const reducer = combineReducers({
  loginForm: loginFormReducer,
});
