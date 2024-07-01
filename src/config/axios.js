import axios from 'axios';
import { getAccessToken } from '../utils/localStorage';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    const accessToken = getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
