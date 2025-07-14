import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api/v1",
  withCredentials: true, // important
  headers: {
    "Content-Type": "application/json",
  }
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authCode");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
