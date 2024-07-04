import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    reservationData: {
        reservation:{
            checkInDate: null,
            checkOutDate: null,
            status: "PENDING",
            customerAmount: 0,
            optionalRequest: '',
            customerName: '',
            customerEmail: '',
            customerPhone: '',
            customerCountry: '',
            data: null
        },
       bookingSummary: {
            accom: null,
            room: null,
            bookingDays: 0,
            roomPrice: null,
            serviceFee: null,
            totalPayment: null
       } 
    },
    isLoading: false,
    error: null
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState: initialState,
    reducers: {
        setReservationData(state, action) {
            state.reservationData.reservation.data = action.payload;
    }
}
})

export const { setReservationData } = reservationSlice.actions;
export const reservationReducer = reservationSlice.reducer


