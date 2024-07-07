import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import feeApi from '../../api/fee'
import reservationApi from '../../api/reservation'


const initialState = {
    reservationData: {},
    feeData: {},
    useCurrentUserProfile: true,
    reservationId: null,
    transactionId: null,
    isLoading: false,
    error: null
}

export const fetchFeeData = createAsyncThunk(
    'reservation/fetchFeeData',
    async(feeId, thunkAPI) => {
        try {
            const response = await feeApi.getFeeById(feeId)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const fetchReservationById = createAsyncThunk(
    'reservation/fetchReservationById',
    async(reservationId, thunkAPI) => {
        try {
            const response = await reservationApi.getReservationById(reservationId)
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: initialState,
    reducers: {
        setReservationData(state, action) {
            state.reservationData = action.payload
        },
        setUsingCurrentUserProfile(state, action) {
            state.useCurrentUserProfile = action.payload
        },
        setReservationId(state, action) {
            state.reservationId = action.payload
        },
        setTransactionId(state, action) {
            state.transactionId = action.payload
        },
        resetReservationSlice(state, action) {
            state.reservationData = initialState.reservationData;
            state.feeData = initialState.feeData;
            state.useCurrentUserProfile = initialState.useCurrentUserProfile;
            state.reservationId = initialState.reservationId;
            state.transactionId = initialState.transactionId;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
        }
},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFeeData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchFeeData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.feeData = action.payload;
            })
            .addCase(fetchFeeData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(fetchReservationById.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchReservationById.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reservationData = action.payload;
            })
            .addCase(fetchReservationById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const { 
    setReservationData,
    setUsingCurrentUserProfile,
    setReservationId,
    setTransactionId,
    resetReservationSlice
} = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer


