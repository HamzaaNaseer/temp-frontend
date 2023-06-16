import axios from 'axios';

// Create a new Axios instance with the base URL
const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Replace with your base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    console.log('Request Interceptor:', config);
    return config;
  },
  (error) => {
    console.error('Request Error Interceptor:', error);
    return Promise.reject(error);
  }
);


export default axiosInstance;
