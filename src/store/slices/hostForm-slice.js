import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { defaultAddress } from '../../constant/google-map';
import { act } from 'react';
import accomApi from '../../api/accom';
import roomApi from '../../api/room';

const initialState = {
  accom: {
    type: 'House',
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
      cancelPolicy: 'FLEXIBLE',
    },
    coordinate: defaultAddress.coordinate,
  },
  room: {
    roomType: 'Standard Room',
    beds: { type: 'Single bed', amount: 1 },
    capacity: 4,
    price: '',
    amenities: [],
    accomId: '',
    bathRoom: '',
    bedRoom: '',
    size: '',
    name: '',
    roomId: '',
  },
  isLoading: false,
  error: false,
  gMapAddress: defaultAddress.address,
};

export const submitCreateAccomAndRoom = createAsyncThunk(
  'create/AccomRoom',
  async (payload, thunkAPI) => {
    try {
      const { data } = await accomApi.createAccomAndRoom(payload.body);
      await accomApi.uploadAccomPhoto(payload.photo.accom, data.accom.id);
      await roomApi.uploadRoomPhoto(payload.photo.room, data.roomResult.id);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err);
    }
  }
);

export const submitCreateRoomAndUploadPhoto = createAsyncThunk(
  'create/RoomAndPhoto',
  async (payload, thunkAPI) => {
    try {
      const { body, photo } = payload;
      const formData = new FormData();
      formData.append('room_image', photo);
      formData.append('json', JSON.stringify(body));
      const { data } = await roomApi.createRoomAndUploadPhoto(formData);
      return data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

const hostForm = createSlice({
  name: 'hostForm',
  initialState,
  reducers: {
    setAccomLocation: (state, action) => {
      state.accom.coordinate = action.payload;
    },
    setHostFormData: (state, action) => {
      if (action.payload.type === 'houseRule') {
        const { topic, data } = action.payload;
        state.accom.houseRule[topic] = data;
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
        return state;
      }

      if (action.payload.type === 'capacity') {
        const { data } = action.payload;
        state.room.capacity = data;
        return state;
      }

      if (action.payload.type === 'bedAmount') {
        const { data } = action.payload;
        state.room.beds.amount = data;
        return state;
      }

      if (action.payload.type === 'price') {
        const { value } = action.payload;
        state.room.price = value;
        return state;
      }
      if (action.payload.type === 'size') {
        const { value } = action.payload;
        state.room.size = value;
        return state;
      }
      state.room[action.payload.type] = action.payload.data;
    },
    setRoomCapacity: (state, action) => {
      const { value } = action.payload;
      if (value === -1) {
        if (state.room.capacity === 1) return state;
      } else if (value === 1) {
        if (state.room.capacity === 20) return state;
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
    resetForm: (state, action) => initialState,
    getRoomDataBeforeEdit: (state, action) => {
      state.room = { ...state.room, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitCreateAccomAndRoom.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(submitCreateAccomAndRoom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accom = initialState.accom;
        state.room = initialState.room;
      })
      .addCase(submitCreateAccomAndRoom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(submitCreateRoomAndUploadPhoto.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(submitCreateRoomAndUploadPhoto.fulfilled, (state, action) => {
        state.isLoading = false;
        state.room = initialState.room;
      })
      .addCase(submitCreateRoomAndUploadPhoto.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
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
  resetForm,
  getRoomDataBeforeEdit,
} = hostForm.actions;
