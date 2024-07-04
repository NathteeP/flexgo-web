import { configureStore } from '@reduxjs/toolkit';
import { modalReducer } from './slices/modal-slice';
import { userReducer } from './slices/user-slice';
import accomsReducer from './slices/accoms-slice';
import accomDetailReducer from './slices/accomDetail-slice';
import roomsReducer from './slices/rooms-slice';
import searchInfoReducer from './slices/searchInfo-slice';
import { amenitiesReducer } from './slices/amenities-slice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    user: userReducer,
    accoms: accomsReducer,
    accom: accomDetailReducer,
    rooms: roomsReducer,
    info: searchInfoReducer,
    amenities: amenitiesReducer,
  },
});

export default store;
