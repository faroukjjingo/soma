import axios from 'axios';

export const fetchAnalytics = async () => {
  const token = localStorage.getItem('token');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/analytics`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};