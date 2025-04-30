import axios from 'axios';

export const fetchUserProfile = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/users/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUserProfile = async (data) => {
  const token = localStorage.getItem('token');
  const response = await axios.put(`${import.meta.env.VITE_API_URL}/users/profile`, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const fetchUsers = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/users`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUser = async (userId) => {
  const token = localStorage.getItem('token');
  await axios.delete(`${import.meta.env.VITE_API_URL}/users/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};