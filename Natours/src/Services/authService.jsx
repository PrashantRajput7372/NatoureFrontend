// services/authService.js
import axios from "../Utils/axiosInstance";

export const login = async (email, password) => {
  const res = await axios.post("/user/login", { email, password });
  return res.data.token; // Backend se milne wala token
};

export const logout = () => {
  localStorage.removeItem("authToken");
};

export const getAuthCode = () => {
  return localStorage.getItem("authToken");
};
export const signUp = async (
  email,
  name,
  password,
  confirmPassword,
  phoneNumber
) => {
  const res = await axios.post("/user/signup", {
    email,
    name,
    password,
    confirmPassword,
    phoneNumber,
  });
  return res.data;
};

export const alltour = async () => {
  try {
    const res = await axios.get("/tours");

    return res.data;
  } catch (err) {
    console.error("Failed to fetch user:", err);
    throw err;
  }
};

export const getMe = async (token) => {
  try {
    const res = await axios.get("/user/getMe", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    console.error("Failed to fetch user:", err);
    throw err;
  }
};

export const top5Tours = async () => {
  const res = await axios.get("/tours/top-5-tours");
  return res.data.data;
};
