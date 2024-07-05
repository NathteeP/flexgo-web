import axios from '../config/axios';

const userApi = {};

userApi.register = (data) => axios.post('/user/register', data);
userApi.login = (data) => axios.post('/user/login', data);
userApi.logout = () => axios.post('/user/logout');
userApi.getAuthUser = () => axios.get('/user/me');
userApi.edit = (data) => axios.patch('/user/:user_id', data);

// ส่วนของ forgotPassword
userApi.requestOtp = (data) => axios.post('/user/request-otp', data);
userApi.verifyOtp = (data) => axios.post('/user/verify-otp', data);
userApi.changePassword = (data) => axios.post('/user/change-password', data);

export default userApi;
