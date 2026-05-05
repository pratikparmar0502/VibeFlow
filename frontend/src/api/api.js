import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const authServices = {
  login: (data) => API.post("/users/login", data),
  register: (data) => API.post("/users/register", data),
};
