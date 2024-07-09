import { createSlice } from '@reduxjs/toolkit';
import { defaultAddress } from '../../constant/google-map';
import { act } from 'react';

const initialState = {
  accom: {
    selectedType: '',
    selectedPlace: '',
    country: '',
    address: '',
    district: '',
    province: '',
    photos: [],
    name: '',
    description: '',
    houseRule: '',
    coordinate: defaultAddress.coordinate,
  },
  room: {
    roomList: [{ roomType: 'Standard Room', bedTypes: 'Single', capacity: 4 }],
    amenities: [],
  },
  gMapAddress: defaultAddress.address,
};

const hostForm = createSlice({
  name: 'hostForm',
  initialState,
  reducers: {
    setAccomLocation: (state, action) => {
      state.accom.coordinate = action.payload;
    },
    setHostFormData: (state, action) => {
      state.accom[action.payload.type] = action.payload.data;
    },
    setGMapAddress: (state, action) => {
      state.gMapAddress = action.payload;
    },
    setRoomFormData: (state, action) => {
      if (action.payload.type === 'bedTypes') {
        const { index, data } = action.payload;
        state.room.roomList[index].bedTypes = data;
      }

      if (action.payload.type === 'roomBed') {
        state.room.roomList.push({
          roomType: 'Standard Room',
          bedTypes: 'Single',
          capacity: 1,
        });
      }

      if (action.payload.type === 'remove') {
        state.room.roomList.splice(action.payload.index, 1);
      }

      state.room[action.payload.type] = action.payload.data;
    },
    setRoomCapacity: (state, action) => {
      const { index, value } = action.payload;
      if (value === -1) {
        if (state.room.roomList[index].capacity === 1) return state;
      } else if (value === 1) {
        if (state.room.roomList[index].capacity === 20) return state;
      }
      state.room.roomList[index].capacity += value;
    },
    addRoomAmenities: (state, action) => {
      if (state.room.amenities.some((item) => item.id === action.payload.id)) {
        const index = state.room.amenities.findIndex(
          (item) => item.id === action.payload.id
        );
        state.room.amenities.splice(index, 1);
        return state;
      }
      state.room.amenities.push(action.payload);
    },
    changeRoomType: (state, action) => {
      const { data, index } = action.payload;
      if (state.room.roomList[index]) {
        state.room.roomList[index].roomType = data;
      }
    },
  },
});

export default hostForm.reducer;

export const {
  setAccomLocation,
  setHostFormData,
  setGMapAddress,
  setRoomFormData,
  setRoomCapacity,
  addRoomAmenities,
  changeRoomType,
} = hostForm.actions;
