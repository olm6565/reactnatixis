import axios from 'axios';

const API_URL = 'http://localhost:8080/';

export const getProducts = () => {
  return axios.get(`${API_URL}products`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};

export const getOrders = () => {
  return axios.get(`${API_URL}orders`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
};
