import axios from 'axios';
import { getAccessToken } from '../utils/auth';

// Configure axios defaults
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ROOT,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
});

// Add auth token interceptor
axiosInstance.interceptors.request.use(async (config) => {
  const token = await getAccessToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export { axiosInstance };