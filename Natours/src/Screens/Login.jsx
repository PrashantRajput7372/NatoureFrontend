import React, { useContext, useState } from "react";
import { login } from "../Services/authService";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import "./CssFiles/Login.css";

function Login() {
  const { setAuthCode } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [typepopup, setTypepopup] = useState("");
  const [shouldNavigate, setShouldNavigate] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleLoginSuccess = (token) => {
    setAuthCode(token);
    localStorage.setItem("authToken", token);
    setTypepopup("WelCome to Natours")
    setModalMessage("🎉 Login Successful! Let's Explore Natours!");
    setShouldNavigate(true);
    setModalOpen(true);
  };

  const handleLoginError = (error) => {
    const errorMessage =
      error?.response?.data?.message || "Something went wrong. Please try again.";
    setTypepopup("Alert")
    setModalMessage("❌ Login Failed! " + errorMessage);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);
      handleLoginSuccess(token);
      // navigate("/"); // optional if handled after modal
    } catch (error) {
      handleLoginError(error);
    }

    resetForm();
  };

  return (
    <div className="login_wrapper">
      <div className="centered">
        <div className="loginHeader">Login with Your Credentials</div>
        <form onSubmit={handleSubmit}>
          <div className="form_field">
            <label htmlFor="email">Enter Email</label>
            <input
              type="text"
              id="email"
              placeholder="enteremail@xyz.com"
              minLength={3}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              minLength={3}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form_button">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>

      <Modal
        typepopup={typepopup}
        openModal={modalOpen}
        setOpenModal={setModalOpen}
        message={modalMessage}
        shouldNavigate={shouldNavigate}
        navigate={()=>navigate("/")}
      />
    </div>
  );
}

export default Login;
