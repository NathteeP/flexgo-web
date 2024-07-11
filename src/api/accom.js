import axios from '../config/axios';
const accomApi = {};

accomApi.getAvailAccom = (data) => axios.post('/accom/avail', data);

accomApi.getAccomDetail = (accomId) => axios.get(`/accom/detail/${accomId}`);

accomApi.getRoomListByAccomId = (accomId) =>
  axios.get(`/accom/allrooms/${accomId}`);

accomApi.getAvailRoomListByAccomId = (accomId, data) =>
  axios.post(`accom/availrooms/${accomId}`, data);

// เพิ่มดึงข้อมูล accoms ทั้งหมด
accomApi.getAllAccoms = (page, sortKey, sortOrder, searchTerm) =>
  axios.get('/accom/all', {
    params: {
      page,
      sortKey,
      sortOrder,
      searchTerm,
    },
  });

// เพิ่ม Edit Status accom
accomApi.updateAccomStatus = (accomId, status) =>
  axios.patch(`/accom/edit/${accomId}`, { status });

accomApi.getAllAccomByUserId = (user_id) => axios.get(`/accom/all/${user_id}`);

export default accomApi;
