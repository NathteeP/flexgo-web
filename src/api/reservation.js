import axios from '../config/axios';

const reservationApi = {};

reservationApi.getReservationById = reservationId => axios.get(`/reservation/${reservationId}`)
reservationApi.createPaymentIntent = data => axios.post('reservation/create-payment-intent', data)
reservationApi.create = data => axios.post('/reservation/create', data)
reservationApi.confirmPayment = data => axios.patch('/reservation/payment-success', data)
reservationApi.delete = reservationId => axios.delete(`/reservation/${reservationId}`)
reservationApi.approve = reservationId => axios.get(`/reservation/${reservationId}/approve`)
reservationApi.editReservation = (reservationId, data) => axios.patch(`/reservation/${reservationId}`, data)
reservationApi.getAllReservationByHostId = (userId, page, sortKey, sortOrder, searchTerm) => 
    axios.get(`/reservation/all/${userId}`, {
        params: {
            page,
            sortKey,
            sortOrder,
            searchTerm
        }
    })

export default reservationApi
