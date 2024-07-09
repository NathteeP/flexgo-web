import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modal-slice';
import { userReducer } from './slices/user-slice';
import accomsReducer from './slices/accoms-slice';
import accomDetailReducer from './slices/accomDetail-slice';
import roomsReducer from './slices/rooms-slice';
import searchInfoReducer from './slices/searchInfo-slice';
import { amenitiesReducer } from './slices/amenities-slice';
import hostReducer from './slices/host-accom-slice';
import { reservationReducer } from './slices/reservation-slice';
import { paymentReducer } from './slices/payment-slice';
import { roomReducer } from './slices/room-accom-slice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { usersReducer } from './slices/users-slice';
import hostFormReducer from './slices/hostForm-slice';

const reservationPersistConfig = {
  key: 'reservation',
  storage: storage,
};

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    users: usersReducer,
    accoms: accomsReducer,
    accom: accomDetailReducer,
    rooms: roomsReducer,
    info: searchInfoReducer,
    amenities: amenitiesReducer,
    host: hostReducer,
    reservation: persistReducer(reservationPersistConfig, reservationReducer),
    payment: paymentReducer,
    room: roomReducer,
    hostForm: hostFormReducer,
  },
});

export const persistor = persistStore(store);

export default store;
