// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5173',
  timeout: 1000,
});

// Attach token to every request
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = Bearer `${token}`;
  }
  return config;
});

export default axiosInstance;