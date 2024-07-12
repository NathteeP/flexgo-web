import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accomApi from '../../api/accom';

const initialState = {
  detail: {},
  isLoading: false,
  error: false,
};

export const fetchAccomDetail = createAsyncThunk(
  'accoms/fetchAccomDetail',
  async (id, thunkAPI) => {
    try {
      const { data } = await accomApi.getAccomDetail(id);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const accomDetail = createSlice({
  name: 'accom',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAccomDetail.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAccomDetail.fulfilled, (state, action) => {
        state.isLoading = false;
        state.detail = action.payload;
        state.error = false;
      })
      .addCase(fetchAccomDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default accomDetail.reducer;
