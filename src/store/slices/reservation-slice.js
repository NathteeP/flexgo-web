import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import feeApi from '../../api/fee'

const MockData = {
    checkInDate: "Sun, 08 Jul 2024 08:20:20 GMT",
    checkOutDate: "Thu, 12 Jul 2024 08:20:20 GMT",
    customerAmount: 2,
    roomId: 1,
    feeId: null
}


const initialState = {
    reservationData: {...MockData},
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
    }
})

export const { 
    setReservationData,
    setUsingCurrentUserProfile,
    setReservationId,
    setTransactionId
} = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer


