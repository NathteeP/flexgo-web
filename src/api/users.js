import axios from '../config/axios';

const userApi = {};

userApi.register = (data) => axios.post('/user/register', data);
userApi.login = (data) => axios.post('/user/login', data);
userApi.logout = () => axios.post('/user/logout');
userApi.getAuthUser = () => axios.get('/user/me');
userApi.edit = (user_id, data) => axios.patch(`/user/${user_id}`, data); // แก้ให้เป็น literal Id

// ดึงข้อมูล users ทั้งหมด
userApi.getAllUsers = (page, sortKey, sortOrder, searchTerm) =>
  axios.get('/user/all', {
    params: {
      page,
      sortKey,
      sortOrder,
      searchTerm,
    },
  });

userApi.editAuthUser = (data) => axios.patch('/user/me', data);
userApi.edit = (data) => axios.patch('/user/:user_id', data);

// ส่วนของ forgotPassword
userApi.requestOtp = (data) => axios.post('/user/request-otp', data);
userApi.verifyOtp = (data) => axios.post('/user/verify-otp', data);
userApi.changePassword = (data) => axios.post('/user/change-password', data);

// Get Host and Accom detail
userApi.getHostAndAccom = (user_id) => axios.get(`/user/accom/${user_id}`);

export default userApi;
