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
    roomTypes: [{ name: 'Standard Room', bedTypes: 'Single', capacity: 4 }],
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
      if (action.payload.type === 'roomTypes') {
        state.room.roomTypes[action.payload.index].name = action.payload.data;
      }

      if (action.payload.type === 'bedTypes') {
        state.room.roomTypes[action.payload.index].bedTypes =
          action.payload.data;
      }

      if (action.payload.type === 'roomBed') {
        state.room.roomTypes.push({
          name: 'Standard Room',
          bedTypes: 'Single',
          capacity: 1,
        });
      }

      if (action.payload.type === 'remove') {
        state.room.roomTypes.splice(action.payload.index, 1);
      }

      state.room[action.payload.type] = action.payload.data;
    },
    setRoomCapacity: (state, action) => {
      if (action.payload.value === -1) {
        if (state.room.roomTypes[action.payload.index].capacity === 1)
          return state;
      } else if (action.payload.value === 1) {
        if (state.room.roomTypes[action.payload.index].capacity === 20)
          return state;
      }
      state.room.roomTypes[action.payload.index].capacity +=
        action.payload.value;
    },
    addRoomAmenities: (state, action) => {
      if (state.room.amenities.includes(action.payload)) {
        const index = state.room.amenities.findIndex(
          (item) => item === action.payload
        );
        state.room.amenities.splice(index, 1);
        return state;
      }
      state.room.amenities.push(action.payload);
    },
    changeRoomType: (state, action) => {
      const { data, index } = action.payload;
      if (state.room.roomTypes[index]) {
        state.room.roomTypes[index].name = data;
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
