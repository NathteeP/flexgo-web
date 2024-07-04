import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modal-slice';
import { userReducer } from './slices/user-slice';
import accomsReducer from './slices/accoms-slice';
import accomDetailReducer from './slices/accomDetail-slice';
import roomsReducer from './slices/rooms-slice';
import searchInfoReducer from './slices/searchInfo-slice';
import { reservationReducer } from './slices/reservation-slice';
import { paymentReducer } from './slices/payment-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    accoms: accomsReducer,
    accom: accomDetailReducer,
    rooms: roomsReducer,
    info: searchInfoReducer,
    reservation: reservationReducer,
    payment: paymentReducer,
  },
});

export default store;
