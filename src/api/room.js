import axios from '../config/axios';

const roomApi = {};

roomApi.getRoomAndAccomByRoomId = (roomId) =>
  axios.get(`/room/${roomId}/accom`);

roomApi.uploadRoomPhoto = (formData, room_id) =>
  axios.post(`/roomPhoto/create/${room_id}`, formData);

export default roomApi;
