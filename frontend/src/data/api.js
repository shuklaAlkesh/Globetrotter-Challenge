import axios from 'axios';
import { API_URL } from '../config';

// Create axios instance with default config
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export const createUser = async (userData) => {
  try {
    const response = await api.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || 'Failed to create user');
  }
};

export const getDestinations = async () => {
  try {
    const response = await api.get('/destinations');
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid destinations data received');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw new Error(error.response?.data?.message || 'Failed to fetch destinations');
  }
};

export const updateUserScore = async (userId, score) => {
  try {
    const response = await api.put(`/users/${userId}/score`, { score });
    return response.data;
  } catch (error) {
    console.error('Error updating score:', error);
    throw new Error(error.response?.data?.message || 'Failed to update score');
  }
};
