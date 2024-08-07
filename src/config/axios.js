import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;

axios.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
