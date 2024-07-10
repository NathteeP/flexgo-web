import { createSlice } from '@reduxjs/toolkit';
import { defaultAddress } from '../../constant/google-map';
import { act } from 'react';

const initialState = {
  accom: {
    type: '',
    country: '',
    address: '',
    district: '',
    province: '',
    name: '',
    description: '',
    houseRule: {
      checkIn: '',
      checkOut: '',
      petsRule: '',
      ageRule: '',
      cancelPolicy: '',
    },
    coordinate: defaultAddress.coordinate,
  },
  accomPhotos: [],
  room: {
    roomType: 'Standard Room',
    beds: { type: 'Single bed', amount: 1 },
    capacity: 4,
    price: 0,
    amenities: [],
    accomId: null,
    bathRoom: 1,
    bedRoom: 1,
  },
  roomPhotos: [],
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
      if (action.payload.type === 'houseRule') {
        const { topic, value } = action.payload;
        state.accom.houseRule[topic] = value;
        return state;
      }
      state.accom[action.payload.type] = action.payload.data;
    },
    setGMapAddress: (state, action) => {
      state.gMapAddress = action.payload;
    },
    setRoomFormData: (state, action) => {
      if (action.payload.type === 'bedTypes') {
        const { data } = action.payload;
        state.room.beds.type = data;
      }

      if (action.payload.type === 'capacity') {
        const { data } = action.payload;
        state.room.capacity = data;
      }

      if (action.payload.type === 'bedAmount') {
        const { data } = action.payload;
        state.room.beds.amount = data;
      }

      if (action.payload.type === 'price') {
        const { value } = action.payload;
        state.room.price = value;
      }
    },
    setRoomCapacity: (state, action) => {
      const { value } = action.payload;
      if (value === -1) {
        if (state.room.capacity === 1) return state;
      } else if (value === 1) {
        if (state.room.capacity === 1) return state;
      }
      state.room.capacity += value;
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
      const { data } = action.payload;
      state.room.roomType = data;
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
