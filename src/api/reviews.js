import axios from '../config/axios';

const reviewsApi = {};

reviewsApi.getReviewByReservationId = reservationId => axios.get(`/reviews/${reservationId}`)
reviewsApi.create = (reservationId, body) => axios.post(`/reviews/${reservationId}`, body)

export default reviewsApi