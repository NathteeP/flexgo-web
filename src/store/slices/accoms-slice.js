import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import accomApi from '../../api/accom';

const initialState = {
  accomsList: [],
  detail: null,
  currentPage: 1,
  totalPages: 1,
  sortKey: 'createdAt',
  sortOrder: 'desc',
  searchTerm: '',
  isLoading: false,
  error: false,
};

export const fetchAvailAccom = createAsyncThunk(
  'accoms/fetchAvailAccom',
  async (body, thunkAPI) => {
    try {
      const { data } = await accomApi.getAvailAccom(body);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchAllAccoms = createAsyncThunk(
  'accoms/fetchAllAccoms',
  async (
    { page = 1, sortKey = 'createdAt', sortOrder = 'desc', searchTerm = '' },
    thunkAPI
  ) => {
    try {
      const response = await accomApi.getAllAccoms(
        page,
        sortKey,
        sortOrder,
        searchTerm
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateAccomStatus = createAsyncThunk(
  'accoms/updateAccomStatus',
  async ({ accomId, status }, thunkAPI) => {
    try {
      const { data } = await accomApi.updateAccomStatus(accomId, status);
      console.log(data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteAccom = createAsyncThunk(
  'accoms/deleteAccom',
  async (accomId, thunkAPI) => {
    try {
      const response = await accomApi.deleteAccom(accomId);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const accomsSlice = createSlice({
  name: 'accoms',
  initialState,
  reducers: {
    setPage(state, action) {
      state.currentPage = action.payload;
    },
    setSortConfig(state, action) {
      state.sortKey = action.payload.key;
      state.sortOrder = action.payload.direction;
    },
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    selectAccom(state, action) {
      state.detail = state.accomsList.find(
        (accom) => accom.id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAvailAccom.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAvailAccom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accomsList = action.payload;
        state.error = false;
      })
      .addCase(fetchAvailAccom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllAccoms.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllAccoms.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accomsList = action.payload.accoms;
        state.totalPages = action.payload.totalPages;
        state.currentPage = action.payload.currentPage;
        state.error = false;
      })
      .addCase(fetchAllAccoms.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateAccomStatus.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(updateAccomStatus.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.accomsList.findIndex(
          (accom) => accom.id === action.payload.id
        );
        if (index !== -1) {
          state.accomsList[index] = action.payload;
          if (state.detail && state.detail.id === action.payload.id) {
            state.detail = action.payload;
          }
        }
        state.error = false;
      })
      .addCase(updateAccomStatus.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteAccom.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteAccom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.accomsList = state.accomsList.filter(
          (accom) => accom.id !== action.meta.arg
        );
        state.error = false;
      })
      .addCase(deleteAccom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setPage, setSortConfig, setSearchTerm, selectAccom } =
  accomsSlice.actions;

export default accomsSlice.reducer;
