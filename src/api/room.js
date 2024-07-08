import axios from '../config/axios';

const roomApi = {}

roomApi.getRoomAndAccomByRoomId = roomId => axios.get(`/room/${roomId}/accom`)


export default roomApi