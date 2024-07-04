import axios from '../config/axios';
const accomApi = {};

accomApi.getAvailAccom = (data) => axios.post('/accom/avail', data);

accomApi.getAccomDetail = (accomId) => axios.get(`/accom/detail/${accomId}`);

accomApi.getRoomListByAccomId = (accomId) =>
  axios.get(`/accom/allrooms/${accomId}`);

accomApi.getAvailRoomListByAccomId = (accomId, data) =>
  axios.post(`accom/availrooms/${accomId}`, data);

export default accomApi;
