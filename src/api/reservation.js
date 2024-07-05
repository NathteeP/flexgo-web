import axios from '../config/axios';

const reservationApi = {};

reservationApi.getReservationById = reservationId => axios.get(`/reservation/${reservationId}`);
reservationApi.create = data => axios.post('/reservation/create', data)
reservationApi.confirm = data => axios.patch('/reservation/payment-success', data)

export default reservationApi
