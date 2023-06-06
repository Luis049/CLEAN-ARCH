import { user } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/user.slice';

export interface AppStore {
  user: user;
}

export default configureStore<AppStore>({
  reducer: {
    user: userReducer,
  }
});