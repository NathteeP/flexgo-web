import axios from '../config/axios';

const reservationApi = {};

reservationApi.getReservationById = reservationId => axios.get(`/reservation/${reservationId}`);
reservationApi.create = data => axios.post('/reservation/create', data)

export default reservationApi
