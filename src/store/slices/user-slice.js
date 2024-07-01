import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const fetchAuthUser = createAsyncThunk(
  'user/fetchAuthUser',
  async (payload, thunkAPI) => {
    try {
      const response = await userApi.getAuthUser();
      console.log(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (payload, thunkAPI) => {
    try {
      const response = await userApi.logout();
      console.log(response.data.message);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  authUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'authUser',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuthUser.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAuthUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = action.payload;
      })
      .addCase(fetchAuthUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state, action) => {
        state.isLoading = true;
        state.authUser = null;
      })
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.authUser = null;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
