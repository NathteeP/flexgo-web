import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/users';
import accomApi from '../../api/accom';

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

export const fetchAllUserAccom = createAsyncThunk("user/fetchAccomList", async(body,thunkAPI) => {
  try {
    const {data} = await accomApi.getAllAccomByUserId(body)
    return data
  } catch(err) {
    return thunkAPI.rejectWithValue(err)
  }
})

export const fetchAllRoomByAccomId = createAsyncThunk("user/fetchUserAccomRoom", async(body,thunkAPI) => {
  try {
    const {data} = await accomApi.getRoomListByAccomId(body)
    return data
  }catch(err) {
    return thunkAPI.rejectWithValue(err.message)
  }
})

const initialState = {
  authUser: null,
  isLoading: true,
  error: null,
  accomsList : [],
  roomsList : [],
  isLoadingAccom : false,
  isLoadingRoomList : false,
  rating : null,
  hostTime : 0
};

const userSlice = createSlice({
  name: 'authUser',
  initialState: initialState,
  reducers: {
  },
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
      // --- Login User ---
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
      // --- Logout user ---
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
      // --- fetch All of user accom ---
      .addCase(fetchAllUserAccom.pending, (state,action) => {
        state.isLoadingAccom = true;
        state.error = false
      }) 
      .addCase(fetchAllUserAccom.fulfilled, (state,action) => {
        state.isLoadingAccom = false;
        state.accomsList = action.payload.accom
        state.rating = action.payload.rating
        state.hostTime = action.payload.hostTime
      })
      .addCase(fetchAllUserAccom.rejected, (state,action) => {
        state.isLoadingAccom = false;
        state.error = action.payload
      })
      // --- fetch All room of accom ID ---
      .addCase(fetchAllRoomByAccomId.pending, (state,action) => {
        state.isLoadingRoomList = true;
        state.error = false
      })
      .addCase(fetchAllRoomByAccomId.fulfilled, (state,action) => {
        state.isLoadingRoomList = false;
        state.roomsList = action.payload.room
      }).addCase(fetchAllRoomByAccomId.rejected, (state,action) => {
        state.isLoadingRoomList = false;
        state.error = action.payload
      })
  },
});

export const userReducer = userSlice.reducer;