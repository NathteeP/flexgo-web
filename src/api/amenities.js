import axios from '../config/axios';

const amenitiesApi = {};

amenitiesApi.getAmenities = () => axios.get('/amenities/all');

export default amenitiesApi;
