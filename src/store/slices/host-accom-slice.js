import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/users';
import reservationApi from '../../api/reservation';

const initialState = {
    isLoading: false,
    error: null,
    accomList: [],
    user: {},
    featureReview: [],
    reservationData: {
        reservation: [],
        currentPage: 1,
        totalPages: 0,
        sortKey: 'checkInDate',
        sortOrder: 'desc',
        searchTerm: ''
    }
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

export const fetchReservationByHostId = createAsyncThunk(
    'host/fetchReservationByHostId',
    async ({
      userId, page = 1, sortKey = 'checkInDate', sortOrder = 'desc', searchTerm = ''
    }, thunkAPI) => {
        try {
            const { data } = await reservationApi.getAllReservationByHostId(
              userId, page, sortKey, sortOrder, searchTerm
            );
            return data;
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message);
        }
    }
);

const hostSlice = createSlice({
    name: 'host',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.reservationData.searchTerm = action.payload;
        },
        setSortConfig: (state, action) => {
            const { key, direction } = action.payload;
            state.reservationData.sortKey = key;
            state.reservationData.sortOrder = direction;
        },
        setPage: (state, action) => {
            state.reservationData.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            // fetchHostAndAccom cases
            .addCase(fetchHostAndAccom.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
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
            })
            // fetchReservationByHostId cases
            .addCase(fetchReservationByHostId.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchReservationByHostId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reservationData = action.payload;
            })
            .addCase(fetchReservationByHostId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { setSearchTerm, setSortConfig, setPage } = hostSlice.actions;

export default hostSlice.reducer;