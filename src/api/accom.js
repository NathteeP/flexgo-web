import axios from '../config/axios';
const accomApi = {};

accomApi.getAvailAccom = (data) => axios.post('/accom/avail', data);

accomApi.getAccomDetail = (accomId) => axios.get(`/accom/detail/${accomId}`);

accomApi.getRoomListByAccomId = (accomId) =>
  axios.get(`/accom/allrooms/${accomId}`);

accomApi.getAvailRoomListByAccomId = (accomId, data) =>
  axios.post(`accom/availrooms/${accomId}`, data);

accomApi.getAllAccomByUserId = (user_id) => axios.get(`/accom/all/${user_id}`);

accomApi.createAccomAndRoom = (data) =>
  axios.post('/accom/create/accom-room', data);

export default accomApi;
