import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (payload, thunkAPI) => {
    try {
      const response = await userApi.getAllUsers();
      return response.data.users;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
        state.totalPages = Math.ceil(action.payload.length / 10); // สมมุติว่าต้องการแสดง 10 รายการต่อหน้า
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
