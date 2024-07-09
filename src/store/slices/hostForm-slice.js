import { createSlice } from '@reduxjs/toolkit';
import { defaultAddress } from '../../constant/google-map';

const initialState = {
  accom: {
    selectedType: '',
    selectedPlace: '',
    country: '',
    address: '',
    district: '',
    province: '',
    roomTypes: [''],
    bedTypes: ['Single'],
    guests: 4,
    amenities: [],
    photos: [],
    name: '',
    description: '',
    houseRule: '',
    price: '',
    coordinate: defaultAddress.coordinate,
  },
  room: {},
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
      if (action.payload.type === 'photos') {
        if (state.accom.photos.length >= 1) {
          state.accom.photos.push(action.payload.data);
        } else {
          state.accom.photos = action.payload.data;
        }
      }
      state.accom[action.payload.type] = action.payload.data;
    },
    setGMapAddress: (state, action) => {
      state.gMapAddress = action.payload;
    },
  },
});

export default hostForm.reducer;

export const { setAccomLocation, setHostFormData, setGMapAddress } =
  hostForm.actions;
