import axios from 'axios';

const BASE_URL = 'http://your-api-url.com';

const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const authenticateUser = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/authenticate`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { registerUser, loginUser, authenticateUser };