import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isRegisterOpen: false,
  isSignInOpen: false,
  isForgotPasswordOpen: false,
  isPictureOpen: false,
  isAlbumOpen: false,
  isAmenitiesOpen: false,
  isNearbyOpen: false,
  currentPicture: null,
  currentAlbum: null,
  isAlbumSelectedPictureOpen: false,
  isResetPasswordOpen: false,
  isNotiOpen: false,
  isHostNotiByAdminOpen: false,
  isAdminRemoveRoomOpen: false,
  isHostConfirmAddNewAccom: false,
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
    openResetPassword: (state) => {
      state.isResetPasswordOpen = true;
    },
    closeResetPassword: (state) => {
      state.isResetPasswordOpen = false;
    },
    openPicture: (state, action) => {
      state.isPictureOpen = true;
      state.currentPicture = action.payload;
    },
    closePicture: (state) => {
      state.isPictureOpen = false;
      state.currentPicture = null;
    },
    openAlbum: (state) => {
      state.isAlbumOpen = true;
    },
    closeAlbum: (state) => {
      state.isAlbumOpen = false;
    },
    openAlbumSelectedPicture: (state, action) => {
      state.isAlbumSelectedPictureOpen = true;
      state.currentAlbum = action.payload;
    },
    closeAlbumSelectedPicture: (state) => {
      state.isAlbumSelectedPictureOpen = false;
      state.currentAlbum = null;
    },
    openAmenities: (state) => {
      state.isAmenitiesOpen = true;
    },
    closeAmenities: (state) => {
      state.isAmenitiesOpen = false;
    },
    openNearby: (state) => {
      state.isNearbyOpen = true;
    },
    closeNearby: (state) => {
      state.isNearbyOpen = false;
    },
    openNoti: (state) => {
      state.isNotiOpen = true;
    },
    closeNoti: (state) => {
      state.isNotiOpen = false;
    },
    openHostNotiByAdmin: (state) => {
      state.isHostNotiByAdminOpen = true;
    },
    closeHostNotiByAdmin: (state) => {
      state.isHostNotiByAdminOpen = false;
    },
    openAdminRemoveRoom: (state) => {
      state.isAdminRemoveRoomOpen = true;
    },
    closeAdminRemoveRoom: (state) => {
      state.isAdminRemoveRoomOpen = false;
    },
    openHostConfirmAddNewAccom: (state) => {
      state.isHostConfirmAddNewAccom = true;
    },
    closeHostConfirmAddNewAccom: (state) => {
      state.isHostConfirmAddNewAccom = false;
    },
  },
});

export const {
  openRegister,
  closeRegister,
  openSignIn,
  closeSignIn,
  closeForgotPassword,
  openForgotPassword,
  openResetPassword,
  closeResetPassword,
  openPicture,
  closePicture,
  openAlbum,
  closeAlbum,
  openAlbumSelectedPicture,
  closeAlbumSelectedPicture,
  openAmenities,
  closeAmenities,
  openNearby,
  closeNearby,
  openNoti,
  closeNoti,
  openHostNotiByAdmin,
  closeHostNotiByAdmin,
  openAdminRemoveRoom,
  closeAdminRemoveRoom,
  openHostConfirmAddNewAccom,
  closeHostConfirmAddNewAccom,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
