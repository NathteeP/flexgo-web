import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import reviewsApi from '../../api/reviews';

const initialState = {
    reviewData: {
        ratingType1: 0,
        ratingType2: 0,
        ratingType3: 0,
        ratingType4: 0,
        comment: ''
    },
    isLoading: false,
    error: null,
    validationError: {},
}

export const fetchReviewByReservationId = createAsyncThunk(
    'review/fetchByReservationId',
    async (id, thunkAPI) => {
        try {
            const { data } = await reviewsApi.getReviewByReservationId(id)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const reviewSlice = createSlice({
    name: 'review',
    initialState: initialState,
    reducers: {
        setReview: (state, action) => {
            state.reviewData = {
                ...state.reviewData,
                ...action.payload
            }
        },
        setValidationError: (state, action) => {
            state.validationError = {
                ...state.validationError,
                ...action.payload
            }
        },
        resetValidationError: (state) => {
            state.validationError = {}
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviewByReservationId.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchReviewByReservationId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.reviewData = action.payload;
            })
            .addCase(fetchReviewByReservationId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const {
    setReview,
    setValidationError,
    resetValidationError,
} = reviewSlice.actions

export const reviewReducer = reviewSlice.reducer