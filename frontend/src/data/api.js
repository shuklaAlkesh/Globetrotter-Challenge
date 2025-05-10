import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// export const createUser = async (userData) => {
//   try {
//     const response = await axios.post(`${API_URL}/users`, userData);
//     return response.data;
//   } catch (error) {
//     throw new Error(JSON.stringify(error.response?.data) || error.message);
//   }
// };

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/users`, {
      username: userData.username || `user_${Date.now()}`,
      name: userData.name || 'Anonymous',
      age: userData.age || 0
    });
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw new Error('Failed to create user');
  }
};

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${API_URL}/destinations`);
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Invalid destinations data received');
    }
    return response.data;
  } catch (error) {
    console.error('Error fetching destinations:', error);
    throw new Error('Failed to fetch destinations');
  }
};

export const updateUserScore = async (userId, score) => {
  try {
    console.log('Updating score for user:', userId, 'New score:', score);
    const response = await axios.put(`${API_URL}/users/${userId}/score`, { score });
    console.log('Score update response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error updating score:', error);
    throw new Error('Failed to update score');
  }
};
