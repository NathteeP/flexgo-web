import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const initialState = {
  userLocation: {
    coordinate: {
      lat: 13.7706167,
      lng: 100.5408732,
    },
  },
  desiredLocation: {
    coordinate: {},
  },
  date: {
    checkInDate: dayjs().tz('Asia/Bangkok').toString(),
    checkOutDate: dayjs().add(1, 'day').tz('Asia/Bangkok').toString(),
  },
  capacity: {
    adults: 1,
    children: 0,
  },
  rooms: 0,
};

const searchInfo = createSlice({
  name: 'searchInfo',
  initialState,
  reducers: {
    getUserCurrentLocation: (state, action) => {
      state.userLocation.coordinate = action.payload;
    },
    setUserCheckInDay: (state, action) => {
      state.date.from = action.payload;
    },
    setUserCheckOutDay: (state, action) => {
      state.date.to = action.payload;
      console.log(dayjs(state.date.from).get('day'));
      console.log(dayjs(state.date.to).get('day'));
    },
    setGuest: (state, action) => {
      if (action.payload.operation == 'increment') {
        state.capacity[action.payload.type] += 1;
      } else if (action.payload.operation == 'decrement') {
        if (
          state.capacity[action.payload.type] > 1 &&
          action.payload.type == 'adults'
        ) {
          state.capacity[action.payload.type] -= 1;
        } else if (
          state.capacity[action.payload.type] > 0 &&
          action.payload.type == 'children'
        ) {
          state.capacity[action.payload.type] -= 1;
        }
      }
    },
    setUserDesiredLocation: (state, action) => {
      state.desiredLocation.coordinate = action.payload;
    },
  },
});

export default searchInfo.reducer;

export const {
  getUserCurrentLocation,
  setUserCheckInDay,
  setUserCheckOutDay,
  setGuest,
  onSubmitFilterAccom,
  setUserDesiredLocation,
} = searchInfo.actions;
