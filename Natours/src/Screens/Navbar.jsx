/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext, useRef } from "react";
import "./CssFiles/Navbar.css";
import NavLogo from "../assets/tree.png";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";
import { logout } from "../Services/authService";

function Navbar() {
  const navigate = useNavigate();
  const dropDown = useRef();
  const [showDropDown, setShowDropDown] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDown.current && !dropDown.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { user, setAuthCode } = useContext(AuthContext);
  useEffect(() => {
    if (user && user.data) {
      
      const { email, name } = user.data.data;
      
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  const menudots = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menudots.current && !menudots.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
  setShowDropDown(false); // reset dropdown when user changes
}, [user]);

  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleLogout = () => {
    logout();
    setAuthCode(null); // clear token in context
    navigate("/")
  };
  const handleProfileClick = () => {
    setShowDropDown((prev) => (!prev ? true : false));
  };
  const handleAllTours = () => {
    navigate("/AllTours");
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <div className="navbar_container">
      <div className="logo_container">
        <img
          src={NavLogo}
          className="logo_img"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="logo">
          <span className="nat">Nat</span>
          <span className="ours">ours</span>
        </div>
      </div>

      <div className={`navbar_Links ${menuOpen ? "show" : ""}`}>
        <div className="hText" onClick={handleAllTours}>
          All Tours
        </div>
        <div className="hText" onClick={handleHomeClick}>
          Home
        </div>
        <div className="hText">ContactUs</div>
        {user ? (
          <div className="profile" ref={dropDown}>
            {/* <button className="navButton" onClick={() => handleLogout()}>
              Logout
            </button> */}
            <img
              src={
                user?.data?.data?.photo
                  ? `http://localhost:3000/img/users/${user.data.data.photo}`
                  : "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
              }
              alt="User"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
              onClick={handleProfileClick}
            />
            {showDropDown && (
              <div className="dropdown-menu">
                <p>
                  <strong>{`Name: ${user.data?.data?.name || "User"}`}</strong>
                </p>
                <p>{`Email: ${user.data?.data?.email}`}</p>
                <p>{`PhoneNo.: ${user.data?.data?.phoneNumber}`}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className="profile">
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
            <button className="navButton" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        )}
      </div>

      <div
        ref={menudots}
        className="menu_icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>
    </div>
  );
}

export default Navbar;
