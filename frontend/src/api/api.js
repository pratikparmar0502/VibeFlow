import axios from "axios";
console.log("Connecting to:", import.meta.env.VITE_API_URL);

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const authServices = {
  register: (data) => API.post("/users/register", data),
  login: (data) => API.post("/users/login", data),
};
