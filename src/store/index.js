import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modal-slice';
import { userReducer } from './slices/user-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
  },
});

export default store;
