import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);
dayjs.extend(timezone);

const initialState = {
  userLocation: {
    coordinate: {},
  },
  desiredLocation: {},
  date: {
    from: dayjs().tz('Asia/Bangkok'),
    to: dayjs().add(1, 'day').tz('Asia/Bangkok'),
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
    },
    setGuest: (state, action) => {},
  },
});

export default searchInfo.reducer;

export const { getUserCurrentLocation, setUserCheckInDay, setUserCheckOutDay } =
  searchInfo.actions;
