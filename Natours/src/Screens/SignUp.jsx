import React, { useContext, useState } from "react";
import Input from "../Utils/Input";
import { signUp } from "../Services/authService";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "./CssFiles/Login.css";

export default function SignUp() {
  const navigate = useNavigate();
  const { setAuthCode } = useContext(AuthContext);
  const [emailval, setEmailval] = useState("");
  const [number, setnumber] = useState("");
  const [name, setname] = useState("");
  const [confrmPass, setconfrmPass] = useState("");
  const [passval, setPassval] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await signUp(emailval, name, passval, confrmPass, number);
      setAuthCode(token);
      navigate("/");
      alert("User Created");
    } catch (res) {
      console.log(res);
      const message = res.response.data.message;
      console.log(res.response.data.message);
      alert(`Login Failed: ${message}`);
    }
  };

  return (
    <div className="login_wrapper">
      <div className="centered">
        <div className="loginHeader">Welcome to Sign up page</div>
        <form onSubmit={handleSubmit}>
          <div className="form_field">
            <label> Enter Email</label>
            <input
              type="text"
              placeholder="enteremail@xyz.com"
              minLength={3}
              value={emailval}
              onChange={(e) => setEmailval(e.target.value)}
            />
          </div>
          <div className="form_field">
            <label> Enter Name</label>
            <input
              type="text"
              placeholder="User Name"
              minLength={3}
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="form_field">
            <label> Password</label>
            <input
              type="password"
              placeholder="password"
              minLength={3}
              value={passval}
              onChange={(e) => setPassval(e.target.value)}
            />
          </div>
          <div className="form_field">
            <label> ConfirmPassword</label>
            <input
              type="text"
              placeholder="Confirm password"
              minLength={3}
              value={confrmPass}
              onChange={(e) => setconfrmPass(e.target.value)}
            />
          </div>
          <div className="form_field">
            <label>Phone Number</label>
            <input
              type="number"
              placeholder="Phone Number"
              minLength={10}
              value={number}
              onChange={(e) => setnumber(e.target.value)}
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
