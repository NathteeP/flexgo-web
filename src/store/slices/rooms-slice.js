import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accomApi from '../../api/accom';

const initialState = {
  roomList: [],
  isLoading: true,
  error: false,
};

export const fetchRoomsListByAccomId = createAsyncThunk(
  'rooms/fetchByAccomId',
  async (id, thunkAPI) => {
    try {
      const { data } = await accomApi.getRoomListByAccomId(id);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const rooms = createSlice({
  name: 'rooms',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoomsListByAccomId.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRoomsListByAccomId.fulfilled, (state, action) => {
        (state.isLoading = false), (state.roomList = action.payload);
      })
      .addCase(fetchRoomsListByAccomId.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload);
      });
  },
});

export default rooms.reducer;