import axios from '../config/axios';

const roomApi = {};

roomApi.getRoomAndAccomByRoomId = (roomId) =>
  axios.get(`/room/${roomId}/accom`);

roomApi.uploadRoomPhoto = (formData, room_id) =>
  axios.post(`/roomPhoto/create/${room_id}`, formData);

roomApi.createRoomAndUploadPhoto = (data) =>
  axios.post('/room/create/room-photo', data);

roomApi.deleteRoom = (room_id) => axios.delete(`room/delete/${room_id}`);

export default roomApi;
