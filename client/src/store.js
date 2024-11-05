import { configureStore } from '@reduxjs/toolkit';
import loginReducer from '../features/loginSlice';
import registerReducer from '../features/registerSlice';
import itemsReducer from '../features/itemsSlice';
import profileReducer from '../features/profileSlice';

export const store = configureStore({
  reducer: {
    login: loginReducer,
    register: registerReducer,
    items: itemsReducer,
    profile: profileReducer,
  },
});
