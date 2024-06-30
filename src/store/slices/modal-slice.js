import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegisterOpen: false,
  isSignInOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openRegister: (state) => {
      state.isRegisterOpen = true;
    },
    closeRegister: (state) => {
      state.isRegisterOpen = false;
    },
    openSignIn: (state) => {
      state.isSignInOpen = true;
    },
    closeSignIn: (state) => {
      state.isSignInOpen = false;
    },
  },
});

export const { openRegister, closeRegister, openSignIn, closeSignIn } =
  modalSlice.actions;
export const modalReducer = modalSlice.reducer;
