import React, { useContext, useState } from "react";
import { login } from "../Services/authService";
import { AuthContext } from "../Contexts/AuthContext";
import "./CssFiles/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setAuthCode } = useContext(AuthContext);
  const navigate =  useNavigate()
  const [emailval, setEmailval] = useState("");
  const [passval, setPassval] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const token = await login(emailval, passval);
        setAuthCode(token);
        localStorage.setItem("authToken", token);
        alert("Login successful");
        navigate("/")
    } catch (res) {
        const message = res?.response?.data?.message || "SomeThing Went Wrong Please Try Again";
        alert(`Login Failed: ${message}`);
    }
    setEmailval("");
    setPassval("");
  };

  return (
      <div className="login_wrapper">
        
      <div className="centered">
        <div className="loginHeader">
        Login with Your Credentials
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_field">
          <label htmlFor="email"> Enter Email</label>
          
          <input
            type="text"
            id="email"
            placeholder="enteremail@xyz.com"
            minLength={3}
            required
            value={emailval}
            onChange={(e) => setEmailval(e.target.value)}
          />
        </div>
        <div className="form_field">
          <label htmlFor="password"> Password</label>
          <input
            type="password"
            id="password"
            placeholder="password"
            minLength={3}
            required
            value={passval}
            onChange={(e) => setPassval(e.target.value)}
          />
        </div>
        <div className="form_button">
          <button type="Submit">Login</button>
        </div>
      </form>
    </div>
      </div>
  );
}

export default Login;
