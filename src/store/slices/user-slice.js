import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/users';

export const fetchAuthUser = createAsyncThunk(
  'user/fetchAuthUser',
  async (payload, thunkAPI) => {
    try {
      const response = await userApi.getAuthUser();
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (payload, thunkAPI) => {
    try {
      const response = await userApi.login(payload);
      console.log(response.data);
      return response.data;
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

// ส่วนของ forgot password
export const requestOtp = createAsyncThunk(
  'user/requestOtp',
  async (data, thunkAPI) => {
    try {
      const response = await userApi.requestOtp(data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'user/verifyOtp',
  async (data, thunkAPI) => {
    try {
      const response = await userApi.verifyOtp(data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const changePassword = createAsyncThunk(
  'user/changePassword',
  async (data, thunkAPI) => {
    try {
      const response = await userApi.changePassword(data);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

const initialState = {
  authUser: null,
  isLoading: false,
  error: null,
  otpRefCode: null,
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
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.authUser = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
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
      })
      // ส่วนของ forgot Password
      .addCase(requestOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.otpRefCode = action.payload.refCode;
      })
      .addCase(requestOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(changePassword.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
