import axios from '../config/axios';

const userApi = {};

userApi.register = (data) => axios.post('/user/register', data);
userApi.login = (data) => axios.post('/user/login', data);
userApi.logout = () => axios.post('/user/logout');
userApi.getAuthUser = () => axios.get('/user/me');
userApi.edit = (data) => axios.patch('/user/:user_id', data);

export default userApi;
