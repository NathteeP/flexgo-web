import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegisterOpen: false,
  isSignInOpen: false,
  isForgotPasswordOpen: false,
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
    openForgotPassword: (state) => {
      state.isForgotPasswordOpen = true;
    },
    closeForgotPassword: (state) => {
      state.isForgotPasswordOpen = false;
    },
  },
});

export const {
  openRegister,
  closeRegister,
  openSignIn,
  closeSignIn,
  openForgotPassword,
  closeForgotPassword,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
