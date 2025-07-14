import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";
import { getAuthCode, getMe } from "../Services/authService";
// import { getMe } from "../Services/getMe"; // or wherever getMe is defined

export const AuthProvider = ({ children }) => {
  const [authCode, setAuthCode] = useState(getAuthCode()); // token
  const [user, setUser] = useState(null); // user info

  useEffect(() => {
    const fetchUser = async () => {
      if (authCode) {
        try {
          const userData = await getMe(authCode);
          setUser(userData);
        } catch (err) {
          console.error("Error fetching user:", err);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };

    fetchUser();
  }, [authCode]);

  return (
    <AuthContext.Provider value={{ authCode, setAuthCode, user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
