// @packages
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// @scripts
import userReducer from './user/user-slice';


const store = configureStore({
  reducer: {
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;
