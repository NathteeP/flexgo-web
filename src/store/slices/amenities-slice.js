import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import amenitiesApi from '../../api/amenities';

export const fetchAmenities = createAsyncThunk(
  'amenities/fetchAmenities',
  async (payload, thunkAPI) => {
    try {
      const response = await amenitiesApi.getAmenities();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  amenities: [],
  isLoading: false,
  error: null,
};

const amenitiesSlice = createSlice({
  name: 'amenities',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAmenities.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAmenities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.amenities = action.payload;
      })
      .addCase(fetchAmenities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const amenitiesReducer = amenitiesSlice.reducer;
