import axios from 'axios';

// Create an Axios instance
const apiAxios = axios.create({
  baseURL: 'https://api.tawk.to/v1/', // Base URL for all API routes
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor (optional)
apiAxios.interceptors.request.use(
  (config) => {
    // Example: Add authorization token if needed
    const token = process.env.TAWK_API_KEY; // Use a secure method to handle API keys
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor (optional)
apiAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    // Log error or display notification
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default apiAxios;
