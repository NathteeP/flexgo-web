import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import roomApi from '../../api/room';





const initialState = {
    roomData: {},
    isLoading: false,
    error: null
}

export const fetchRoomAndAccomByRoomId = createAsyncThunk(
    'roomAccom/fetchByRoomId',
    async (id, thunkAPI) => {
        try {
            const { data } = await roomApi.getRoomAndAccomByRoomId(id)
            return data
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const roomAccomSlice = createSlice({
    name: 'roomAccom',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRoomAndAccomByRoomId.pending, (state, action) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchRoomAndAccomByRoomId.fulfilled, (state, action) => {
                state.isLoading = false;
                state.roomData = action.payload;
            })
            .addCase(fetchRoomAndAccomByRoomId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            })
    }
})

export const roomReducer = roomAccomSlice.reducer