import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/users';

const initialState = {
  isLoading: false,
  error: false,
  accomList: [],
  user: {},
  featureReview: [],
};

export const fetchHostAndAccom = createAsyncThunk(
  'host/fetchHostAndAccom',
  async (body, thunkAPI) => {
    try {
      const { data } = await userApi.getHostAndAccom(body);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const hostAccom = createSlice({
  name: 'host',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHostAndAccom.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchHostAndAccom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accomList = action.payload.accoms;
        state.featureReview = action.payload.featureReview;
        state.user = action.payload.user;
      })
      .addCase(fetchHostAndAccom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default hostAccom.reducer;
