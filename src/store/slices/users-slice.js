import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (
    { page = 1, sortKey = 'createdAt', sortOrder = 'asc', searchTerm = '' },
    thunkAPI
  ) => {
    try {
      const response = await userApi.getAllUsers(
        page,
        sortKey,
        sortOrder,
        searchTerm
      );
      console.log('Fetched users:', response.data);
      return response.data;
    } catch (error) {
      console.error(
        'Error fetching users:',
        error.response?.data || error.message
      );
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  }
);

const initialState = {
  users: [],
  isLoading: false,
  error: null,
  currentPage: 1,
  totalPages: 1,
  sortKey: 'createdAt',
  sortOrder: 'asc',
  searchTerm: '',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setSortConfig: (state, action) => {
      state.sortKey = action.payload.key;
      state.sortOrder = action.payload.direction;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload.users;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setSortConfig, setSearchTerm } = usersSlice.actions;

export const usersReducer = usersSlice.reducer;
