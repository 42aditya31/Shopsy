// src/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000'; // Replace with your backend URL

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

export const signupUser = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/auth/signup`, { username, password });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Add more functions as needed...