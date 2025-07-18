import axios from "axios";

const instance = axios.create({
  baseURL:import.meta.env.VITE_API_URL, //"http://localhost:3000/api/v1",
  withCredentials: true, // important
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  console.log(token, "token in axiosInstance");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
