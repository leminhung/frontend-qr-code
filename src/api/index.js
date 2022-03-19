import axios from "axios";
const REACT_APP_BASE_URL = "https://react-user-qr-code.herokuapp.com/api/v1";

export const getUser = (userId) =>
  axios.get(`${REACT_APP_BASE_URL}/users/${userId}`);

export const createUser = (payload) =>
  axios.post(`${REACT_APP_BASE_URL}/users`, payload);

export const updateUser = (payload) =>
  axios.post(`${REACT_APP_BASE_URL}/users/update`, payload);
