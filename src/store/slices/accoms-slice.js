import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accomApi from '../../api/accom';

const initialState = {
  accomsList: [],
  isLoading: false,
  error: false,
};

export const fetchAvailAccom = createAsyncThunk(
  'accoms/fetchAvailAccom',
  async (body, thunkAPI) => {
    try {
      // const { data } = await accomApi.getAvailAccom(body);
      // return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const accomsSlice = createSlice({
  name: 'accoms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailAccom.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAvailAccom.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.accomsList = action.payload;
        state.error = false;
      })
      .addCase(fetchAvailAccom.rejected, (state, action) => {
        state.isLoading = false;
        // state.error = action.payload;
      });
  },
});

export default accomsSlice.reducer;
